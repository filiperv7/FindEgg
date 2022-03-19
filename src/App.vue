<template>
  <v-app>
    <menu-all></menu-all>
    <main>
      <router-view/>
    </main>
      <bottom-bar></bottom-bar>
  </v-app>
</template>

<script>
import MenuAll from '@/components/shared/MenuAll.vue'
import BottomBar from '@/components/shared/BottomBar.vue'

export default {
  components: {
    MenuAll,
    BottomBar
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
