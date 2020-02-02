
export default function XMLParser (file, handleXML) {
  const reader = new FileReader()
  const parser = new DOMParser()
  let xmlDoc
  reader.readAsText(file)

  reader.onload = function () {
    xmlDoc = parser.parseFromString(reader.result, 'text/xml')
    console.log(xmlDoc.getElementsByTagName('Trackpoint'))
    handleXML(xmlDoc.getElementsByTagName('Trackpoint'))
  }
}

export class Trackpoint {

}

/* design the structure! */
/* I need to get each trackpoint, and make THAT the array. Then, can grab every data point I want based on the index */
