const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');
const fs = require('fs');

// out ディレクトリが存在しない場合は作成する
const outDir = path.join(__dirname, 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

const csvWriter = createCsvWriter({
  path: path.join(outDir, 'sample.csv'),
  header: [
    {id: 'name', title: 'Name'},
    {id: 'age', title: 'Age'},
    {id: 'email', title: 'Email'}
  ]
});

const data = [
  {name: 'John Doe', age: 30, email: 'john.doe@example.com'},
  {name: 'Jane Smith', age: 25, email: 'jane.smith@example.com'},
  {name: 'Bob Johnson', age: 40, email: 'bob.johnson@example.com'}
];

csvWriter.writeRecords(data)
  .then(() => {
    console.log('CSV file successfully written!');
  })
  .catch((error) => {
    console.error('Error writing CSV file:', error);
  });
