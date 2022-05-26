<template>
  <div class="guide">
    <div
      class="guideWrap"
      :style="{
        width: '360*3+px',
        transform: `translateX(${translateX}rem)`,
      }"
      @touchstart="guideChangeStart"
      @touchend="guideChangeEnd"
    >
      <div class="guide-back-one guide-card">
        <div class="guide-one">
          <div
            class="main"
            :style="{
              width: imgW + 'px',
              top: (138 / 667) * imgH + more + 'px',
            }"
            v-if="isShow"
          >
            <div
              class="upper"
              :style="{
                width: imgW + 'px',
                paddingLeft: '40px',
                boxSizing: 'border-box',
              }"
            >
              <img
                src="../../../assets/images/@1xa1-2.png"
                alt=""
                class="animated shake"
                :style="{ width: (241 / 375) * imgW + 'px' }"
              />
            </div>
            <div
              class="lower"
              :style="{
                width: imgW + 'px',
                paddingRight: '40px',
                boxSizing: 'border-box',
              }"
            >
              <img
                src="../../../assets/images/@1xa1-1.png"
                alt=""
                class="animated shake"
                :style="{ width: (241 / 375) * imgW + 'px' }"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="guide-back-two guide-card">
        <div class="guide-two">
          <div
            class="main"
            :style="{
              width: imgW + 'px',
              top: (155 / 667) * imgH + more + 'px',
            }"
            v-if="isShow"
          >
            <div class="upper" :style="{ paddingLeft: '50px' }">
              <img
                src="../../../assets/images/@1xa2-1.png"
                alt=""
                class="animated slideInLeft"
                :style="{ width: (175 / 375) * imgW + 'px' }"
              />
            </div>
            <div class="lower" :style="{ paddingRight: '50px' }">
              <img
                src="../../../assets/images/@1xa2-2.png"
                alt=""
                class="animated slideInRight"
                :style="{ width: (88 / 375) * imgW + 'px' }"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="guide-back-three guide-card">
        <div class="guide-three">
          <div
            class="main"
            :style="{
              width: imgW + 'px',
              top: (75 / 667) * imgH + more + 'px',
            }"
          >
            <div class="upper" :style="{ textAlign: 'center' }" v-if="isShow">
              <img
                src="../../../assets/images/@1xa3-1.png"
                alt=""
                class="animated tada"
                :style="{ width: (368 / 375) * imgW + 'px' }"
              />
            </div>
            <div class="down">
              <button
                @click="
                  () => {
                    $router.push('/mobile/login');
                  }
                "
              >
                进入
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guide-page",
  data() {
    return {
      imgW: 0, // 背景图宽
      imgH: 0, // 背景图高
      more: 0,

      touchStart: 0,
      touchEnd: 0,
      translateX: 0,
      isShow: true,
    };
  },
  methods: {
    getMustNum() {
      const clientW = document.documentElement.clientWidth;
      const clientH = document.documentElement.clientHeight;

      const imgW = 375;
      const imgH = 667;

      const wpercent = clientW / imgW;
      const hpercent = clientH / imgH;

      if (imgH * wpercent <= clientH) {
        return {
          width: clientW,
          height: imgH * wpercent,
          more: (clientH - imgH * wpercent) / 2,
        };
      }
      return { width: imgW * hpercent, height: clientH, more: 0 };
    },

    guideChangeStart(e) {
      this.touchStart = e.changedTouches[0].clientX;
      this.isShow = false;
    },
    guideChangeEnd(e) {
      this.touchEnd = e.changedTouches[0].clientX;

      if (this.touchEnd < this.touchStart) {
        // 左滑
        if (this.translateX <= -15) {
          return;
        }
        this.translateX -= 7.5;
        this.isShow = true;
      } else if (this.touchEnd > this.touchStart) {
        // 右滑
        if (this.translateX === 0) {
          return;
        }
        this.translateX += 7.5;
        this.isShow = true;
      }
    },
  },
  mounted() {
    const { width, height, more } = this.getMustNum();
    this.imgW = width;
    this.imgH = height;
    this.more = more;
  },
};
</script>

<style scoped>
.guide {
  height: 100%;
}
.guideWrap {
  width: calc(7.5rem * 3);
  height: 100%;
  transition: all 1s;
}
.guide-card {
  width: 7.5rem;
  height: 100%;
  float: left;
  position: relative;
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

.guide-two > .main {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

.guide-three .down > button {
  padding: 0.15rem 0.4rem;
  border-radius: 0.25rem;
  background-color: #fff;
  border: 0.025rem solid rgb(105, 157, 105);
  color: rgb(255, 122, 122);
  font-size: 0.3rem;
}

.main {
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.lower {
  margin-top: 10px;
  text-align: right;
}
</style>
