import { ulid } from "ulid";

export function convertText2Objects(data) { return data.split("\n") }

export function processLineData(line) {
  const splitLine = getSplitLine(line)
  const objLine   = convertSplitLineToObject(splitLine)
  return objLine
}

const getSplitLine = (line) => { return line.split("  ")}

export const convertSplitLineToObject = (lineArray) => {

  const lineObject = {}
  
  const objArray = lineArray.map((line) => {
    const splitLine = getSplitLine(line)
    // console.log('splitLine', splitLine)
    return splitLine
  })

  const obj = objArray.map((lineArray) => {
    const someObject = {
      level: lineArray.length,
      value: lineArray[lineArray.length-1]
    }
    return someObject
  })

  // console.log('obj', obj)

  const levelMarker = 0

  const nestedObj = obj.reduce((total, individual) => {

    const children = []

    total = individual
    if (total.level < individual.level) {
      total.children.push(individual)
    }
    
    console.log('total', total)
    console.log('individual', individual)
    
  }, [])

  // console.log('lineObject', lineObject)
  // console.log('GRIBBIT', lineArray[lineArray.length-1])



  return obj
}
