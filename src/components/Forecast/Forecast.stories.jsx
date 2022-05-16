import React from 'react'
import Forecast from './Forecast'

export default {
    title:"Forecast",
    component:Forecast
}
const forecastItemList = [
    {hour:18, state:"sunny",temperature:17,weekDay:"Lunes"},
    {hour:16, state:"fog",temperature:15,weekDay:"Miercoles"},
    {hour:5, state:"cloud",temperature:13,weekDay:"Sabado"},
    {hour:3, state:"cloudy",temperature:2,weekDay:"Domingo"},
    {hour:19, state:"sunny",temperature:16,weekDay:"Martes"},
    {hour:21, state:"rain",temperature:24,weekDay:"Lunes"},

]
export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList}></Forecast>)