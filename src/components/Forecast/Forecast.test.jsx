import React from 'react'
import Forecast from './Forecast'
import {render} from '@testing-library/react'
const forecastItemList = [
    {hour:18, state:"sunny",temperature:17,weekDay:"Lunes"},
    {hour:16, state:"fog",temperature:15,weekDay:"Miercoles"},
    {hour:5, state:"cloud",temperature:13,weekDay:"Sabado"},
    {hour:3, state:"cloudy",temperature:2,weekDay:"Domingo"},
    {hour:19, state:"sunny",temperature:16,weekDay:"Martes"},
    {hour:21, state:"rain",temperature:24,weekDay:"Lunes"},

]
test('Forecast render', async () => {
    const { findAllByTestId } = render (<Forecast forecastItemList={forecastItemList}></Forecast>)
    const forecastItems = findAllByTestId("forecast-item-container")
    expect(forecastItems).toHaveLength(6)
})