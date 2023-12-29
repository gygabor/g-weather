# g weather

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have OpenWeather account and API Key: [Link](https://openweathermap.org/api)

## Installing

To install g weather, follow these steps:

```bash
git clone https://github.com/gygabor/g-weather.git
cd g-weather
```

or unzip the packed files.

#### Istall dependencies

```bash
npm install
```

#### update `.env`

```
OPEN_WEATHER_API_KEY=<YOUR_OPEN_WEATHER_API_KEY>
```

## Start the app

```bash
npm run start
```

It starts the server running on the port 8080: `http://localhost:8080/`.

Run tests:

```bash
npm run test
```

## Todos

- I wrote tests for only the `Home` component. I want to test the other components and utils.
