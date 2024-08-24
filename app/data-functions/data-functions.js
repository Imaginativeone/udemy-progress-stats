import { ulid } from "ulid";

export function convertText2Objects(data) {
  // console.log("data", data);
  const dataArray = data.split("\n");
  // console.log("dataArray", dataArray);
  return dataArray
}

export function processLineData(line) {
  const splitLine = getSplitLine(line)
  const objLine   = convertSplitLineToObject(splitLine)
  return splitLine
}

const getSplitLine = (line) => {
  return line.split("  ")
}

const convertSplitLineToObject = (lineArray) => {
  lineArray.map((line) => {
    console.log('line', line, lineArray.length)
  })

  console.log('GRIBBIT', lineArray[lineArray.length-1]);
}
