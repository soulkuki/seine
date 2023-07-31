<template>
  <div class="search-page-wrap">
    <PageTitle title="探索" desc="发现顶尖提示语应用及其创作者" />
  </div>
</template>


<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import PageTitle from "@components/page/title.vue"
// import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'SearchPage',
  components: {
    PageTitle
  },
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
.search-page-wrap {
  flex: 1;
}
</style>