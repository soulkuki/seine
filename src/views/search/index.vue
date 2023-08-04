<template>
  <div class="search-page-wrap">
    <PageTitle title="探索" desc="发现顶尖提示语应用及其创作者">
      <template #right>
        <el-input
          v-model="searchText"
          class="w-50 m-2"
          :placeholder="searchPlaceHolder"
          :prefix-icon="Search"
        />
      </template>
    </PageTitle>
  </div>
</template>


<script>
import { defineComponent, onMounted, reactive, toRefs, computed } from 'vue'
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
      page: 1,
      size: 9,
      total: 0,
      totalPage: 0,
      searchText: ''
    })
    const searchPlaceHolder = computed(() => `搜索 ${data.total} 提示语应用`)
    const methods = {
      
    }
    onMounted(() => {
    })

    return {
      searchPlaceHolder,
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