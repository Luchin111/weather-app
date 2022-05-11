import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo' //SUBT: subject under testing (objeto del testeo)

test("CityInfo render", async () => {
    //AAA
    //ARRANGE
    //ACT
    const city = "La Paz"
    const country = "Bolivia"
    const {findAllByRole} = render(<CityInfo city={city} country={country}/>)
    //ASSERT
    // heading H1,h2...etc
    const cityAndCountryComponents = await findAllByRole("heading")

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})