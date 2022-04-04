<template>
  <div class="mood" :style="{minHeight:this.minHeight+'px'}">
    <div
      class="top"
    >
      <div
        class='logoWrap center'
      >
        <div class="logo">
          <img
            src="../../assets/logo2.png"
            alt=""
          >
        </div>
        <div class="tabs">
          <!-- <span>选择心情</span> -->
          <ul>
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
        <div class="sel">
          <input
            type="text"
            placeholder="请输入搜索内容"
            v-model="content"
          >
            <button @click="selClick()">搜索</button>
        </div>
        <div class="sort">
          <!-- <span>发布时间排序</span> -->
          <select
            name=""
            id=""
            v-model="order"
          >
            <option value="Aescend">时间升序</option>
            <option value="Descend">时间降序</option>
            </select>
        </div>
        <div class="selPageSize">
          <!-- <span>每页显示</span> -->
          <select
            name=""
            id=""
            v-model="pageSize"
          >
            <option value="5">每页显示5条</option>
            <option value="10">每页显示10条</option>
            <option value="15">每页显示15条</option>
            </select>
        </div>
        <div class='publishbtn'>
          <button @click="publish()">发表心情</button>
        </div>
        <div v-if="isLogin" class='userInfor'>
          欢迎回来,
          <span @click="usernameClick()">{{username}}</span>
        </div>
        <div v-else class="loginwrap">
          <span class="register">注册</span>
          <span class="splitline">丨</span>
          <span class="login" @click="loginClick()">登录</span>
        </div>
    </div>
    <!-- <div class='selWrap' :class="isCeil?'active':'Active'">
  <div class="center">
    <div>
      <div class="searchWrap"> </div> 
    </div>
  </div>
  </div> -->
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
                <span @click="()=>{likeClick(item.id)}">
                  {{!item.hadGivenFabulous?'点赞':'取消'}}
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
      isOperate: false, //点赞评论是否显示
      operateId: "" ,//当前准备点赞评论的id
      isLogin:false, //是否登录 , 决定右上角显示注册登录，还是用户名
      minHeight:500, //mood最小高度
    };
  },
  methods: {
    getMinHeight(){
      this.minHeight = document.documentElement.clientHeight-20;
    },
    getToken(){
      if(JSON.parse(localStorage.getItem("loginInfor"))){
        if(JSON.parse(localStorage.getItem("loginInfor")).token){
          this.isLogin = true;
        }
      }
    },
    loginUser() {
      if(JSON.parse(localStorage.getItem("loginInfor"))){
        this.username = JSON.parse(localStorage.getItem("loginInfor")).username; //获取登录的用户名
      }
    },
    startRequest() {
      const type = JSON.parse(localStorage.getItem("loginInfor"))?.token ? "POST" : "GET"; //根据登录情况判断请求方式
      // console.log(type);
      this.request({
        url: this.API.moodApi,
        method:type,
        params: {
          content: this.content,
          type: this.type,
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
          order: this.order
        }
      }).then(data => {
        // console.log(data);
        this.moodData = data;
        this.pages = new Array(Math.ceil(data.total / this.pageSize));
      });
    },
    // 点击右上角用户名
    usernameClick(){
      location.reload();
    },
    // 点击登录
    loginClick(){
      location.href="/login";
    },
    // 点击发表心情
    publish() {
      const token = JSON.parse(localStorage.getItem("loginInfor")).token;
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
      // console.log(this.isOperate);
    },
    // 点击点赞
    likeClick(id) {
      this.request({
        url: this.API.moodGiveFabulous,
        method: "POST",
        headers: {
          Authorization: JSON.parse(localStorage.getItem("loginInfor")).token
        },
        data: {
          uid: JSON.parse(localStorage.getItem("loginInfor")).uid, //当前登录的用户-也可以理解为执行点赞和取消点赞的用户
          id: id //点赞和取消点赞的心情的id
        }
      }).then(() => {
        // console.log(data);
        location.reload(); //刷新页面，重新获取到
      });
      this.isOperate = false;
    }
  },
  mounted() {
    this.getMinHeight(); //获取可是窗口的高度
    this.getToken(); //根据token判断是否登录，修改isLogin值
    this.loginUser();
    // 注册获取登录的用户名的事件
    vm.$on("loginUser", username => {
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
      if (scrollTop >= 120) {
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
    },
  }
};
</script>

<style scoped>

.mood {
  padding-bottom: 20px;
  background-image:url("../../assets/01.jpg");
  background-size:100% 100%;
}
.mood > .top {
  position:fixed;
  top:0px;
  width: 100%;
  background-color:rgb(70, 108, 125);
}
.top>.center{
  width:1200px;
  margin:0 auto;
}
.logoWrap {
  min-width: 800px;
  height:70px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.logoWrap > div {
  text-align: center;
}
.logoWrap > .logo > img {
  vertical-align:middle;
  width: 60px;
  cursor: pointer;
}
.logoWrap > .userInfor {
  color:orange;
  font-style:italic;
}
.logoWrap > .userInfor > span {
  color:orange;
  font-weight: bold;
  cursor: pointer;
}
.mood > .center {
  width: 1200px;
  margin: 0px auto;
  padding-top: 60px;
  background-color:rgb(255, 255, 255);
  min-width: 800px;
}
.center > ul {
  padding: 10px 30px;
}
.publishbtn > button {
  padding: 10px 20px;
  /* background-color: rgba(255,165,0,0.75); */
  background-color:orange; 
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.tabs{
  margin-left:10px;
}
.tabs > ul {
  display:flex;
  justify-content: space-around;
  align-items: center;
}
.tabs > ul > li {
  height: 36px;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  margin-right: 10px;
  color:#fff;
  border-radius:6px;
  padding:0px 5px;
}
.tabs > ul > li:hover {
  background-color:rgba(255,165,0,0.75);
  color:#fff;
}
.tabs > ul > li.active {
  background-color:rgba(255,165,0,0.75);
  color:#fff;
}
.sort > select,
.selPageSize > select {
  border: 1px solid #ccc;
  padding: 5px 0px;
  margin-left: 0px;
}
.sel > input {
  border: 1px solid #ccc;
  padding: 5px 10px;
  width: 150px;
}
.sel > button {
  padding: 5px 10px;
  margin-left: 5px;
  background-color: rgb(118, 168, 245);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.register,.login{
  font-weight: bold;
  color:orange;
  cursor: pointer;
}
.splitline{
  color:#fff;
  font-weight: bold;
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
.user{
  cursor: pointer;
}
.user > span {
  font-weight: bold;
}
.content {
  text-indent: 2em;
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
  background-color: rgba(255,165,0,0.75);
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
  cursor: pointer;
  float:left;
  color:rgba(255,165,0,0.75);
  margin-right: 10px;
}
.likelist > ul > li.icon > i {
  font-weight: 18px;
  color:rgba(255,165,0,0.75);
  font-weight: bold;
}
.type > span {
  display: inline-block;
  padding: 5px 10px;
  background-color: #eee;
  /* color: orange; */
  color:rgb(118,168,245);
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
  background-color:rgba(255,165,0,0.75);
  color: #fff;
  padding: 10px 20px;
  font-weight: bold;
}
.pages > span.active {
  background-color:rgb(255,0,0,0.6);
  color: #fff;
  font-weight: bold;
}
</style>


