<template>
  <div class="menu-header-wrap">
    <!-- 左侧 -->
    <div class="left-area">
      <img class="page-logo" :src="logo" alt="">
      <div class="page-text">logo</div>
    </div>
    <!-- 中间 -->
    <div class="center-area">
      <div :class="['menu-item', curIndex === i ? 'active' : '']" v-for="(c, i) in centerMenuList" :key="i" @click="toClickCenterMenu(i)">
        <img class="menu-logo" v-if="c.logo" :src="c.logo" alt="">
        <div class="menu-line" v-if="c.logo && c.name"></div>
        <div class="menu-text" v-if="c.name">{{c.name}}</div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="right-area">
      <div class="menu-item" v-for="(r, i) in rightMenuList" :key="i" @click="toClickRightMenu(r.path)">
        <img class="menu-logo" v-if="r.logo" :src="r.logo" alt="">
        <div class="menu-line" v-if="r.logo && r.name"></div>
        <div class="menu-text" v-if="r.name">{{r.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'HeaderLayout',
  setup() {
    const data = reactive({
      centerMenuList: [
        { name: '聊聊画画', logo: '' },
        { name: '应用商店', logo: '' },
        { name: '提示语学院', logo: '' }
      ],
      rightMenuList: [
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
        
      },
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
.menu-header-wrap {
  height: 80px;
  justify-content: space-between;
  border-bottom: 1px solid #f4f4f5;
  box-sizing: border-box;
  padding: 0 20px;
  @include flexBetween();
  .left-area {
    @include flexCenter();
    .page-logo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-right: 10px;
      @include activeOpacity();
    }
    .page-text {
      font-size: 14px;
      color: #767a7b;
      @include activeOpacity();
    }
  }
  .center-area {
    @include flexCenter();
    .menu-item {
      width: 100px;
      box-sizing: border-box;
      border-radius: 20px;
      padding: 6px 4px;
      margin-right: 10px;
      cursor: pointer;
      @include flexAllCenter();
      &:hover {
        border: 1px solid #f5f5f5;
        box-shadow: 1px 1px 5px #eeeeed;
        .menu-text {
          font-size: 15px;
          color: #070585;
        }
      }
      &:last-child {
        margin-right: 0;
      }
      .menu-logo {
        width: 30px;
        height: 30px;
        flex-shrink: 0;
        border-radius: 50%;
      }
      .menu-line {
        width: 10px;
        height: 100%;
      }
      .menu-text {
        font-size: 14px;
        color: #767a7b;
      }
    }
    .active {
      background: #f7f8fa;
      border: 1px solid #f5f5f5;
      box-shadow: 1px 1px 5px #eeeeed;
      .menu-text {
        font-size: 15px;
        color: #070585;
      }
    }
  }
  .right-area {
    @include flexCenter();
    .menu-item {
      box-sizing: border-box;
      border-radius: 20px;
      padding: 6px 4px;
      margin-right: 10px;
      @include flexCenter();
      @include activeOpacity();
      &:last-child {
        margin-right: 0;
      }
      .menu-logo {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 50%;
      }
      .menu-line {
        width: 10px;
        height: 100%;
      }
      .menu-text {
        font-size: 14px;
        color: #767a7b;
      }
    }
  }
}
</style>