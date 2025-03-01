<template>
  <div class="page-main-wrap">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'HeaderLayout',
  setup() {
    const data = reactive({
      
    })
    const methods = {
      
    }
    onMounted(() => {
    })

    return {
      ...toRefs(data),
      ...methods,
    }
  }
})
</script>

<style lang="scss" scoped>
.page-main-wrap {
  width: 100%;
}
</style>