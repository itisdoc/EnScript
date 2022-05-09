let newLines = []
    var args = process.argv[2]
const lineByLine = require('n-readlines');
const liner = new lineByLine(args);
 
let line;
let lineNumber = 0;
 
while (line = liner.next()) {
  let lineString = line.toString('ascii')
  if (lineString.includes('//') || lineString == "") return
   if (!lineString.includes(';')) {
   if (!lineString.includes('{') || !lineString.includes('}')) {
     throw new Error('(line ' + (lineNumber + 1) + ') You need to add a ";" at the end of every line (except for ifs, fors, functions, etc)')
   } 
   } else {
     if (lineString.includes('import')) {
       newLines.push(`require(${lineString.replace('import ', '').replace('\'', '').replace('\'', '')})`)  
      } else if (lineString.includes('log ')) {
        newLines.push(`console.log(${lineString.replace('log ', '').replace('log ', '').replace(';', '')})` + ';')
      } else {
      newLines.push(lineString)
      }
     lineNumber++;
   }
  }

eval(newLines.join(" "))