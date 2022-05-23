<template>
  <div class="pages">
    <span
      class="prev"
      @click="prevClick()"
    >上一页</span>
      <span
        v-for="(item, key) in pages"
        :key="key"
        :class="pageIndex === key + 1 ? 'active' : ''"
        @click="pageChangeClick(key)"
      >{{ key + 1 }}
        </span>
        <span
          class="next"
          @click="nextClick()"
        >下一页</span>
  </div>
</template>
<script>
export default {
  props: ["pages"],
  data() {
    return {
      pageIndex: 1
    };
  },
  methods: {
    // 点击页码
    pageChangeClick(key) {
      this.pageIndex = key + 1;
      this.$parent.queryMood(this.pageIndex);
    },
    // 点击上一页
    prevClick() {
      this.pageIndex--;
      if (this.pageIndex <= 0) {
        this.pageIndex = 1;
      }
      this.$parent.queryMood(this.pageIndex);
    },
    // 点击下一页
    nextClick() {
      this.pageIndex++;
      if (this.pageIndex > this.pages.length) {
        this.pageIndex = this.pages.length;
      }
      this.$parent.queryMood(this.pageIndex);
    }
  }
};
</script>
<style scoped>
.pages {
  text-align: center;
  background-color: #fff;
  margin: 0 20px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.pages > span {
  display: inline-block;
  margin: 10px 5px;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}
.pages > .prev,
.pages > .next {
  background-color: rgba(255, 165, 0, 0.75);
  color: #fff;
  padding: 10px 20px;
  font-weight: bold;
}
.pages > span.active {
  background-color: rgb(255, 0, 0, 0.6);
  color: #fff;
  font-weight: bold;
}
</style>