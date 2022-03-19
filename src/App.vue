<template>
<v-app>

    <v-main>
      <v-container>
        <router-view/>
        </v-container>
    </v-main>
  <BottomBar/>
  </v-app>
</template>

<script>
import BottomBar from './components/shared/BottomBar.vue'

export default {
  name: 'App',
  components: {
    BottomBar
  }
};
</script>