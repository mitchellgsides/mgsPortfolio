import React, { Component } from 'react'
import {
  CalculatorContainer,
  CalculatorPageContainer,
  CustomDistanceField,
  DistanceItem,
  DistanceSelectorList,
  DistanceInputContainer,
  DistanceWrapper,
  UnitSelectorList,
  StyledNumberInput,
  TimeBox,
  Label,
  UnitLabel, 
  SportTabContainer,
  SportCalculatorContainer,
  SportTab,
  SportTabTitle,
} from '../Styles'

import SwimCalculator from '../PaceCalculator/SwimCalculator'
import BikeCalculator from '../PaceCalculator/BikeCalculator'
import RunCalculator from '../PaceCalculator/RunCalculator'
import Transition from '../PaceCalculator/Transition'
import Description from '../Description'

export default class CalculatorPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      distanceOpen: false,
      units: 'Imperial',
      event: 'Full Distance',
      selectedSport: 'swim',
      swim: {
        distance: 4224,
        pace: 105,
        time: 4435
      },
      bike: {
        distance: 112,
        pace: 24.89,
        time: 16200
      },
      run: {
        distance: 26.2,
        pace: 480,
        time: 12600
      },
      customSwim: 0,
      customBike: 0,
      customRun: 0,
      t1Time: 240,
      t2Time: 200
    }
  }


  handlePaceChange = (sport, time, pace) => {
    this.setState({
      [sport]: {
        distance: parseFloat(this.state[sport].distance),
        time: sport === 'bike' ? parseInt(time) : parseInt(time),
        pace: sport === 'bike' ? parseFloat(pace).toFixed(2) : parseInt(pace)
      }
    })
  }

  handleTimeChange = (sport, time, pace) => {
    this.setState({
      [sport]: {
        distance: this.state[sport].distance,
        time: sport === 'bike' ? parseInt(time) : parseInt(time),
        pace: sport === 'bike' ? parseFloat(pace).toFixed(2) : parseInt(pace)
      }
    })
  }

  handleTransitionTime = (e, time) => {
    console.log(`T ${e.target.name}: ${time}`)
    this.setState({
      [e.target.name]: parseInt(time)
    })
  }

  renderTotalTime = () => {
    const { swim, bike, run, t1Time, t2Time } = this.state
    let totalSeconds = Number(swim.time) + Number(run.time) + Number(bike.time) + t1Time + t2Time
    console.log('swimTime', swim.time)
    console.log('bikeTime', Number(bike.time))
    console.log('runTime', run.time)
    console.log('totalSeconds', totalSeconds)

    const hours = Math.floor(totalSeconds / 3600) || 0
    totalSeconds %= 3600
    const minutes = Math.floor(totalSeconds / 60) || 0
    totalSeconds %= 60
    const seconds = totalSeconds || 0

    const formatTimeMinutes = String(minutes).padStart(2, '0')
    const formatTimeHours = String(hours).padStart(2, '0')
    const formatTimeSeconds = String(seconds).padStart(2, '0')
    const displayTime = `${formatTimeHours}:${formatTimeMinutes}:${formatTimeSeconds}`

    return (
      <TimeBox>
                Total Time: {displayTime}
      </TimeBox>
    )
  }

  handleEventSelect = (d, u) => {
    const { swim, bike, run, customSwim, customBike, customRun } = this.state
    const metric = u === 'Metric'
    const distanceConversions = {
      Olympic: {
        swim: metric ? 1500 : 1760,
        bike: metric ? 40 : 25,
        run: metric ? 10 : 6.2
      },
      'Half Distance': {
        swim: metric ? 1931 : 2112,
        bike: metric ? 90 : 56,
        run: metric ? 21.1 : 13.1
      },
      'Full Distance': {
        swim: metric ? 3800 : 4224,
        bike: metric ? 180 : 112,
        run: metric ? 42.2 : 26.2
      },
      Custom: {
        swim: customSwim,
        bike: customBike,
        run: customRun
      }
    }
    
    const swimPace = swim.pace
    const swimTime = swim.pace * (distanceConversions[d].swim / 100).toFixed(0)

    const bikePace = bike.pace
    const bikeTime = parseInt((1 / bike.pace * 3600) * distanceConversions[d].bike).toFixed(0)

    const runPace = run.pace
    const runTime = run.pace * distanceConversions[d].run

    this.setState({
      units: u,
      event: d,
      swim: {
        pace: swimPace,
        time: swimTime,
        distance: distanceConversions[d].swim
      },
      bike: {
        pace: bikePace,
        time: bikeTime,
        distance: distanceConversions[d].bike
      },
      run: {
        pace: runPace,
        time: runTime,
        distance: distanceConversions[d].run
      }
    })
  }

  
  render () {
    const description = 'This calculator allows you to input distance, pace, or time, and then see the resulting overall metrics of each leg of a triathlon. Start by selecting a distance and a goal pace for each sport to see what your overall time would be. Conversely, you can also enter times for each sport (plus transitions) to see the required paces.'
    const { units, event, selectedSport, swim, bike, run, customSwim, customBike, customRun, distanceOpen } = this.state
    const metric = this.state.units === 'Metric'
    return (
      <CalculatorPageContainer>
        <Description title='Triathlon Calculator' description={description} />
        <DistanceWrapper distanceOpen={distanceOpen}>
          <DistanceSelectorList>
            {['Custom', 'Olympic', 'Half Distance', 'Full Distance'].map((d, i) =>
              <DistanceItem
                selected={event === d}
                key={`distance-${i}-${d}`}
                onClick={() => this.handleEventSelect(d, units)}
              >
                {d}
              </DistanceItem>)}
          </DistanceSelectorList>
          <UnitSelectorList>
            {['Metric', 'Imperial'].map((u, i) => <DistanceItem name={u} selected={units === u} onClick={() => this.handleEventSelect(event, u)} key={`unit-${i}-${u}`}>{u}</DistanceItem>)}
          </UnitSelectorList>
          <DistanceInputContainer>
            {[
              { sport: 'customSwim', impUnits: 'yds', metUnits: 'm' },
              { sport: 'customBike', impUnits: 'mi', metUnits: 'km' },
              { sport: 'customRun', impUnits: 'mi', metUnits: 'km' }
              ].map((i, index) => (
                <CustomDistanceField
                    key={`custom-${i.sport}-thing`}
                >
                  <UnitLabel>{i.sport.split('custom')[1]}: </UnitLabel>
                  <StyledNumberInput
                    min={0.00}
                    max={60}
                    step='.01'
                    precision={4}
                    type='number'
                    name={i.sport}
                    value={event === 'Custom' ? this.state[i.sport] : i.sport.includes('Swim') ? this.state.swim.distance : i.sport.includes('Bike') ? this.state.bike.distance : this.state.run.distance}
                    onChange={(e) => this.setState({ [e.target.name]: Math.round(parseFloat(e.target.value)) })}
                  />
                  <Label>{this.state.units === 'Imperial' ? i.impUnits : i.metUnits}</Label>
                </CustomDistanceField>
            )
            )}
            </DistanceInputContainer>
            </DistanceWrapper>
            <div style={{ cursor: 'pointer', padding: '0.5rem', margin: '0.5rem' }} onClick={() => this.setState({ distanceOpen: !distanceOpen})}>{distanceOpen ? 'Close Change Distance' : 'Change Distance'}</div>
        <CalculatorContainer>
          <SportTabContainer>
                {['swim', 'T1', 'bike', 'T2', 'run'].map((i, index) => (
                  <SportTab
                    key={`${i}-${index}-select-tab`}
                    onClick={() => this.setState({ selectedSport: i })}
                  >
                    <SportTabTitle selected={selectedSport === i}>
                     {i[0].toUpperCase() + i.slice(1)}
                    </SportTabTitle>
                  </SportTab>)
                )}
            </SportTabContainer>
          <SportCalculatorContainer>
            { selectedSport === 'swim' 
              ? <SwimCalculator
                handleTimeChange={this.handleTimeChange}
                handlePaceChange={this.handlePaceChange}
                swimTime={swim.time}
                metric={metric}
                swimDistance={event === 'Custom' ? customSwim : swim.distance}
                swimPace={swim.pace}
              />
              : null }

            { selectedSport === 'T1' ? <Transition
            name='t1Time'
            label='Time'
            title='Transition 1'
            handleTime={this.handleTransitionTime}
            time={this.state.t1Time}
            /> : null }

            { selectedSport === 'bike' ? <BikeCalculator
              handleTimeChange={this.handleTimeChange}
              handlePaceChange={this.handlePaceChange}
              bikeTime={bike.time}
              metric={metric}
              bikeDistance={event === 'Custom' ? customBike : bike.distance}
              bikePace={bike.pace}
            /> : null }

            { selectedSport === 'T2' ? <Transition
            name='t2Time'
            label='Time'
            title='Transition 2'
            handleTime={this.handleTransitionTime}
            time={this.state.t2Time}
            /> : null }

            { selectedSport === 'run' 
            ? <RunCalculator
              handleTimeChange={this.handleTimeChange}
              handlePaceChange={this.handlePaceChange}
              runTime={run.time}
              metric={metric}
              runDistance={event === 'Custom' ? customRun : run.distance}
              runPace={run.pace}
            /> 
            : null }
            </SportCalculatorContainer>
           { this.renderTotalTime() }
          </CalculatorContainer>

      </CalculatorPageContainer>
    )
  }
}
