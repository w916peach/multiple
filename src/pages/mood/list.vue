<template>
  <div class="list-box" @click="operateId = -1">
    <ul class="list">
      <li v-for="(item, key) in moodData.data" :key="key">
        <div class="user">
          <span>用户:</span>
          {{ item.user.username }}
        </div>
        <div class="content">
          {{ item.content }}
        </div>
        <div class="communication">
          <div class="time">
            {{ formatDate(item.datetime) }}
          </div>
          <div class="likecomment">
            <div class="operation" v-show="operateId === item.id"
            >
              <span class="like">
                <i class="iconfont">&#xe651;</i>
                <span
                  @click="
                    () => {
                      likeClick(item.id);
                    }
                  "
                >
                  {{ !item.hadGivenFabulous ? "点赞" : "取消" }}
                </span>
              </span>
              <span class="comment">
                <i class="iconfont">&#xe601;</i>
                <span>评论</span>
              </span>
            </div>
            <div class="moreoperation" @click.stop="operateId = item.id">
              <i class="iconfont">&#xe69b;</i>
            </div>
          </div>
        </div>
        <div class="likelist">
          <ul class="clearfix">
            <li
              v-if="
                moodData.data.find((Item) => {
                  return Item.id === item.id;
                }).like.length > 0
              "
              class="icon"
            >
              <i class="iconfont">&#xe651;</i>
            </li>
            <li
              v-for="(like, key) in moodData.data.find((Item) => {
                return Item.id === item.id;
              }).like"
              :key="key"
            >
              {{ like.username }}
            </li>
          </ul>
        </div>
        <div class="type">
          <span>#{{ item.type }}</span>
        </div>
      </li>
    </ul>
		<Pagination :pages="pages" />
  </div>
</template>
<script>
import { getLoginInfo } from "@/utils/storage";
import Pagination from './pagination';
import { formatDate } from "@/utils";
export default {
  props: ["type", "searchValue", "order", "pageSize"],
  components: {
    Pagination
  },
  data() {
    return {
      moodData: [],
      operateId: -1,
      pages: 0
    };
  },
  mounted() {
    this.queryMood();
  },
  methods: {
    formatDate,
    queryMood(pageIndex = 1){
      const type = getLoginInfo().token ? "POST" : "GET"; //根据登录情况判断请求方式
      this.request({
        url: this.API.moodApi,
        method: type,
        params: {
          content: this.searchValue,
          type: this.type,
          pageSize: this.pageSize,
          pageIndex,
          order: this.order,
        },
      }).then((data) => {
        this.moodData = data;
        this.pages = new Array(Math.ceil(data.total / this.pageSize));
      });
    },
    likeClick(id) {
      this.request({
        url: this.API.moodGiveFabulous,
        method: "POST",
        data: {
          uid: getLoginInfo().uid, //当前登录的用户-也可以理解为执行点赞和取消点赞的用户
          id, //点赞和取消点赞的心情的id
        },
      }).then(() => {
        location.reload(); //刷新页面，重新获取到
      });
    }
  },
  watch: {
    type(){
      this.queryMood();
    },
    searchValue(){
      this.queryMood();
    },
    order(){
      this.queryMood();
    },
    pageSize(){
      this.queryMood();
    }
  }
};
</script>
<style scoped>
.list-box {
  padding-top: 70px;
	padding-bottom: 20px;
}
.list > li {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 20px;
	background-color: #fff;
	margin: 20px 20px 0px;
}
.list > li > div {
  margin-top: 10px;
}
.communication {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.likecomment {
  display: flex;
  justify-content: space-between;
  align-items: center;
	cursor: pointer;
}
.operation {
  width: 160px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin-right: 20px;
  border-radius: 6px;
  background-color: rgba(255, 165, 0, 0.75);
  transition: 2s all;
}

.operation > span {
  height: 30px;
  margin: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.operation > span > i {
  font-size: 20px;
  color: #fff;
}
.operation > span > span {
  color: #fff;
  cursor: pointer;
}
.moreoperation {
  padding: 2px 10px;
  background-color: #eee;
  border-radius: 6px;
  cursor: pointer;
}
.time {
  font-size: 14px;
  font-style: italic;
  color: grey;
}
.likelist > ul > li {
  cursor: pointer;
  float: left;
  color: rgba(255, 165, 0, 0.75);
  margin-right: 10px;
}
.likelist > ul > li.icon > i {
  font-weight: 18px;
  color: rgba(255, 165, 0, 0.75);
  font-weight: bold;
}
.type > span {
  display: inline-block;
  padding: 5px 10px;
  background-color: #eee;
  /* color: orange; */
  color: rgb(118, 168, 245);
  border-radius: 6px;
}
.user {
  cursor: pointer;
}
.user > span {
  font-weight: bold;
}
.content {
  text-indent: 2em;
}
</style>