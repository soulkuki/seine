<template>
  <div class="page-title-wrap">
    <div class="left-area">
      <slot name="left">
        <div class="title" v-if="title">{{title}}</div>
        <div class="desc" v-if="desc">{{desc}}</div>
      </slot> 
    </div>
    <div class="right-area">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  props: {
    title: { // 标题
      type: String,
      default: ''
    },
    desc: { // 描述
      type: String,
      default: ''
    }
  },
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data)
    }
  },
})
</script>

<style lang="scss" scoped>
.page-title-wrap {
  border-bottom: 1px solid #f4f4f5;
  padding: 20px;
  @include flexBetween();
  .left-area {
    @include flexCenter();
    .title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .desc {
      font-size: 14px;
      color: #8b8c8e;
      margin-left: 10px;
    }
  }
  
}
</style>