import { getData } from './Activity'

export default class Trackpoint {
  constructor (trackpoint) {
    const {
      Time,
      AltitudeMeters,
      DistanceMeters,
      HeartRateBpm,
      Cadence,
      Extensions
    } = trackpoint
    this.time = getData(Time, 'time')
    this.distanceMeters = getData(DistanceMeters)
    this.altitude = getData(AltitudeMeters)
    this.heartrate = getData(HeartRateBpm && HeartRateBpm.Value ? HeartRateBpm.Value : null)
    this.cadence = getData(Cadence)
    this.watts = getData(Extensions['ns3:TPX']['ns3:Watts'])
    this.speed = getData(Extensions['ns3:TPX']['ns3:Speed'])
  }
}
