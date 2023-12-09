<template>
  <div class="max-w-sm rounded-md overflow-hidden shadow-2xl">
    <img :src="getIconUrl(weather.weather[0].icon)" alt="Weather Icon" class="w-full h-44 px-8 py-4" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ weather.name }}</div>
      <p class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {{ weather.weather[0].description }}
      </p>
      <p class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ weather.main.temp }}°C</p>
      <p class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {{ $t('messages.info1') }} {{ weather.main.humidity }}%
      </p>
      <p class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {{ $t('messages.info2') }} {{ weather.wind.speed }} m/s
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getIconUrl(iconCode) {
      return `/icons/${iconCode}.png`;
    },
  },
};
</script>
