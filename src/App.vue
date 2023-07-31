<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent, onMounted } from 'vue'


export default defineComponent({
  setup() {
    onMounted(() => {
      console.error('@App onMounted !!')
    })
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
