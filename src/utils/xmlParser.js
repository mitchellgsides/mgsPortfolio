
import Activity from './Activity'
// import { testData } from './testData'

// export function XMLParser (file, handleXML) {
//   const reader = new FileReader()
//   const parser = new DOMParser()
//   let xmlDoc
//   reader.readAsText(file)

//   reader.onload = function () {
//     xmlDoc = parser.parseFromString(reader.result, 'text/xml')
//     console.log('xxx', reader.result)
//     const nodes = xmlDoc.getElementsByTagName('Activity')[0]
//     // console.log(nodes)
//     const track = Array.from(nodes.children).filter(i => i.nodeName === 'Lap')[0].children
//     const trackpoints = Array.from(track).filter(i => i.nodeName === 'Track')[0].children
//     const trackPointsObjects = Array.from(trackpoints).map(i => Object.assign({}, i.children))
//     const singlePoint = trackPointsObjects.map(i => {
//       return new Trackpoint(i)
//     })[0]
//     console.log(singlePoint)
//   }
// }

export function XMLToJsonParser (file, handleXML, setLoading) {
  const reader = new FileReader()
  const parser = new DOMParser()
  let xmlDoc
  setLoading(true)
  reader.readAsText(file)
  reader.onload = function () {
    xmlDoc = parser.parseFromString(reader.result, 'text/xml')
    const activity = new Activity(xmlToJson(xmlDoc).TrainingCenterDatabase.Activities.Activity)
    const powerCurve = activity.createPowerCurve(activity.fullTrack)
    // const powerCurveAtCadence = activity.getPowerOverDurationWithCadence(activity.fullTrack, 60, 60)
    // console.log('powerCurveAtCadence', powerCurveAtCadence)
    handleXML(powerCurve)
    setLoading(false)
  }
}

// Changes XML to JSON
// credit: David Walsh, https://davidwalsh.name/convert-xml-json

export function xmlToJson (xml) {
  let jsonObj = {}

  if (xml.nodeType === 1) { // element
    // do attributes
    if (xml.attributes.length > 0) {
      jsonObj['@attributes'] = {}
      for (let j = 0; j < xml.attributes.length; j++) {
        const attribute = xml.attributes.item(j)
        jsonObj['@attributes'][attribute.nodeName] = attribute.nodeValue
      }
    }
  } else if (xml.nodeType === 3) { // text
    jsonObj = xml.nodeValue
  }

  // do children
  if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      const item = xml.childNodes.item(i)
      const nodeName = item.nodeName
      if (typeof (jsonObj[nodeName]) === 'undefined') {
        jsonObj[nodeName] = xmlToJson(item)
      } else {
        if (typeof (jsonObj[nodeName].push) === 'undefined') {
          const old = jsonObj[nodeName]
          jsonObj[nodeName] = []
          jsonObj[nodeName].push(old)
        }
        jsonObj[nodeName].push(xmlToJson(item))
      }
    }
  }
  return jsonObj
};

/* Data Structure/Algorithm for Greatest Max of All Possible Ranges */
/* Data
  [{ time: 1, power: 100}, {time: 2, power: 112}, {time: 3, power: 0}, {time: 4, power: 140}, {time: 5, power: 300}, ...]

*/
// 1. Set max range and calculate max average as reference
// 2. Subtract one from range, check each side's values (aka shift the range, take the highest, set the new max range)
// 3. Repeat until max range = 0
