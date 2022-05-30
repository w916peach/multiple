<template>
  <div class="comment-page">
    <div class="main">
      <div class="head">
        <div class="back" @click="$router.push({ name: 'like' })">
          <i class="iconfont icon-zuojiantou"></i>
        </div>
        <div class="middle">详情</div>
        <div class="more">
          <i class="iconfont icon-gengduo"></i>
        </div>
      </div>
      <div class="content">
        <div class="mood-content">
          <div class="user-info">
            <div class="left">
              <div class="face">
                <img src="../../../../../assets/images/@head1.png" alt="" />
              </div>
              <div class="info-wrap">
                <div class="info">
                  <div class="name">dandan</div>
                  <div class="user-name">
                    <i class="iconfont">&#xe67c;</i>
                    <span class="level">LV6</span>
                  </div>
                </div>
                <div class="time">2022.5.20 5:20:00</div>
              </div>
            </div>
            <div class="right">
              <i class="iconfont">&#xe65a;</i>
            </div>
          </div>
          <div class="mood">
            <span class="title">#今天天气不错...#</span>
            今天天气不错，我的工作做的更好了，哈哈哈哈哈哈哈哈哈哈
          </div>
          <div class="movie">
            <img src="../../../../../assets/images/@pic1.png" alt="" />
          </div>
        </div>
        <div class="line"></div>
        <div class="social">
          <div class="social-title">
            <div class="social-title-l">
              <div
                :class="`social-title-share ${
                  listType === 'share' ? 'active' : ''
                }`"
                @click="listType = 'share'"
              >
                <span class="txt">转发</span>
                <span class="num">0</span>
              </div>
              <div
                :class="`social-title-comment ${
                  listType === 'comment' ? 'active' : ''
                }`"
                @click="listType = 'comment'"
              >
                <span class="txt">评论</span>
                <span class="num">5</span>
              </div>
            </div>
            <div class="sockal-title-r">
              <div
                :class="`social-title-like ${
                  listType === 'like' ? 'active' : ''
                }`"
                @click="listType = 'like'"
              >
                <span class="txt">赞</span>
                <span class="num">0</span>
              </div>
            </div>
          </div>
          <div class="social-content">
            <!-- <components :is="ComentList"></components> -->
            <ComentList v-if="listType === 'comment'" />
            <ShareList v-if="listType === 'share'" />
            <LikeList v-if="listType === 'like'" />
          </div>
        </div>
      </div>
      <div class="comment-shortcut">
        <input type="text" placeholder="写评论" />
      </div>
    </div>
    <div class="bottom">
      <div class="share">
        <i class="iconfont">&#xe60d;</i>
        <span>转发</span>
      </div>
      <div class="comment" @click="$router.push({ name: 'comment' })">
        <i class="iconfont">&#xe647;</i>
        <span>评论</span>
      </div>
      <div class="likes">
        <i class="iconfont">&#xe651;</i>
        <span>点赞</span>
      </div>
    </div>
  </div>
</template>

<script>
import ComentList from "./commentList.vue";
import ShareList from "./shareList.vue";
import LikeList from "./likeList.vue";

export default {
  name: "comment-page",
  components: {
    ComentList,
    ShareList,
    LikeList,
  },
  data() {
    return {
      listType: "comment",
    };
  },
};
</script>

<style scoped>
.comment-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main {
  flex: 1;
  position: relative;
  overflow-y: auto;
}

.head {
  position: fixed;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0px 10px;
  border-bottom: 2px solid #eee;
}

.head .back,
.head .more {
  width: 0.5rem;
  text-align: center;
}
.head i {
  color: rgb(250, 130, 0);
}
.head .middle {
  font-size: 20px;
  color: rgb(250, 130, 0);
}

.content {
  padding-top: 1.2rem;
  padding-bottom: 1rem;
  overflow-y: auto;
}
.mood-content > div {
  margin-bottom: 10px;
}
.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0px 10px;
}

.user-info > .left {
  display: flex;
  justify-content: start;
  align-items: center;
}
.user-info > .right > i {
  color: rgb(255, 130, 0);
}

.user-info .face {
  border-radius: 50%;
  overflow: hidden;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgb(255, 130, 0);
  text-align: center;
}
.user-info .face:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.user-info .face > img {
  vertical-align: middle;
}
.info-wrap {
  margin-left: 10px;
}
.info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
}
.name {
  font-size: 18px;
  color: rgb(255, 130, 0);
}
.level {
  font-size: 14px;
  color: #939393;
}

.user-name {
  margin-left: 5px;
}
.user-name i {
  color: gold;
  font-size: 20px;
  font-weight: bold;
}
.mood {
  color: rgba(0, 0, 0);
  padding: 0.1rem;
  font-family: "黑体";
  padding: 0px 10px;
}
.mood .title {
  color: rgb(98, 169, 235);
}
.mood-content .movie {
  padding: 0px 10px;
}
.movie > img {
  width: 100%;
  display: block;
}
.line {
  height: 10px;
  background-color: #eee;
}
.social {
  padding: 0px 10px;
}
.social-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 1px solid #eee;
}
.social-title-l {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.social-title-comment {
  margin-left: 30px;
}
.social-title span.num {
  padding: 0px 5px;
}
.social-title span {
  color: #939393;
}
.social-title .active span {
  color: #000;
  font-weight: bold;
}
.social-title .active {
  border-bottom: 2px solid rgb(255, 130, 0);
}
.social-content {
  padding-top: 10px;
}
.comment-shortcut {
  height: 1rem;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 1rem;
  padding: 0px 10px;
  background-color: #fff;
}
.comment-shortcut::after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.comment-shortcut input {
  width: 100%;
  background-color: rgba(240, 240, 240, 0.7);
  border-radius: 10px;
  padding: 10px;
}
.comment-shortcut input::placeholder {
  font-size: 14px;
  color: #939393;
  font-family: "黑体";
}
.bottom {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(235, 235, 235, 0.5);
}
.bottom > div {
  width: 2rem;
  text-align: center;
}
.bottom i {
  font-size: 20px;
}
</style>
