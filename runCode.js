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
     throw new Error('(line ' + (lineNumber + 1) + ') You need to add a ";" at the end of every line!\n\n' + lineString)
   } 
   } else {
     if (lineString.includes('import')) {
       newLines.push(`${lineString.replace('import ', 'require(\'').replace(';', '') + "');"}`)  
      } else if (lineString.includes('log ')) {
        newLines.push(`${lineString.replace('log ', 'console.log(').replace(';', '')}` + ');')
      } else {
      newLines.push(lineString)
      }
     lineNumber++;
   }
  }
  }

eval(newLines.join(" "))
