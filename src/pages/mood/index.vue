<template>
  <div class="mood" ref="mood">
    <div class="top" :style="{ top: scrollTop + 'px' }">
      <div class="logoWrap">
        <div class="logo">
          <img src="../../assets/logo2.png" alt="" />
        </div>
        <div class="tabs">
          <ul>
            <li
              :class="type === 'ALL' ? 'active' : ''"
              type="ALL"
              @click="type = 'ALL'"
            >
              全部
            </li>
            <li
              v-for="(item, key) in typeData"
              :class="type === key ? 'active' : ''"
              :key="key"
              :type="key"
              @click="type = key"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="sel">
          <input
            type="text"
            placeholder="请输入搜索内容"
            v-model.lazy="searchValue"
          />
          <button>搜索</button>
        </div>
        <div class="sort">
          <select v-model="order">
            <option value="Aescend">时间升序</option>
            <option value="Descend">时间降序</option>
          </select>
        </div>
        <div class="selPageSize">
          <!-- <span>每页显示</span> -->
          <select v-model="pageSize">
            <option value="5">每页显示5条</option>
            <option value="10">每页显示10条</option>
            <option value="15">每页显示15条</option>
          </select>
        </div>
        <div class="publishbtn">
          <button
            @click="
              getLoginInfo().token
                ? $router.push('/mood/publish')
                : $router.push('/login')
            "
          >
            发表心情
          </button>
        </div>
        <div v-if="Boolean(getLoginInfo().token)" class="userInfor">
          欢迎回来,
          <span>{{ getLoginInfo().username }}</span
          >，
          <span @click="signout">退出</span>
        </div>
        <div v-else class="loginwrap">
          <span class="register">注册(暂未开放)</span>
          <span class="splitline">丨</span>
          <span class="login" @click="$router.push('/login')">登录</span>
        </div>
      </div>
    </div>
    <List
      :searchValue="searchValue"
      :type="type"
      :order="order"
      :pageSize="pageSize"
    />
  </div>
</template>

<script>
import { getLoginInfo, setLoginInfo } from "../../utils/storage";
import List from "./list.vue";
export default {
  data() {
    return {
      typeData: {},
      type: "ALL",
      searchValue: "",
      pageSize: 5,
      order: "Descend",
      scrollTop: 0,
    };
  },
  methods: {
    getLoginInfo,
    signout() {
      setLoginInfo("");
      this.$router.push("/login");
    },
    async initData() {
      const result = await this.request({ url: this.API.moodTypeApi });
      this.typeData = result;
    },
  },
  mounted() {
    this.initData();
    this.$refs.mood.onscroll = () => {
      this.scrollTop = this.$refs.mood.scrollTop;
    };
  },
  destroyed() {
    this.$refs.mood.onscroll = null;
  },
  components: { List },
};
</script>

<style scoped>
.mood {
  background-image: url("../../assets/01.jpg");
  background-size: 100% 100%;
  height: 100%;
  min-width: 1200px;
  position: relative;
  overflow-y: auto;
}
.mood > .top {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  background-color: rgb(70, 108, 125);
  padding: 0 20px;
}
.logoWrap {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.logoWrap > .logo > img {
  vertical-align: middle;
  width: 60px;
  cursor: pointer;
}
.logoWrap > .userInfor {
  color: orange;
  font-style: italic;
}
.logoWrap > .userInfor > span {
  color: orange;
  font-weight: bold;
  cursor: pointer;
}
.publishbtn > button {
  padding: 10px 20px;
  background-color: orange;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.tabs {
  margin-left: 10px;
}
.tabs > ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tabs > ul > li {
  height: 36px;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
  margin-right: 10px;
  color: #fff;
  border-radius: 6px;
  padding: 0px 5px;
}
.tabs > ul > li:hover {
  background-color: rgba(255, 165, 0, 0.75);
  color: #fff;
}
.tabs > ul > li.active {
  background-color: rgba(255, 165, 0, 0.75);
  color: #fff;
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
.register,
.login {
  font-weight: bold;
  color: orange;
  cursor: pointer;
}
.splitline {
  color: #fff;
  font-weight: bold;
}
</style>
