<template>
  <div>
    <div class="flex justify-end mb-4">
      <button @click="changeLanguage('tr')" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">TR</button>
      <button @click="changeLanguage('us')" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ml-2 rounded">EN</button>
    </div>

    <div class="flex items-center overflow-hidden shadow-2xl w-98">
      <div class="px-8 py-16 flex-col h-64 border-4 rounded-md">
        <div class="mb-4 inline-block">
          <label class="font-bold text-lg mb-2" for="username">{{ $t('messages.username') }}</label>
          <input v-model="username" type="text" id="username" />
        </div>

        <div>
          <label class="font-bold text-lg mb-2" for="password">{{ $t('messages.password') }}</label>
          <input v-model="password" type="password" id="password" />
        </div>

        <button class="bg-green-700 hover:bg-green-900 mt-4 text-white font-bold py-2 px-4 rounded-full mt-[24px]" @click="login">
          {{ $t('messages.loginText') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      //kullanıcı adı ve şifre kontrolü
      if (this.username === 'user' && this.password === 'password') {
        this.$emit('login-success');
      } else {
        alert('Geçersiz kullanıcı adı veya şifre!');
      }
    },
    changeLanguage(lang) {
      const { t } = this.$i18n;
      this.$i18n.locale = lang;
      document.title = t('messages.titleText');
    },
  },
};
</script>
