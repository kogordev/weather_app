<template>
	<div class="flex py-8 px-3 bg-weather-secondary rounded-md shadow-md">
		<div class="flex flex-col flex-1 gap-2">
			<AnimatedPlaceholder :isCityCard="true" class="max-w-[50%]" />
			<AnimatedPlaceholder :isCityCard="true" class="max-w-[40%]" />
		</div>

		<div class="flex flex-col items-end flex-1 gap-2">
			<AnimatedPlaceholder :isCityCard="true" class="max-w-[50px] w-full" />
			<AnimatedPlaceholder :isCityCard="true" class="max-w-[75px] w-full" />
		</div>
	</div>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue';
</script>
