<template>
    <div class="popup">
        <div class="center">
            <h2>{{popupInfor.title}}</h2>
            <div class="main">
                <p class="tip">{{popupInfor.tip}}</p>
                <div class="content"></div>
                <div class="btn">
                    <button class='sure' @click="sureClick()">确定</button>
                    <button class='cancel' v-if="popupInfor.type==='alert'?false:true" @click="cancelClick()">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props:["popupInfor"],
  methods:{
    //点击确定按钮
    sureClick(){
      // 关闭弹框
      this.$emit("getisPopup");
    },
    // 点击取消按钮
    cancelClick(){
      // 关闭弹框
      this.$emit("getisPopup");
    }

  }
};
</script>


<style scoped>
    .popup{
        position:absolute;
        top:0px;
        left:0px;
        right:0px;
        bottom:0px;
        background-color:rgba(255,255,255,0.2);
    }
    .center{
        background-color:rgba(255,187,112,0.75);
        width:400px;
        position:absolute;
        left:50%;
        top:50%;
        transform: translateX(-50%) translateY(-50%);
        padding:30px 10px;
        border-radius:10px;
    }
    .center>h2{
        text-align: center;
        color:rgb(66, 50, 50);
        /* color:#fff; */
    }
    .tip{
        padding:20px;
        /* font-weight: bold; */
        color:rgb(66, 50, 50);
        /* color:#fff; */
    }
    .btn{
        display:flex;
        justify-content: end;
    }
    .btn>button{
        margin:0px 10px;
        padding:10px 20px;
        background-color:rgb(102, 126, 126);
        color:#fff;
        font-weight: bold;
        cursor: pointer;
    }

</style>

