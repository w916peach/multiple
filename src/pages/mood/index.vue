<template>
  <div class="mood">
    <div
      :class="isCeil?'active':'Active'"
      class="top"
    >
      <p>hello,欢迎回来,亲爱的
        <span>{{username}}</span>
      </p>
      <div class="center">
        <div>
          <div class='tabsWrap'>
            <div class="logo">
              <p>心情管理</p>
              <span>mood management</span>
            </div>
            <div class="tabs">
              <!-- <span>选择心情</span> -->
              <ul class="clearfix">
                <li
                  :class="isAll?'active':''"
                  type="ALL"
                  @click="allClick()"
                >全部</li>
                  <li
                    v-for="(item,key) in typeData"
                    :class="type===key?'active':''"
                    :key="key"
                    :type="key"
                    @click="typeClick(key)"
                  >{{item}}</li>
              </ul>
            </div>
            <div class='publishbtn'>
              <button @click="publish()">发表心情</button>
            </div>
          </div>
          <div class="searchWrap">
            <div class="sort">
              <span>发布时间排序</span>
              <select
                name=""
                id=""
                v-model="order"
              >
                <option value="Aescend">升序</option>
                <option value="Descend">降序</option>
                </select>
            </div>
            <div class="selPageSize">
              <span>每页显示</span>
              <select
                name=""
                id=""
                v-model="pageSize"
              >
                <option value="5">5条</option>
                <option value="10">10条</option>
                <option value="15">15条</option>
                </select>
            </div>
            <div class="sel">
              <input
                type="text"
                placeholder="请输入搜索内容"
                v-model="content"
              >
                <button @click="selClick()">搜索</button>
            </div>
          </div>
        </div>
      </div>
  </div>

  <div class="center">
    <ul class='list'>
      <li
        v-for="(item,key) in moodData.data"
        :key="key"
      >
        <div class='user'>
          <span>用户:</span>
          {{item.user.username}}
        </div>
        <div class='content'>
          {{item.content}}
        </div>
        <div class="communication">
          <div class='time'>
            {{format(item.datetime)}}
          </div>
          <div class='likecomment'>
            <div :class="isOperate&&operateId===item.id?'isOperation':'operation'">
              <span class='like'>
                <i class="iconfont">&#xe651;</i>
                <span @click="(e)=>{likeClick(e,item.uid,item.id)}">
                  {{moodData.data.find((Item)=>{return Item.id===item.id}).like.findIndex((item)=>item.username===username)===-1?'点赞':'取消'}}
                </span>
              </span>
              <span class='comment'>
                <i class="iconfont">&#xe601;</i>
                <span>评论</span>
              </span>
            </div>
            <div
              class='moreoperation'
              @click="moreOperateClick(item.id)"
            >
              <i class="iconfont">&#xe69b;</i>
          </div>
        </div>
  </div>
  <div class='likelist'>
    <ul class="clearfix">
      <li v-if="moodData.data.find((Item)=>{return Item.id===item.id}).like.length>0"
        class="icon"
      >
        <i class='iconfont'>&#xe651;</i>
      </li>
      <li
        v-for="(like,key) in moodData.data.find((Item)=>{return Item.id===item.id}).like"
        :key="key"
      >
        {{like.username}}
        </li>
    </ul>
  </div>
  <div class='type'>
    <span>#{{item.type}}</span>
  </div>
  </li>
  </ul>
  <div class="pages">
    <span
      class="prev"
      @click="prevClick()"
    >上一页</span>
      <span
        v-for="(item,key) in pages"
        :key="key"
        :class="pageIndex===key+1?'active':''"
        @click="pageChangeClick(key)"
      >{{key+1}}
        </span>
        <span
          class="next"
          @click="nextClick()"
        >下一页</span>
  </div>
  </div>
  </div>
</template>

