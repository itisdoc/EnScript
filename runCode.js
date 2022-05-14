/*
EnScript is/was made by TriSn0w(gunner) in May of 2022. You are allowed to use this script for learning purposes, but don't advertise it as your own.

Thanks to the contributors for there help: @Aidan-The-Dev
*/
let newLines = []
    var args = process.argv[2] // gets file name from ClI command
if (!args.includes('.en')) throw new Error('you must provide a .en file') // if file name does not have a extension of ".en", throw a error
const lineByLine = require('n-readlines');
const liner = new lineByLine(args); // setup line reader
 
let line;
let lineNumber = 0;
 
while (line = liner.next()) { // while there is another line
  let lineString = line.toString('ascii') // make line buffer into ascii string
  if (lineString.includes('//') || lineString == "") { // if 
      // dont do nothing
  } else {
   if (!lineString.includes(';')) {
   if (!lineString.includes('{') || !lineString.includes('}')) {
     throw new SyntaxError('(line ' + (lineNumber + 3) + ') You need to add a ";" at the end of every line!\n\n' + lineString)
   } else {
     newLines.push(lineString)
   }
   } else {
     if (lineString.includes('import')) {
       newLines.push(`${lineString.replace('import ', 'require(\'').replace(';', '') + "');"}`)  
      } else if (lineString.includes('log ')) {
        newLines.push(`${lineString.replace('log ', 'console.log(').replace(';', '')}` + ');')
      } else if (lineString.includes('env(\'')) {
newLines.push(`${lineString.replace('env(\'', 'process.env.').replace("'", '').replace("'", '').replace("')", '').replace(')', '')}`)
     } else if (lineString.includes(';') && lineString.includes('`')) {
       newLines.push(lineString.replace(';', ''));
     }
    else {
      newLines.push(lineString)
      }
     lineNumber++;
   }
  }
  }

eval(newLines.join(" "))
