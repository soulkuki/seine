<template>
  <div class="order-page-wrap">已购</div>
</template>


<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
// import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'OrderPage',
  setup() {
    // const route = useRoute()
    // const router = useRouter()
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
.order-page-wrap {
  flex: 1;
  background: red;
}
</style>