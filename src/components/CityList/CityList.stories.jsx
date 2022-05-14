import React from 'react'
import CityList from './CityList'
import {action} from '@storybook/addon-actions'
export default {
    title:"CityList",
    component: CityList
}

const cities = [
    { city: "Buenos Aires", country:"Argentina"},
    { city: "La Paz", country:"Bolivia"},
    { city: "Bogotá", country:"Colombia"},
    { city: "Madrid", country:"España"},
    { city: "Puerto Vallarta", country:"Mexico"},
    { city: "Lima", country:"Peru"},
]
export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click in City")}/>