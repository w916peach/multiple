<template>
  <div class="guide">
    <div class="guideWrap" :style="{
      width: '360*3+px', transform: `translateX(${translateX}rem)`
    }" @touchstart="guideChangeStart" @touchend="guideChangeEnd">
      <div class="guide-back-one guide-card">
        <div class="guide-one">
          <div class="main" :style="{ marginTop: marT, width: mainW }">
            <div class="upper">
              <img src="../../../assets/images/@1xa1-2.png" alt="" class="animated shake"
                :style="{ width: imgW + 'rem' }" />
            </div>
            <div class="lower">
              <img src="../../../assets/images/@1xa1-1.png" alt="" class="animated shake"
                :style="{ width: imgW + 'rem' }" />
            </div>
          </div>
        </div>
      </div>
      <div class="guide-back-two guide-card">
        <div class="guide-two">
          <div class="main" :style="{ marginTop: marT, width: mainW }">
            <div class="upper">
              <img src="../../../assets/images/@1xa2-1.png" alt="" class="animated slideInLeft"
                :style="{ width: imgW + 'rem' }">
            </div>
            <div class="lower">
              <img src="../../../assets/images/@1xa2-2.png" alt="" class="animated slideInRight"
                :style="{ width: imgW + 'rem' }">
            </div>
          </div>
        </div>
      </div>
      <div class="guide-back-three guide-card">
        <div class="guide-three">
          <div class="main" :style="{ marginTop: marT, width: mainW }">
            <div class="upper">
              <img src="../../../assets/images/@1xa3-1.png" alt="" class="animated tada"
                :style="{ width: imgW + 'rem' }">
            </div>
            <div class="down">
              <button @click="() => {
                $router.push('/mobile/login')
              }">进入</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgW: 0,
      marT: "70%",
      mainW: 0,
      touchStart: 0,
      touchEnd: 0,
      translateX: 0
    };
  },
  methods: {
    getPos() {
      let clientW = document.documentElement.clientWidth;
      let clientH = document.documentElement.clientHeight;

      /*
        img 尺寸：背景图宽度*0.52/48
        背景图宽度：设备宽<540时是设备宽；  或者 设备宽>时，600是设备高*375/667
      */

      if (clientW < 540) {
        this.imgW = (clientW * 0.52) / 48;
        this.marT = "53%";
        this.mainW = "70%";
      } else {
        this.imgW = (((clientH * 375) / 667) * 0.52) / 48 / 2.2;
        this.marT = "30%";
        this.mainW = "60%";
      }
    },
    guideChangeStart(e) {
      this.touchStart = e.changedTouches[0].clientX;
    },
    guideChangeEnd(e) {
      this.touchEnd = e.changedTouches[0].clientX;

      if (this.touchEnd < this.touchStart) {
        if (this.translateX <= -15) {
          return;
        }
        this.translateX -= 7.5;
      } else if (this.touchEnd > this.touchStart) {
        if (this.translateX === 0) {
          return;
        }
        this.translateX += 7.5;
      }
    },
  },
  mounted() {
    this.getPos();
  },
};
</script>

<style scoped>
.guide {
  height: 100%;
}

.guideWrap {
  width: calc(7.5rem*3);
  height: 100%;
}

.guide-card {
  width: 7.5rem;
  height: 100%;
  float: left;
}

.guide-back-one {
  height: 100%;
  background-color: rgb(253, 223, 245);
}

.guide-back-two {
  height: 100%;
  background-color: rgb(222, 241, 248);
}

.guide-back-three {
  height: 100%;
  background-color: rgb(173, 194, 153);
}

.guide-one {
  height: 100%;
  position: relative;
  background-image: url("../../../assets/images/@1xa1.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  overflow: hidden;
}

.guide-two {
  height: 100%;
  position: relative;
  background-image: url("../../../assets/images/@1xa2.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  overflow: hidden;
}

.guide-two>.main {
  display: flex;
  justify-content: space-between;
}

.guide-three {
  height: 100%;
  position: relative;
  background-image: url("../../../assets/images/@1xa3.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  overflow: hidden;
}

.guide-three .down {
  text-align: center;
}

.guide-three .down>button {
  padding: 0.15rem 0.4rem;
  border-radius: 0.25rem;
  background-color: #fff;
  border: 0.025rem solid rgb(105, 157, 105);
  color: rgb(255, 122, 122);
  font-size: 0.3rem;
}

.main {
  margin: 0 auto;
}

.lower {
  margin-top: 0.3rem;
  text-align: right;
}
</style>
