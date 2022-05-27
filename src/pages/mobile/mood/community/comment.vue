<template>
  <div class="comment">
    <div class="main">
      <div class="head">
        <div class="back" @click="$router.push({ name: 'like' })">
          <img src="../../../../assets/images/@arrow-back.png" alt="" />
        </div>
        <div class="middle">详情</div>
        <div class="more">
          <img src="../../../../assets/images/@more.png" alt="" />
        </div>
      </div>
      <div class="content">
        <div class="title">我喜欢的电影台词</div>
        <div class="info">
          <div class="face">
            <img src="../../../../assets/images/@head3.png" alt="" />
          </div>
          <div class="user-name">
            <div>
              <img src="../../../../assets/images/@userlevel.png" alt="" />
            </div>
            <div class="level">LV6</div>
          </div>
          <div class="name">糙汉子啊</div>
        </div>
        <div class="movie">
          <img src="../../../../assets/images/@pic3.png" alt="" />
        </div>
        <div class="tip">
          他是拥有山川河海的神明
          <br />
          她是误入神明眼睛的少女
        </div>
        <div class="likes">
          <div class="ico">
            <img src="../../../../assets/images/@heart-big.png" alt="" />
          </div>
          <ul>
            <li></li>
          </ul>
          <div class="arrow-more">
            <img src="../../../../assets/images/@arrow-r.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="leavemsg">
        <input type="text" placeholder="点此评论" />
      </div>
      <div class="like-wrap">
        <div class="share">
          <img src="../../../../assets/images/@share.png" alt="" />
        </div>
        <div class="like">
          <img src="../../../../assets/images/@heart.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment-page",
};
</script>

<style scoped>
.comment {
  height: 100%;
}

.main {
  height: 95%;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.2rem;
  padding: 0rem 0.3rem;
  color: rgb(255, 122, 122);
  font-size: 0.4rem;
  box-shadow: 0rem 0.02rem 0.2rem 0rem #ccc;
}

.head > .back,
.head > .more {
  width: 0.5rem;
  text-align: center;
}

.content {
  height: calc(100% - 1.2rem);
  overflow-y: auto;
}

.bottom {
  height: 5%;
}
</style>
