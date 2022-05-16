import React from 'react'
import WeatherDetails from './WeatherDetails'
import {render} from '@testing-library/react'
test("Weather render", () => {
    const {findByText} = render (<WeatherDetails wind={10} humidity={80}></WeatherDetails>)
    const wind = await findByText(/10/)
    const humidity = await findByText(/80/)
    expect(wind).toHaveTextContent(" Viento : 10 km/h")
    expect(humidity).toHaveTextContent(" Humedad : 80%")

})