import _ from 'lodash'
import Trackpoint from './Trackpoint'

export default class Activity {
  constructor (activity) {
    this.activity = activity
    this.name = activity.Creator.Name['#text']
    this.type = activity['@attributes'].Sport === 'Biking' ? 'Cycling' : activity['@attributes'].Sport
    this.laps = Array.isArray(activity.Lap) ? activity.Lap.map(lap => {
      const {
        TotalTimeSeconds,
        Calories,
        DistanceMeters,
        AverageHeartRateBpm,
        MaximumHeartRateBpm,
        Extensions,
        Cadence,
        Track
      } = lap
      return Object.assign({}, {
        time: getData(TotalTimeSeconds, 'string'),
        distanceMeters: getData(DistanceMeters),
        calories: getData(Calories),
        heartRateAverage: getData(AverageHeartRateBpm),
        heartRateMax: getData(MaximumHeartRateBpm),
        averageWatts: getData(Extensions['ns3:LX']['ns3:AvgWatts']),
        maxWatts: getData(Extensions['ns3:LX']['ns3:MaxWatts']),
        averageCadence: getData(Cadence),
        track: Track.Trackpoint.map(i => new Trackpoint(i))
      })
    }) : Object.assign({}, {
      time: getData(activity.Lap.TotalTimeSeconds, 'string'),
      distanceMeters: getData(activity.Lap.DistanceMeters),
      calories: getData(activity.Lap.Calories),
      heartRateAverage: getData(activity.Lap.AverageHeartRateBpm),
      heartRateMax: getData(activity.Lap.MaximumHeartRateBpm),
      averageWatts: getData(activity.Lap.Extensions['ns3:LX']['ns3:AvgWatts']),
      maxWatts: getData(activity.Lap.Extensions['ns3:LX']['ns3:MaxWatts']),
      averageCadence: getData(activity.Lap.Cadence),
      track: activity.Lap.Track.Trackpoint.map(i => new Trackpoint(i))
    })
    this.fullTrack = Array.isArray(activity.Lap)
      ? _.flatten(activity.Lap.map(lap => {
        const {
          Track
        } = lap
        return Object.assign({}, {
          track: Track.Trackpoint.map(i => new Trackpoint(i))
        })
      }).map(i => i.track))
      : Object.assign({}, {
        time: getData(activity.Lap.TotalTimeSeconds, 'string'),
        distanceMeters: getData(activity.Lap.DistanceMeters),
        calories: getData(activity.Lap.Calories),
        heartRateAverage: getData(activity.Lap.AverageHeartRateBpm),
        heartRateMax: getData(activity.Lap.MaximumHeartRateBpm),
        averageWatts: getData(activity.Lap.Extensions['ns3:LX']['ns3:AvgWatts']),
        maxWatts: getData(activity.Lap.Extensions['ns3:LX']['ns3:MaxWatts']),
        averageCadence: getData(activity.Lap.Cadence),
        track: activity.Lap.Track.Trackpoint.map(i => new Trackpoint(i))
      })
  }

  getAveragePower (lap) {
    const powArr = this.getPowerArray(lap)
    const avgPower = powArr.reduce((acc, curr) => {
      if (typeof curr === 'number') {
        return acc + curr
      } else return acc
    }) / powArr.length
    return Math.round(avgPower)
  }

  getAverageCadence (lap) {
    const cadenceArr = this.getCadenceArray(lap)
    const avgCadence = cadenceArr.reduce((acc, curr) => {
      if (typeof curr === 'number') {
        return acc + curr
      } else return acc
    }) / cadenceArr.length
    return Math.round(avgCadence)
  }

  createPowerCurve (lapToAnalyze) {
    const durations = [1, 2, 5, 10, 12, 20, 25, 30, 35, 60, 90, 120, 300, 360, 600, 720, 1200, 1800, 3600, 5400, 7200]
    let lap = lapToAnalyze
    if (lapToAnalyze.track) {
      lap = lapToAnalyze.track
    }
    const curve = durations.map(i => {
      if (i <= lap.length) {
        return Object.assign({}, {
          duration: i,
          power: Math.round(this.getAveragePowerOverDuration(lap, i))
        })
      } else return null
    })
    curve.push({ duration: lap.length, power: this.getAveragePower(lap) })
    return curve.filter(i => i != null)
  }

  getAveragePowerOverDuration (lap, duration) {
    const powArr = this.getPowerArray(lap)
    let currentMax = 0
    // maximum subarray problem
    // 1. get current_starting_index, current_ending_index, currentMax
    // 2. iterate through array, adding ending_index + 1, subtracting starting_index
    // 3. if newMax > oldMax, replace newMax
    for (let i = 0; i + duration < powArr.length; i++) {
      const tempMax = powArr.slice(i, i + duration).reduce((acc, curr) => acc + curr)
      if (tempMax > currentMax) {
        currentMax = tempMax
      }
    }
    return Math.round(currentMax / duration)
  }

  getPowerOverDurationWithCadence (lap, duration, cadence) {
    const arr = this.getCadenceAndPowerArr(lap).map(i => i)
    let currentMax = 0
    for (let i = 0; i + duration < arr.length; i++) {
      const tempMax = arr.map(i => i.power).slice(i, i + duration).reduce((acc, curr) => acc + curr)
      if (tempMax > currentMax && cadence >= arr.map(i => i.cadence).slice(i, i + duration).reduce((acc, curr) => acc + curr)) {
        currentMax = tempMax
      }
    }
  }

  getPowerCurve (lap) {
    let powArr
    if (lap.track) {
      powArr = lap.track.map(i => i.watts)
    } else {
      powArr = lap.track.map(i => i.watts)
    }
    let totalSum = 0
    const output = []
    for (let i = 0; i < powArr.length; i++) {
      if (powArr[i] > 0) {
        totalSum += powArr[i]
        const avg = totalSum / (i + 1)
        output.push(Math.round(avg))
      }
    }
    return output
  }

  getPowerArray (lap) {
    let powArr
    if (lap.track) {
      powArr = lap.track.map(i => i.watts)
    } else {
      powArr = lap.map(i => i.watts)
    }
    return powArr
  }

  getCadenceAndPowerArr (lap) {
    let cadenceArr
    if (lap.track) {
      cadenceArr = lap.track.map(i => Object.assign({}, { power: i.power, cadence: i.cadence }))
    } else {
      cadenceArr = lap.map(i => Object.assign({}, { power: i.power, cadence: i.cadence }))
    }
    return cadenceArr
  }
}

export function getData (objectKey, expectedType = 'number') {
  if (objectKey && objectKey['#text']) {
    if (expectedType === 'number') {
      return parseInt(objectKey['#text'])
    } else if (expectedType === 'float') {
      return parseFloat(objectKey['#text'])
    } else if (expectedType === 'time') {
      return new Date(objectKey['#text'])
    } else {
      return objectKey['#text']
    }
  } else {
    return undefined
  }
}
