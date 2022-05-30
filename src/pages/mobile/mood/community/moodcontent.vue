<template>
  <div class="mood-content">
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
  </div>
</template>

<script>
import { formatDate } from "../../../../utils/index";

export default {
  name: "moodcontent-page",
  props: ["mood"],
  methods: {
    formatDate,
  },
  mounted() {
    console.log(this.mood);
  },
};
</script>

<style scoped>
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
</style>
