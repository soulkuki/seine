<!--
 * @Description: 
 * @version: 
 * @Author: sueRim
 * @Date: 2025-02-28 15:54:28
 * @LastEditors: sueRim
 * @LastEditTime: 2025-02-28 21:12:35
-->
<template>
  <div class="layout-wrap">
    <Header />
    <div class="page-footer-wrap">
      <SideBar />
      <Main />
    </div>
  </div>
</template>

<script>
import Header from "./header.vue"
import SideBar from "./sideBar.vue"
import Main from "./main.vue"
export default {
  name: 'MainLayout',
  components: {
    Header,
    SideBar,
    Main
  }
}
</script>

<style lang="scss">
.layout-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  // overflow: hidden;
  .page-footer-wrap {
    display: flex;
  }
}
@media screen {
  
}
@media screen and (max-width: 1260px) {
  .layout-wrap {
    width: 1260px !important;
  }
}
</style>