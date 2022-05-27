<template>
  <ul class="list">
    <li v-for="mood in moods" :key="mood.id">
      <div class="title">{{ mood.content.slice(0, 10) }}...</div>
      <div class="info">
        <div class="left">
          <div class="face">
            <img src="../../../../assets/images/@head1.png" alt="" />
          </div>
          <div class="user-name">
            <div>
              <img src="../../../../assets/images/@userlevel.png" alt="" />
            </div>
            <div class="level">LV6</div>
          </div>
          <div class="name">{{ mood.user.username }}</div>
        </div>
        <div class="right">
          <img src="../../../../assets/images/@arrow.png" alt="" />
        </div>
      </div>
      <div class="movie">
        <img src="../../../../assets/images/@pic1.png" alt="" />
      </div>
      <div class="tip">{{ mood.content }}</div>
      <div class="social">
        <div class="time">{{ formatDate(mood.datetime) }}</div>

        <div class="right">
          <div class="share">
            <img src="../../../../assets/images/@share.png" alt="" />
          </div>
          <div class="comment" @click="$router.push({ name: 'comment' })">
            <img src="../../../../assets/images/@communicate.png" alt="" />
          </div>
          <div class="likes">
            <img src="../../../../assets/images/@heart.png" alt="" />
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import { formatDate } from "../../../../utils/index";

export default {
  name: "like-page",
  data() {
    return {
      moods: [],
    };
  },
  mounted() {
    this.request({ url: this.API.moodApi, params: {} }).then((data) => {
      this.moods = data.data;
    });
  },
  methods: {
    formatDate,
  },
};
</script>
<style scoped>
.list > li {
  border-top: 0.04rem solid rgb(188, 188, 188);
  margin-bottom: 20px;
  background-color: #fff;
}

.list .title {
  background-color: rgb(255, 122, 122);
  color: #fff;
  padding: 0.2rem;
}

.list .info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0.3rem;
}

.list .info > .left {
  display: flex;
  justify-content: start;
  align-items: center;
}

.list .info > .left .face {
  border-radius: 50%;
  overflow: hidden;
  width: 1rem;
  height: 1rem;
  border: 0.05rem solid rgb(255, 122, 122);
  text-align: center;
}

.list .info > .left .face:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.list .info > .left .face > img {
  vertical-align: middle;
}

.user-name {
  display: flex;
  justify-content: start;
  align-items: center;
  border: 0.02rem solid rgb(255, 122, 122);
  border-radius: 0.2rem;
  padding: 0.05rem 0.1rem;
  margin: 0rem 0.1rem;
}

.list .movie > img {
  width: 100%;
}

.list .tip {
  color: rgba(0, 0, 0);
  padding: 0.1rem;
  font-family: "黑体";
}

.list .social {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem;
}

.list .social > .right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list .social > .right > div {
  padding: 0rem 0.1rem;
}
</style>
