<template>
    <div class="mood">
      <div class="top">
        <p>hello,欢迎回来,亲爱的
          <span></span>
        </p>
      </div>
      <div class="center">
        <div>
          <div class='tabsWrap'>
            <div class="logo">
              <p>心情管理</p>
              <span>mood management</span>
            </div>
            <div class="tabs">
              <!-- <span>选择心情</span> -->
              <ul class="clearfix">
                <li class="active">全部</li>
                <li>NICE</li>
                <li>NORMAL</li>
                <li>BAD</li>
              </ul>
            </div>
            <div class='publishbtn'>
              <button @click="publish()">发表心情</button>
            </div>
          </div>
          <div class="searchWrap">
            <div class="sort">
              <span>发布时间排序</span>
              <select name="" id="">
                <option value="">升序</option>
                <option value="">降序</option>
              </select>
            </div>
            <div class="sel">
              <input type="text" placeholder="请输入搜索内容">
              <button>搜索</button>
            </div>
          </div>
        </div>
        <ul class='list'>
          <li v-for="(item,key) in data" 
          :key="key">
          <div class='user'>
            <span>用户:</span>
            {{item.uid}}
          </div>
          <div class='content'>
            {{item.content}}
          </div>
          <div class='time'>
            {{format(item.datetime)}}
          </div>
          <div class='type'>
            <span>#{{item.type}}</span>
          </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
  data(){
    return {
      data:{},
    };
  },
  methods:{
    publish(){
      this.$router.push('/mood/publish');
    },
    format(datetime){
      return moment(Number(datetime)).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  mounted(){
    // 请求心情数据
    this.request({
      url:this.API.moodApi,
      params:{type:'ALL'}
    }).then((data)=>{
      this.data = data;
    });
  }
};
</script>

<style scoped>
  .mood{
    background-color:rgb(229,229,229);
    padding-bottom:20px;
  }
  .mood>.center{
    width:80%;
    margin:20px auto 0px;
    background-color:#fff;
    min-width:800px;
  }
  .center>div{
    border-bottom:1px solid #ccc;
    padding:20px 30px;
  }
  .center>ul{
    padding:10px 30px;
  }
  .top{
    padding:20px 50px;
    background-color:rgb(245,245,245);
  }
  .tabsWrap>.logo{
    border-bottom:30px solid rgb(230, 240, 140);
    border-top:30px solid rgb(238, 125, 125);
    border-left:30px solid rgb(192, 123, 238);
    border-right:30px solid rgb(176, 240, 176);
    color:goldenrod;
    font-weight: bold;
    text-align:center;
  }
  .tabsWrap>.logo>span{
    font-style:italic;
  }
  .publishbtn>button{
    padding:10px 20px;
    background-color:orange;
    color:#fff;
    font-weight:bold;
    cursor: pointer;
  }
  .tabs>ul{
    height:42px;
  }
  .tabs>ul>li{
    text-align:center;
    float:left;
    cursor: pointer;
    padding:10px;
    margin-right:30px;
  }
  .tabs>ul>li:hover{
    color:red;
    border-bottom:1px solid red;
  }
  .tabs>ul>li.active{
    color:red;
    border-bottom:1px solid red;
  }
  .tabsWrap{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .searchWrap{
    margin-top:20px;
    width:600px;
    display:flex;
    justify-content: space-between;
    align-items:center;
  }
  .sort>select{
    border:1px solid #ccc;
    padding:5px 10px;
    margin-left:10px;
  }
  .sort>span{
    color:rgba(0,0,0,0.6)
  }
  .sel>input{
    border:1px solid #ccc;
    padding:5px 10px;
    width:120px;
  }
  .sel>button{
    padding:5px 20px;
    margin-left:10px;
    background-color:rgb(118, 168, 245);
    color:#fff;
    font-weight: bold;
  }
  .list{
    margin-top:30px;
  }
  .list>li{
    margin-top:20px;
    border:1px solid #ccc;
    border-radius:6px;
    padding:20px;
  }
  .list>li>div{
    margin-top:10px;
  }
  .user>span{
    font-weight: bold;
  }
  .content{
    text-indent:2em;
  }
  .time{
    font-size:14px;
    font-style:italic;
    color:grey;
  }
  .type>span{
    display:inline-block;
    padding:5px 10px;
    background-color:#eee;
    color:orange;
    border-radius:6px;
  }

</style>


