/* eslint-disable no-console */
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err) {
  if(err){
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("mock data generated"));
  }
});

//import faker from "faker"

/* jsf.extend("faker", function() {
return faker
}) */

//var outputFile = './src/api/db.json';

//const json = JSON.stringify(jsf(schema));

/* jsf.resolve(schema).then(function(result) {
fs.writeFile(outputFile, JSON.stringify(result, null, 2), function(err){
if (err) {
return (console.log(r(err)));
} else {
console.log(Mock Data Generated Here: ${outputFile});
}
});
}); */
