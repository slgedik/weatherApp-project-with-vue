<template>
  <div>
    <!-- Dil Desteği -->
    <div class="flex justify-end mb-4 btn-grp">
      <button @click="changeLanguage('tr')" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">TR</button>
      <button @click="changeLanguage('us')" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ml-2 rounded">EN</button>
    </div>
    <h1 class="items-center justify-center flex font-bold text-4xl mb-4 title">{{ $t('messages.titleText') }}</h1>

    <!-- Arama  -->
    <div class="flex items-center justify-center search">
      <label class="mr-2 font-semibold italic" for="city">{{ $t('messages.city') }}</label>
      <input v-model="city" type="text" id="city" class="border-2 mr-2 rounded-md h-[30px]" />

      <button
        @click="getWeather"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 h-[30px] rounded inline-flex items-center"
      >
        <img class="fill-current w-6 h-6 mr-2" :src="require('/public/icons/find-icon.png')" alt="Icon" />
        <span>{{ $t('messages.find') }}</span>
      </button>

      <button
        @click="resetWeather"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ml-4 h-[30px] rounded inline-flex items-center"
      >
        <img class="fill-current w-4 h-4 mr-2" :src="require('/public/icons/reset-icon.png')" alt="Icon" />
        <span>{{ $t('messages.reset') }}</span>
      </button>
    </div>

    <!-- Ankara - İstanbul Hava Durumu -->
    <div class="flex justify-evenly mt-12" v-show="showDefaultCards">
      <WeatherCard v-if="weatherAnkara" :weather="weatherAnkara" />
      <WeatherCard v-if="weatherIstanbul" :weather="weatherIstanbul" />
    </div>

    <!-- Arama Sonuçları -->
    <div v-if="searchResults" v-show="!showDefaultCards" class="flex items-center justify-center mt-12">
      <WeatherCard v-for="result in searchResults" :key="result.id" :weather="result" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import WeatherCard from '@/components/WeatherCard.vue';
export default {
  data() {
    return {
      city: '',
      apiKey: '78c3d2bdfd0ae572af43afe0619f3b2a', // OpenWeatherMap API key
      weatherAnkara: null,
      weatherIstanbul: null,
      searchResults: null,
      showDefaultCards: true,
      selectedLanguage: 'tr', // Varsayılan
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getAnkaraWeather() {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ankara&lang=${this.selectedLanguage}&appid=${this.apiKey}`;
      axios
        .get(apiUrl)
        .then((response) => {
          this.weatherAnkara = response.data;
        })
        .catch((error) => {
          console.error(`Ankara hava durumu alınamadı:`, error);
        });
    },
    getIstanbulWeather() {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Istanbul&lang=${this.selectedLanguage}&appid=${this.apiKey}`;
      axios
        .get(apiUrl)
        .then((response) => {
          this.weatherIstanbul = response.data;
        })
        .catch((error) => {
          console.error(`İstanbul hava durumu alınamadı:`, error);
        });
    },
    getWeather() {
      this.getAnkaraWeather();
      this.getIstanbulWeather();
      if (this.city) {
        this.searchWeather();
      }
    },
    searchWeather() {
      this.showDefaultCards = false;
      //Celsius=Kelvin−273.15
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=${this.selectedLanguage}&appid=${this.apiKey}`;
      axios
        .get(apiUrl)
        .then((response) => {
          this.searchResults = [response.data];
        })
        .catch((error) => {
          console.error('Hava durumu alınamadı:', error);
        });
    },
    resetWeather() {
      this.showDefaultCards = true;
      this.city = null;
    },

    changeLanguage(lang) {
      const { t } = this.$i18n;
      this.$i18n.locale = lang;
      this.getWeather();
      document.title = t('messages.titleText');
    },
  },
  components: {
    WeatherCard,
  },
};
</script>

<style>
@media (max-width: 768px) {
  .btn-grp {
    justify-content: center;
  }
  .title {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .search {
    flex-direction: column;
    row-gap: 10px;
  }
}
</style>
