<template>
  <div class="page-sidebar-wrap">
    <div :class="['menu-item', curIndex === i ? 'active' : '']" v-for="(m, i) in menuList" :key="i" @click="toClickMenu(m)">
      <img class="menu-logo" v-if="m.logo" :src="m.logo" alt="">
      <div class="menu-text">{{m.name}}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'HeaderLayout',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const data = reactive({
      menuList: [
        { name: '搜素', logo: '', path: '/search' },
        { name: '订单', logo: '', path: '/order' },
      ],
      logo: 'https://qa-img4.pcauto.com.cn/pcauto/images/autopocket/20230727/12745313.jpeg',
    })
    const curIndex = computed(() => {
      const index = data.menuList.findIndex(m => m.path === route.path)
      return index > -1 ? index : 0
    })
    const methods = {
      // 点击menu
      toClickMenu(menu) {
        router.push(menu.path)
      },
    }
    onMounted(() => {
    })

    return {
      curIndex,
      ...toRefs(data),
      ...methods,
    }
  }
})
</script>

<style lang="scss" scoped>
.page-sidebar-wrap {
  width: 20%;
  height: calc(100vh - 80px);
  background: #edeff8;
  border-right: 1px solid #f4f4f5;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px 10px;
  @include hiddenScrollBar();
  .menu-item {
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    @include flexCenter();
    &:hover {
      background: #e1e5ee;
      .menu-text {
        color: #080387;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    .menu-logo {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      border-radius: 50%;
      margin-right: 5px;
    }
    .menu-text {
      font-size: 14px;
      color: #000002;
    }
  }
  .active {
    background: #e1e5ee;
    .menu-text {
      color: #080387;
    }
  }
}
</style>