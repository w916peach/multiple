<template>
  <div class="community">
    <div class="title">
      <span
        @click="$router.push({ name: 'like' })"
        :class="$route.name === 'like' ? 'active' : ''"
        >喜欢</span
      >
      <span
        @click="$router.push({ name: 'friends' })"
        :class="$route.name === 'friends' ? 'active' : ''"
        >好友</span
      >
      <i class="iconfont search" @click="$router.push({ name: 'search' })"
        >&#xe638;</i
      >
    </div>
    <div class="content">
      <router-view :moods="moods" :noMoreTip="noMoreTip" />
    </div>
  </div>
</template>
>

<script>
export default {
  name: "mood-community",
  props: ["moods", "noMoreTip"],
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
.community {
  padding-top: 1rem;
}

.title {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 1rem;
  background-color: #fff;
  border-bottom: 2px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title > span {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 12px;
  color: #939393;
  margin: 0px 10px;
}
.title > span.active {
  color: #000;
  background-color: rgb(255, 130, 0);
  color: #fff;
}

.title > i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(255, 130, 0);
  font-weight: bold;
  font-size: 18px;
}
</style>
