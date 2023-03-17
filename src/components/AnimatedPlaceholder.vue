<template>
	<div
		class="animate-pulse"
		:class="
			isCityCard
				? ['bg-gradient-to-r from-city-card-skeleton-color']
				: ['bg-gradient-to-r from-city-view-skeleton-color']
		"
	>
		&nbsp;
	</div>
</template>

<script setup>
defineProps({
	isCityCard: { type: Boolean, default: false },
});
</script>
