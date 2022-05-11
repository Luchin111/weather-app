import React from 'react'

import {render} from '@testing-library/react'

import CityList from './CityList' //SUT

const cities = [
    { city: "Buenos Aires", country:"Argentina"},
    { city: "La Paz", country:"Bolivia"},
    { city: "Bogotá", country:"Colombia"},
    { city: "Madrid", country:"España"},
    { city: "Puerto Vallarta", country:"Mexico"},
    { city: "Lima", country:"Peru"},
]
test("CityList render", async ()=> {
    const {findAllByRole} = render (<CityList cities={cities}></CityList>)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(6)
})