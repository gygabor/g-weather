export type CityType = {
  id: string
  name: string
  lat: number
  lon: number
}

type WeatherDescription = {
  description: string
  id: number
}

export type WeatherType = {
  current: {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    weather: WeatherDescription[]
  }
  timezone_offset: number
}
