<template>
	<div v-for="city in savedCities" :key="city.id">
		<CityCard :city="city" @click="goToCityView(city)" />
	</div>
	<p v-if="savedCities.length === 0">
		No locations added. To start tracking a location, search in the field above.
	</p>
</template>

<script setup>
import { useRouter } from 'vue-router';
import CityCard from '../components/CityCard.vue';
import { ref } from 'vue';
import axios from 'axios';

const savedCities = ref([]);

const getCities = async () => {
	if (localStorage.getItem('savedCities')) {
		savedCities.value = JSON.parse(localStorage.getItem('savedCities'));
	}

	const requests = [];
	savedCities.value.forEach((city) => {
		requests.push(
			axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${city.coords.lat}&lon=${city.coords.lng}&appid=3fc49d400971bd502b421b402188b4b9&units=metric`
			)
		);
	});

	const weatherData = await Promise.all(requests);

	//Flicker Delay
	await new Promise((res) => setTimeout(res, 500));

	weatherData.forEach((value, index) => {
		savedCities.value[index].weather = value.data;
	});
};
await getCities();
//On Click on Card Go to CityView to view This Card
const router = useRouter();
const goToCityView = (city) => {
	router.push({
		name: 'CityView',
		params: { state: city.state, city: city.city },
		query: { id: city.id, lat: city.coords.lat, lng: city.coords.lng },
	});
};
</script>
