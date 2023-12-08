<template>
  <div class="h-screen flex items-center justify-center">
    <LoginComponent v-if="!isLoggedIn" @login-success="setLoggedIn" />
    <WeatherComponent v-if="isLoggedIn" />
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';
import WeatherComponent from '@/components/WeatherComponent.vue';
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    setLoggedIn() {
      this.isLoggedIn = true;
    },
  },
  components: {
    LoginComponent,
    WeatherComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-image: url('@/assets/weather-bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>
