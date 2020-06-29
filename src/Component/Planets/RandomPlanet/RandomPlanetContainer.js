import React, { memo, useState, useEffect } from 'react';
import RandomPlanet from './RandomPlanet';

const RandomPlanetContainer = props => {
	const min = 1;
	const max = 9;
	const intervalTime = 3500;
	const [random, setRandom] = useState(1);
	const [planet, setPlanet] = useState();
	const createRandomNum = () => {
		setRandom(Math.floor(Math.random() * (max - min + 1)) + min)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			createRandomNum()
			fetch(`https://swapi.dev/api/planets/${random}/`)
				.then(res => res.json())
				.then(response => {
					setPlanet(response)
				})
		}, intervalTime)
		return () => { clearInterval(interval) }
	}, [random])

	return (
		<RandomPlanet planet={planet} />
	);
};


export default memo(RandomPlanetContainer);