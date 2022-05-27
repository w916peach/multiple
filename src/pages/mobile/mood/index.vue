<template>
  <div class="mood">
    <div class="main">
      <router-view />
    </div>
    <div class="bottom">
      <ul class="list">
        <li v-for="(tab, index) in tabs" :key="index">
          <img :src="tab.icon" alt="" @click="$router.push(tab.path)" />
          <span>{{ tab.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import png1 from "../../../assets/images/@btmvav-1.png";
import png2 from "../../../assets/images/@btmvav-2.png";
import png3 from "../../../assets/images/@btmvav-3.png";
import png4 from "../../../assets/images/@btmvav-4.png";
import png5 from "../../../assets/images/@btmvav-5.png";

const tabs = [
  {
    title: "酱社区",
    icon: png1,
    path: "/mobile/mood/community",
  },
  {
    title: "酱话题",
    icon: png2,
    path: "/mobile/mood/topic",
  },
  {
    title: "每日一酱",
    icon: png3,
    path: "/mobile/mood/everyday",
  },
  {
    title: "酱消息",
    icon: png4,
    path: "/mobile/mood/news",
  },
  {
    title: "我的酱",
    icon: png5,
    path: "/mobile/mood/my",
  },
];

export default {
  data() {
    return {
      tabs,
    };
  },
  name: "index-page",
  mounted() {},
};
</script>

<style scoped>
.mood {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  color: rgb(162, 162, 162);
}

.main {
  flex: 1;
  overflow-y: auto;
}

.bottom {
  height: 1.3rem;
}

ul.list {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  background-color: #fff;
  height: 100%;
  padding-bottom: 10px;
}

.list li {
  text-align: center;
  position: relative;
}

.list img {
  display: block;
  margin: 0 auto;
}
</style>
