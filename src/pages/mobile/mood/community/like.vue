<template>
  <ul class="list" ref="list">
    <li v-for="mood in moods" :key="mood.id" class="mood-list">
      <!-- <MoodContent :mood="mood"></MoodContent> -->
      <div class="user-info">
        <div class="left">
          <div class="face">
            <img src="../../../../assets/images/@head1.png" alt="" />
          </div>
          <div class="info-wrap">
            <div class="info">
              <div class="name">{{ mood.user.username }}</div>
              <div class="user-name">
                <i class="iconfont">&#xe67c;</i>
                <span class="level">LV6</span>
              </div>
            </div>
            <div class="time">{{ formatDate(mood.datetime) }}</div>
          </div>
        </div>
        <div class="right">
          <i class="iconfont">&#xe65a;</i>
        </div>
      </div>
      <div class="mood">
        <span class="title">#{{ mood.content.slice(0, 10) }}...#</span>
        {{ mood.content }}
      </div>
      <div class="movie">
        <img src="../../../../assets/images/@pic1.png" alt="" />
      </div>
      <div class="comment-shortcut">
        <input type="text" placeholder="友善评论，文明发言" />
      </div>

      <div class="social">
        <div class="share">
          <i class="iconfont">&#xe60d;</i>
          <span>转发</span>
        </div>
        <div class="comment" @click="$router.push({ name: 'comment' })">
          <i class="iconfont">&#xe647;</i>
          <span>{{
            mood.comment.length > 0 ? mood.comment.length : "评论"
          }}</span>
        </div>
        <div class="likes">
          <i class="iconfont">&#xe651;</i>
          <span>{{ mood.like.length > 0 ? mood.like.length : "点赞" }}</span>
        </div>
      </div>
    </li>
    <li v-if="noMoreTip" class="nomore-tip">全部加载完成,无更多信息~</li>
  </ul>
</template>
<script>
import { formatDate } from "../../../../utils/index";
import MoodContent from "./moodcontent.vue";

export default {
  name: "like-page",
  props: ["moods", "noMoreTip"],
  components: { MoodContent },
  data() {
    return {
      pageSize: 10,
    };
  },
  mounted() {
    console.log(this.moods);
  },
  methods: {
    formatDate,
  },
};
</script>
<style scoped>
.mood-list {
  background-color: #fff;
  margin-bottom: 12px;
  padding: 10px;
}
.mood-list > div {
  margin-bottom: 10px;
}
.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info > .left {
  display: flex;
  justify-content: start;
  align-items: center;
}
.user-info > .right > i {
  color: rgb(255, 130, 0);
}

.face {
  border-radius: 50%;
  overflow: hidden;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgb(255, 130, 0);
  text-align: center;
}
.face:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.face > img {
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
}
.mood .title {
  color: rgb(98, 169, 235);
}
.movie > img {
  width: 100%;
  display: block;
}

.comment-shortcut {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.comment-shortcut > input {
  width: 100%;
  background-color: rgba(240, 240, 240, 0.7);
  border-radius: 10px;
  padding: 10px;
}
.comment-shortcut > input::placeholder {
  color: #939393;
  font-size: 16px;
}

.mood-list .social {
  margin-bottom: 0px;
}

.social {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social > div {
  width: 2rem;
  text-align: center;
}
.social i {
  font-size: 20px;
}
.time {
  color: #939393;
  font-size: 14px;
}
.nomore-tip {
  text-align: center;
  padding-bottom: 10px;
  color: #000;
  border-top: none;
}
</style>
