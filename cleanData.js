import flatten from "flat"
import { DateTime } from "luxon" 

// function to clean up API data
const cleanData = (input) => {
  // flatten the structural hierarchy 
  // See also: https://www.npmjs.com/package/flat
 

  // flatten the hierarchy of the data 
  let data = flatten(input, { delimiter: '_' })  

  delete(data._id)
  delete(data.__v)
  
  
  
  return data
}

export {cleanData}