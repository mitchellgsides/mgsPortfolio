
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
