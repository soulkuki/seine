<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'HeaderLayout',
  setup() {
    const data = reactive({
      centerModule: [ // 中间模块
        { name: '聊聊画画', logo: '' },
        { name: '应用商店', logo: '' },
        { name: '提示语学院', logo: '' }
      ],
      rightModule: [ // 中间模块
        { name: '应用管理', path: '', logo: '' },
        { name: '订阅', path: '', logo: '' },
        { name: '', path: '', logo: 'https://qa-img4.pcauto.com.cn/pcauto/images/autopocket/20230727/12745313.jpeg' }
      ], 
      logo: 'https://qa-img4.pcauto.com.cn/pcauto/images/autopocket/20230727/12745313.jpeg',
      curIndex: 0
    })
    const methods = {
      // 点击中间菜单menu
      toClickCenterMenu(index) {
        if (index === data.curIndex) return
        data.curIndex = index
      },
      // 点击右侧菜单menu
      toClickRightMenu() {
        
      }
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
</style>