<script>
import moment from "moment";
import vm from "@/utils/componentStatus.js";
export default {
  data() {
    return {
      username: "",
      typeData: {}, //请求过来的心情类型数据 {NICE: '心情很哇塞', NORMAL: '心情一般般', BAD: '心情极度悲伤'}
      moodData: {}, //请求过来的心情数据:截取的心情数据和数据总长度 {data:[],total:24}
      type: "ALL", //选项卡心情类型
      content: "", //模糊搜索条件
      pageSize: 5, //每页显示几条
      pageIndex: 1, //第几页
      order: "Descend", //排序条件
      pages: 0, //页码数
      isAll: true, //是否点击的全部
      isCeil: false, //是否吸顶
      isOperate: false, //点在评论是否显示
      operateId: "" //当前准备点赞评论的id
    };
  },
  methods: {
    loginUser() {
      this.username = localStorage.getItem("username");
    },
    startRequest() {
      this.request({
        url: this.API.moodApi,
        params: {
          content: this.content,
          type: this.type,
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
          order: this.order
        }
      }).then(data => {
        console.log(data);
        this.moodData = data;
        this.pages = new Array(Math.ceil(data.total / this.pageSize));
      });
    },
    // 点击发表
    publish() {
      const token = localStorage.getItem("token");
      // console.log(token); //undefined就跳到login，否则跳到publish
      if (token) {
        this.$router.push("/mood/publish");
      } else {
        this.$router.push("/login");
      }
    },
    format(datetime) {
      return moment(Number(datetime)).format("YYYY-MM-DD HH:mm:ss");
    },
    // 点击选项卡全部
    allClick() {
      this.isAll = true;
      this.type = "ALL";
      this.pageIndex = 1;
      this.startRequest();
    },
    // 点击选项卡心情类型
    typeClick(key) {
      this.isAll = false;
      this.type = key;
      this.pageIndex = 1;
      this.startRequest();
    },
    // 点击搜索
    selClick() {
      this.pageIndex = 1;
      this.startRequest();
    },
    // 点击页码
    pageChangeClick(key) {
      this.pageIndex = key + 1;
      this.startRequest();
    },
    // 点击上一页
    prevClick() {
      this.pageIndex--;
      if (this.pageIndex <= 0) {
        this.pageIndex = 1;
      }
      this.startRequest();
    },
    // 点击下一页
    nextClick() {
      this.pageIndex++;
      if (this.pageIndex > this.pages.length) {
        this.pageIndex = this.pages.length;
      }
      this.startRequest();
    },
    // 点击显示或隐藏点赞和评论
    moreOperateClick(id) {
      this.operateId = id;
      this.isOperate = !this.isOperate;
    },
    // 点击点赞
    likeClick(e, uid, id) {
      this.request({
        url: this.API.moodGiveFabulous,
        method: "POST",
        // headers: {
        //   Authorization: localStorage.getItem("token")
        // },
        data: {
          uid: uid,
          id: id //点赞和取消点赞的心情的id
        }
      }).then(() => {
        location.reload(); //刷新页面，重新获取到
      });
      this.isOperate = false;
    }
  },
  mounted() {
    this.loginUser();

    // 注册获取登录的用户名的事件
    vm.$on("loginUser", username => {
      console.log(username);
      this.username = username;
    });

    // 请求心情数据
    this.startRequest();

    // 请求心情类型数据
    this.request({
      url: this.API.moodTypeApi
    }).then(data => {
      this.typeData = data;
    });

    // 滚动条滚动事件,实现吸顶
    document.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= 200) {
        this.isCeil = true;
      } else {
        this.isCeil = false;
      }
    };
  },
  watch: {
    // 排序条件修改
    order(newOrder) {
      this.order = newOrder;
      this.startRequest();
    },
    // 每页显示条数修改
    pageSize(newPageSize) {
      this.pageSize = newPageSize;
      this.pageIndex = 1;
      this.startRequest();
    }
  }
};
</script>

<style scoped>
.mood {
  background-color: rgb(229, 229, 229);
  padding-bottom: 20px;
}
.mood > .top {
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  top: 0px;
  padding-bottom: 20px;
  background-color: rgb(245, 245, 245);
}
.mood > .top > p > span {
  font-weight: bold;
}
.mood > .active {
  position: fixed;
}
.mood > .Active {
  position: absolute;
}
.mood > .top > .center {
  background-color: #fff;
  width: 1000px;
  margin: 0 auto;
}
.mood > .center {
  width: 1000px;
  margin: 0px auto;
  padding-top: 230px;
  background-color: #fff;
  min-width: 800px;
}
.center > div {
  padding: 20px 30px;
}
.center > ul {
  padding: 10px 30px;
}

.top > p {
  padding: 20px 50px;
}
.tabsWrap > .logo {
  border-bottom: 30px solid rgb(230, 240, 140);
  border-top: 30px solid rgb(238, 125, 125);
  border-left: 30px solid rgb(192, 123, 238);
  border-right: 30px solid rgb(176, 240, 176);
  font-weight: bold;
  text-align: center;
}
.tabsWrap > .logo > p {
  color: goldenrod;
}
.tabsWrap > .logo > span {
  color: goldenrod;
}
.tabsWrap > .logo > span {
  font-style: italic;
}
.publishbtn > button {
  padding: 10px 20px;
  background-color: orange;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.tabs > ul {
  height: 42px;
}
.tabs > ul > li {
  text-align: center;
  float: left;
  cursor: pointer;
  padding: 10px;
  margin-right: 30px;
}
.tabs > ul > li:hover {
  color: red;
  border-bottom: 1px solid red;
}
.tabs > ul > li.active {
  color: red;
  border-bottom: 1px solid red;
}
.tabsWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.searchWrap {
  margin-top: 20px;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sort > select,
.selPageSize > select {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin-left: 10px;
}
.sort > span {
  color: rgba(0, 0, 0, 0.6);
}
.sel > input {
  border: 1px solid #ccc;
  padding: 5px 10px;
  width: 150px;
}
.sel > button {
  padding: 5px 20px;
  margin-left: 10px;
  background-color: rgb(118, 168, 245);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.list {
  margin-top: 30px;
}
.list > li {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 20px;
}
.list > li > div {
  margin-top: 10px;
}
.user > span {
  font-weight: bold;
}
.content {
  text-indent: 2em;
}
.communication {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.likecomment {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.operation {
  display: none;
  transition: 2s all;
}
.isOperation {
  width: 160px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin-right: 20px;
  border-radius: 6px;
  background-color: orange;
}
.isOperation > span {
  height: 30px;
  margin: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.isOperation > span > i {
  font-size: 20px;
  color: #fff;
}
.isOperation > span > span {
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
  color: rgb(95, 158, 240);
  font-weight: bold;
  float: left;
  margin-right: 10px;
}
.likelist > ul > li.icon > i {
  font-weight: 18px;
  color: rgb(95, 158, 240);
  font-weight: bold;
}
.type > span {
  display: inline-block;
  padding: 5px 10px;
  background-color: #eee;
  color: orange;
  border-radius: 6px;
}
.pages {
  text-align: center;
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
  background-color: orange;
  color: #fff;
  padding: 10px 20px;
  font-weight: bold;
}
.pages > span.active {
  background-color: red;
  color: #fff;
  font-weight: bold;
}
</style>


