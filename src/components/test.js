const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
    console.error('Error: No path to input file found');
    console.error('Usage: node test.js <file>');
    process.exit(1);
}

const inputFilePath = path.resolve(process.argv[2]);

let fileInfo;
try {
    fileInfo = fs.readFileSync(inputFilePath, 'utf-8');
}
catch (err) {
    console.error(`Error: Could not read file at ${inputFilePath}`);
    console.error(err.message);
    process.exit(1);
}

const customerNumAccountRegex = /(\d)\s*-\s*(\d)/;
const billPeriodRegex = /Bill\s+period:\s*([\s\S]*?)(?=\n\s*\w+\s+\w+:|\n\n|\r\n\r\n)/i;
const periodDatesRegex = /([A-Za-z]{3}\s+\d{1,2},\s*\d{4})\s+to\s+([A-Za-z]{3}\s+\d{1,2},\s*\d{4})/;
const billNumberRegex = /Bill\s+number:\s*(\d+)/i;
const billDateRegex = /Bill\s+date:\s*([A-Za-z]{3}\s+\d{1,2},\s*\d{4})/i;
const totalNewChargesRegex = /Total\s+new\s+charges\s+\$?([\d,]+\.\d{2})/i;

const customerNumAccountMatch = fileInfo.match(customerNumAccountRegex);
const customerNumber = customerNumAccountMatch ? customerNumAccountMatch[1] : 'Customer Number Not Found';
const accountNumber = customerNumAccountMatch ? customerNumAccountMatch[2] : 'Account Number Not Found';

let billPeriod = 'Not Found';
const periodHeaderMatch = fileInfo.match(billPeriodRegex);
if (periodHeaderMatch) {
    const datesMatch = periodHeaderMatch[0].match(periodDatesRegex);
    if (datesMatch) {
        billPeriod = `${datesMatch[1]} to ${datesMatch[2]}`;
    }
}

const billNumberMatch = fileInfo.match(billNumberRegex);
const billNumber = billNumberMatch ? billNumberMatch[1] : 'Bill Number Not Found';

const billDateMatch = fileInfo.match(billDateRegex);
const billDate = billDateMatch ? billDateMatch[1] : 'Bill Date Not Found';

const totalNewChargesMatch = fileInfo.match(totalNewChargesRegex);
const totalNewCharges = totalNewChargesMatch ? totalNewChargesMatch[1] : 'Total New Charges Not Found';

console.log("Extracted Information:");
console.log(`Customer Number: ${customerNumber}`);
console.log(`Account Number: ${accountNumber}`);
console.log(`Bill Period: ${billPeriod}`);
console.log(`Bill Number: ${billNumber}`);
console.log(`Bill Date: ${billDate}`);
console.log(`Total New Charges: $${totalNewCharges}`);