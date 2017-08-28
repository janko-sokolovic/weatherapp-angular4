import { Weather } from './weather';

export const WEATHER = {
    coord: {
        lon: 20.47,
        lat: 44.82
    },
    weather: [
        {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
        }
    ],
    base: 'stations',
    main: {
        temp: 30,
        pressure: 1015,
        humidity: 42,
        temp_min: 30,
        temp_max: 30
    },
    visibility: 10000,
    wind: {
        speed: 4.6,
        deg: 310
    },
    clouds: {
        all: 0
    },
    dt: 1503928800,
    sys: {
        type: 1,
        id: 5969,
        message: 0.0266,
        country: 'RS',
        sunrise: 1503892580,
        sunset: 1503940866
    },
    id: 791148,
    name: 'Dorćol (historical)',
    cod: 200
};
