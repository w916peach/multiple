<template>
  <div class="like">
    <div class="like-main">
      <ul class="list">
        <li>
          <div class="title">
            我喜欢的电影台词
          </div>
          <div class="info">
            <div class="left">
              <div class="face">
                <img src="../../../../assets/images/@head1.png" alt="">
              </div>
              <div class="user-name">
                <div>
                  <img src="../../../../assets/images/@userlevel.png" alt="">
                </div>
                <div class="level">
                  LV6
                </div>
              </div>
              <div class="name">
                山河里的少女
              </div>

            </div>
            <div class="right">
              <img src="../../../../assets/images/@arrow.png" alt="">
            </div>
          </div>
          <div class="movie">
            <img src="../../../../assets/images/@pic1.png" alt="">
          </div>
          <div class="tip">
            大家猜猜看什么电影
          </div>
          <div class="social">
            <div class="left">
              <div class="time">
                04-11 09:46
              </div>
            </div>
            <div class="right">
              <div class="share">
                <img src="../../../../assets/images/@share.png" alt="">
              </div>
              <div class="comment">
                <img src="../../../../assets/images/@communicate.png" alt="">
              </div>
              <div class="likes">
                <img src="../../../../assets/images/@heart.png" alt="">
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="title">
            日式冷笑话
          </div>
          <div class="info">
            <div class="left">
              <div class="face">
                <img src="../../../../assets/images/@head2.png" alt="">
              </div>
              <div class="user-name">
                <div>
                  <img src="../../../../assets/images/@userlevel.png" alt="">
                </div>
                <div class="level">
                  LV5
                </div>
              </div>
              <div class="name">
                别拖至春天
              </div>

            </div>
            <div class="right">
              <img src="../../../../assets/images/@arrow.png" alt="">
            </div>
          </div>
          <div class="movie">
            <img src="../../../../assets/images/@pic2.png" alt="">
          </div>
          <div class="tip">
            两只小蜜蜂啊,飞在花丛中啊,飞得高的对飞得低的说


            你...
          </div>
          <div class="social">
            <div class="left">
              <div class="time">
                04-11 09:46
              </div>
            </div>
            <div class="right">
              <div class="share">
                <img src="../../../../assets/images/@share.png" alt="">
              </div>
              <div class="comment">
                <img src="../../../../assets/images/@communicate.png" alt="">
              </div>
              <div class="likes">
                <img src="../../../../assets/images/@heart.png" alt="">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="title">
            我中意的歌词
          </div>
          <div class="info">
            <div class="left">
              <div class="face">
                <img src="../../../../assets/images/@head3.png" alt="">
              </div>
              <div class="user-name">
                <div>
                  <img src="../../../../assets/images/@userlevel.png" alt="">
                </div>
                <div class="level">
                  LV6
                </div>
              </div>
              <div class="name">
                糙汉子啊
              </div>

            </div>
            <div class="right">
              <img src="../../../../assets/images/@arrow.png" alt="">
            </div>
          </div>
          <div class="movie">
            <img src="../../../../assets/images/@pic3.png" alt="">
          </div>
          <div class="tip">
            他是拥有山川河海的神明
            <br>
            她是误入神明眼睛的少女
          </div>
          <div class="social">
            <div class="left">
              <div class="time">
                04-11 09:46
              </div>
            </div>
            <div class="right">
              <div class="share">
                <img src="../../../../assets/images/@share.png" alt="">
              </div>
              <div class="comment">
                <img src="../../../../assets/images/@communicate.png" alt="">
              </div>
              <div class="likes">
                <img src="../../../../assets/images/@heart.png" alt="">
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.like {
  height: calc(100% - 0.8rem);
  background-color: #fff;
  overflow-y: auto;
}

.list>li {
  border-top: 0.04rem solid rgb(188, 188, 188);
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

.list .info>.left {
  display: flex;
  justify-content: start;
  align-items: center;
}

.list .info>.left .face {
  border-radius: 50%;
  overflow: hidden;
  width: 1rem;
  height: 1rem;
  border: 0.05rem solid rgb(255, 122, 122);
  text-align: center;
}

.list .info>.left .face:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.list .info>.left .face>img {
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

.list .social>.right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list .social>.right>div {
  padding: 0rem 0.1rem;
}
</style>
