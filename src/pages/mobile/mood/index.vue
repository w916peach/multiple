<template>
  <div class="mood">
    <div class="main" ref="main" @scroll="getSize">
      <router-view
        :moods="moods"
        :noMoreTip="noMoreTip"
        :pageChage="pageChange"
      />
    </div>
    <div class="bottom">
      <ul class="list">
        <li v-for="(tab, index) in tabs" :key="index">
          <i
            :class="`iconfont ${tab.icon}`"
            @click="$router.push(tab.path)"
          ></i>
          <div>{{ tab.title }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const tabs = [
  {
    title: "酱社区",
    icon: "icon-shouye_shouye-copy",
    path: "/mobile/mood/community/like",
  },
  {
    title: "酱话题",
    icon: "icon-huati1",
    path: "/mobile/mood/topic",
  },
  {
    title: "每日一酱",
    icon: "icon-faxian",
    path: "/mobile/mood/everyday",
  },
  {
    title: "酱消息",
    icon: "icon-xiaoxi1",
    path: "/mobile/mood/news",
  },
  {
    title: "我的酱",
    icon: "icon-wode",
    path: "/mobile/mood/my",
  },
];

// 防抖
function dounce(callback, queryMood) {
  // scroll事件触发时持续执行dounce函数返回的函数，该函数作为事件监听器
  return (ev) => {
    let timer = null; // 创建一个标记，用来存放定时器的返回值
    clearTimeout(timer);

    // 创建一个新的setTimeout, 保证0.5秒的时间隔内如果事件持续触发，就不会执行callback函数
    timer = setTimeout(callback, 500, { queryMood, ev });
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
    // 请求心情数据
    queryMood() {
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
        // 给每条心情数据添加comment属性，用来存评论数据
        this.moods = this.moods.map((item) => ({ ...item, comment: [] }));

        // 遍历每条心情数据，请求评论数据
        this.moods.forEach((item, index) => {
          this.queryComment(item.id, index);
        });

        flag = true;
      });
    },
    // 请求评论数据
    queryComment(id, index) {
      this.request({
        url: this.API.commentApi,
        params: { mood: id }, // 被评论的心情的id
      }).then((data) => {
        // 将评论数据嵌入到moods中,同时给comment数据中追加replyComment
        this.moods[index].comment = data.data.map((comment) => ({
          ...comment,
          replyComment: [],
        }));

        const { comment } = this.moods[index];
        // 遍历每条评论数据，请求回复评论的数据
        this.moods[index].comment.forEach((item, i) => {
          this.queryReplyComment(comment, item.id, i);
        });
      });
    },
    // 请求回复评论数据
    queryReplyComment(comment, id, i) {
      this.request({
        url: this.API.replyApi,
        params: { comment: id }, // 被回复的评论的id
      }).then((data) => {
        // 将回复评论数据嵌入到replyComment中
        comment[i].replyComment = data.data.map((item) => ({ ...item }));
      });
    },
    pageChange() {
      this.page = 1;
    },
  },
  mounted() {
    this.queryMood(); // 初始化加载页面时获取数据

    // 滚动条滚动时下拉加载的逻辑，但是queryMood方法不希望持续触发，使用防抖
    this.getSize = dounce(({ queryMood, ev }) => {
      const { scrollHeight } = ev.target.firstElementChild; // 页面的实际高度
      const { scrollTop } = ev.target; // 页面卷起的高度
      const clientHeight =
        document.documentElement.clientHeight -
        ((1.3 * document.documentElement.clientWidth) / 750) * 100; // 视口的高度

      if (scrollHeight - scrollTop - clientHeight <= 0 && flag) {
        if (page >= Math.ceil(this.total / pageSize)) {
          return;
        }
        page += 1;

        flag = false;
        queryMood();
      }
    }, this.queryMood);

    console.log(this.moods);
  },
};
</script>

<style scoped>
.mood {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(251, 249, 224);
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

.list i {
  font-size: 32px;
  color: rgb(255, 130, 0);
}
.list > li:nth-child(3) i {
  font-size: 50px;
}
</style>
