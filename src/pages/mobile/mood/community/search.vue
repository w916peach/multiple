<template>
  <div class="search">
    <div class="title">
      <div class="left">
        <input type="text" placeholder="搜索话题/昵称/ID">
        <img src="../../../../assets/images/@magnifier-small.png" alt="" class="magnifier">
        <img src="../../../../assets/images/@del.png" alt="" class="del">
      </div>
      <div class="right">
        <span @click="$router.push('/mobile/mood/community')">取消</span>
      </div>
      <div class="search-history">
        <img src="../../../../assets/images/@triangle.png" alt="">
        <ul>
          <li v-for="(item, key) in searchHistory" :key="key">{{ item }}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      searchHistory: ["绿皮书", "电影台词", "loves"]
    };
  }
};
</script>

<style scoped>
.search {
  height: 100%;
  background-color: #eee;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(230, 107, 107);
  padding: 0.6rem 0.5rem 0.2rem 0.2rem;
  position: relative;
}

.title>.left {
  position: relative;
}

.title>.left>img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.title>.left>img.magnifier {
  left: 0.15rem;
}

.title>.left>img.del {
  left: 90%;
}

.search-history {
  /* width: 5rem; */
  position: absolute;
  background-color: rgb(237, 179, 179);
  color: #fff;
  top: 2rem;
  left: 0.5rem;
  border-radius: 0.1rem;
}

.search-history>ul {
  overflow: hidden;
}

.search-history>ul>li {
  text-align: center;
  float: left;
  padding: 0.2rem 0.4rem;
}

.search-history>ul>li+li {
  border-left: 0.03rem solid #fff;
}

.search-history>img {
  position: absolute;
  top: -0.175rem;
  left: 50%;
  transform: translateX(-50%);
}

.title input {
  width: 5rem;
  padding: 0.2rem;
  text-indent: 0.3rem;
}

.title input::placeholder {
  font-size: 0.3rem;
}

.title span {
  color: #fff;
}
</style>