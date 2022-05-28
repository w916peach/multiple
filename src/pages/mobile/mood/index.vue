<template>
  <div class="mood">
    <div class="main" ref="main" @scroll="getSize">
      <router-view :moods="moods" :noMoreTip="noMoreTip" />
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

// 防抖
function dounce(callback, getMoodsData) {
  // scroll事件触发时持续执行dounce函数返回的函数，该函数作为事件监听器
  return (ev) => {
    let timer = null; // 创建一个标记，用来存放定时器的返回值
    clearTimeout(timer);

    // 创建一个新的setTimeout, 保证0.5秒的时间隔内如果事件持续触发，就不会执行callback函数
    timer = setTimeout(callback, 500, { getMoodsData, ev });
  };
}

let flag = true;
let page = 1;
const pageSize = 3;

export default {
  name: "index-page",
  data() {
    return {
      tabs,
      moods: [],
      total: 0,
      noMoreTip: false,
    };
  },
  methods: {
    getSize: () => {},
    getMoodsData() {
      this.request({
        method: "POST",
        url: this.API.moodApi,
        params: {
          pageSize,
          pageIndex: page,
          content: "",
          type: "ALL",
          order: "Descend",
        },
      }).then((data) => {
        this.moods = this.moods.concat(data.data);
        this.total = data.total;

        if (this.total === this.moods.length) {
          this.noMoreTip = true;
        }
        flag = true;
      });
    },
  },
  mounted() {
    this.getMoodsData(); // 初始化加载页面时获取数据

    // 滚动条滚动时下拉加载的逻辑，但是getMoodsData方法不希望持续触发，使用防抖
    this.getSize = dounce(({ getMoodsData, ev }) => {
      const { scrollHeight } = ev.target.firstElementChild; // 页面的实际高度
      const { scrollTop } = ev.target; // 页面卷起的高度
      const clientHeight =
        document.documentElement.clientHeight -
        ((1.3 * document.documentElement.clientWidth) / 750) * 100; // 视口的高度

      if (scrollHeight - scrollTop - clientHeight <= 0 && flag) {
        page += 1;

        flag = false;
        getMoodsData();
      }
    }, this.getMoodsData);
  },
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
