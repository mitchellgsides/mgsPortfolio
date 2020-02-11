import React from 'react'
import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
// powerCurve.map((item, index) => Object.assign({}, { id: 'duration', color: 'blue', data: [{ x: item.duration, y: item.watts }] }))

export const NivoLine = (props) => (
    <ResponsiveLine
        data={props.data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        enableArea
        xScale={{ type: 'log', base: '10', min: 'auto', max: props.data[props.data.length - 1].x }}
        yScale={{ type: 'linear', base: '100', min: '0', max: 'auto', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        curve='monotoneX'
        axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 0,
        tickRotation: 0,
        legend: 'Duration (seconds)',
        legendOffset: 36,
        legendPosition: 'middle'
        }}
        axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Power (watts)',
        legendOffset: -50,
        legendPosition: 'middle'
        }}
        pointSize={10}
        pointBorderWidth={2}
        pointLabel='Power'
        pointLabelYOffset={-20}
        useMesh
        legends={[
        {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 10,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 10,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(200, 0, 0, .5)',
            effects: [
            {
                on: 'hover',
                style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
                }
            }
            ]
        }
        ]}
    />
)