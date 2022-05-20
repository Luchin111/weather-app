import React from 'react'

import {render, fireEvent} from '@testing-library/react'

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
test("CityList Click on item", async ()=> {
    const fnClickOnItem = jest.fn()
    const {findAllByRole} = render (<CityList cities ={cities} onClickCity={fnClickOnItem}></CityList>)
    const items = await findAllByRole("listitem")

    fireEvent.click(items[0])

    //expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})