import * as axios from 'axios'


export const PeopleAPI = axios.get('https://swapi.dev/api/people/')

export const Human = (url) => {
	return axios.get(url)
}

export const HomeWorld = (url) => {
	return axios.get(`${url}`)
}

export const getPlanets = () => {
	return axios.get('https://swapi.dev/api/planets/')
}

export const getPlanetById = (url) => {
	return axios.get(url)
}

export const getShips = () => {
	return axios.get('https://swapi.dev/api/starships/')
}

export const getShipById = (url) => {
	return axios.get(url)
} 