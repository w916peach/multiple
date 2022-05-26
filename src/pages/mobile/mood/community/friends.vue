<template>
  <div class="friends">
    <div class="friends-main">
      <ul class="list">
        <li>
          <div class="friends-title">
            <div class="street">
              <img src="../../../../assets/images/@street-view.png" alt="" />
              <span>杭州</span>
            </div>
            <div class="user">
              <div class="face">
                <img src="../../../../assets/images/@head4.png" alt="" />
              </div>
              <div class="name">
                <span>东方可爱</span>
              </div>
            </div>
            <div class="to">
              <div>
                <img src="../../../../assets/images/@arrow.png" alt="" />
              </div>
            </div>
          </div>
          <div class="movie">
            <img src="../../../../assets/images/@pic4.png" alt="" />
          </div>
          <div class="tip">
            一川烟草,满城风絮,梅子黄时雨。
            <br />
            <br />
            原来梅子真的会变红啊！
          </div>
          <div class="social">
            <div class="left">
              <div class="time">04-11 09:46</div>
            </div>
            <div class="right">
              <div class="share">
                <img src="../../../../assets/images/@share.png" alt="" />
              </div>
              <div class="comment">
                <img src="../../../../assets/images/@communicate.png" alt="" />
              </div>
              <div class="likes">
                <img src="../../../../assets/images/@heart.png" alt="" />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="friends-title">
            <div class="street">
              <img src="../../../../assets/images/@street-view.png" alt="" />
              <span>上海</span>
            </div>
            <div class="user">
              <div class="face">
                <img src="../../../../assets/images/@head5.png" alt="" />
              </div>
              <div class="name">
                <span>诗</span>
              </div>
            </div>
            <div class="to">
              <div>
                <img src="../../../../assets/images/@arrow.png" alt="" />
              </div>
            </div>
          </div>
          <div class="movie">
            <img src="../../../../assets/images/@pic5.png" alt="" />
          </div>
          <div class="tip">如果看过的风景已足够,就不必再登高。</div>
          <div class="social">
            <div class="left">
              <div class="time">04-11 09:46</div>
            </div>
            <div class="right">
              <div class="share">
                <img src="../../../../assets/images/@share.png" alt="" />
              </div>
              <div class="comment">
                <img src="../../../../assets/images/@communicate.png" alt="" />
              </div>
              <div class="likes">
                <img src="../../../../assets/images/@heart.png" alt="" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.friends {
  height: calc(100% - 0.8rem);
  background-color: #fff;
  overflow-y: auto;
}

.friends-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.2rem 0.1rem 0.2rem;
}

.friends-title .street {
  background-color: rgb(255, 122, 122);
  color: #fff;
  padding: 0.05rem 0rem;
  width: 1.25rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.friends-title .street > img {
  width: 0.3rem;
  padding: 0.1rem;
}

.friends-title .street > span {
  padding-right: 0.15rem;
}

.friends-title .user {
  text-align: center;
}

.friends-title .user > .name {
  padding: 0.1rem 0rem;
}

.friends-title .face {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 0.03rem solid rgb(255, 122, 122);
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
}

.friends-title .face:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.friends-title .face > img {
  vertical-align: middle;
}

.friends-title .to {
  width: 1.25rem;
  display: flex;
  justify-content: end;
}

.friends-title .to > div {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: 0.02rem solid rgb(255, 122, 122);
  text-align: center;
}

.friends-title .to > div > img {
  vertical-align: middle;
}

.friends-title .to > div:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
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
