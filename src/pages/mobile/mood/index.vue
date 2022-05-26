<template>
  <div class="mood">
    <div class="main">
      <router-view />
    </div>
    <div class="bottom">
      <ul>
        <!--  
        <li v-for="item in routes" :key="item.path">
          <img :src="item.img" alt="">
          <span>{{ item.title }}</span>
        </li>
        -->
        <li>
          <img src="../../../assets/images/@btmvav-1.png" alt="" @click="$router.push('/mobile/mood/community')">
          <span>酱社区</span>
        </li>
        <li>
          <img src="../../../assets/images/@btmvav-2.png" alt="" @click="$router.push('/mobile/mood/topic')">
          <span>酱话题</span>
        </li>
        <li>
          <img src="../../../assets/images/@btmvav-3.png" alt="" class="center"
            @click="$router.push('/mobile/mood/everyday')">
          <span>每日一酱</span>
        </li>
        <li>
          <img src="../../../assets/images/@btmvav-4.png" alt="" @click="$router.push('/mobile/mood/news')">
          <span>酱消息</span>
        </li>
        <li>
          <div>
            <img src="../../../assets/images/@btmvav-5.png" alt="" @click="$router.push('/mobile/mood/my')">
          </div>
          <span>我的酱</span>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import routes from "@/router/routes";
let imgs = [
  "../../../assets/images/@btmvav-1.png",
  "../../../assets/images/@btmvav-2.png",
  "../../../assets/images/@btmvav-3.png",
  "../../../assets/images/@btmvav-4.png",
  "../../../assets/images/@btmvav-5.png",
];

import { getLoginInfo, setLoginInfo } from "../../../utils/storage";
import List from "./list.vue";
export default {
  data() {
    return {
      routes: routes[7].children.slice(1),
      imgs
    };
  },
  mounted() {
    this.routes.forEach((item, key) => item.img = this.imgs[key]);
  }

};

</script>

<style scoped>
.mood {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
  color: rgb(162, 162, 162);
  font-size: 0.3rem;
}

.main {
  height: 92%;
}

.bottom {
  height: 8%;
}

.bottom>ul {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #fff;
  height: 100%
}

.bottom>ul>li {
  width: 20%;
  text-align: center;
  position: relative;
  height: 100%
    /* padding: 0.65rem 0rem 0.06rem 0rem; */
}

.bottom>ul>li span {
  font-size: 0.3rem;
  display: block;
  margin-top: 0.75rem;
}

.bottom>ul>li img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0.08rem;
}

.bottom>ul>li img.center {
  top: -0.25rem;
}
</style>
