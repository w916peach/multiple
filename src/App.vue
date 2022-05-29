<template>
  <div class="root">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
}
.clearfix:after {
  content: "";
  display: block;
  visibility: hidden;
  clear: both;
}
.root {
  position: absolute;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  bottom: 0rem;
  overflow: hidden;
}
body,
a,
i,
span,
b,
strong {
  font-size: 16px;
  font-family: "黑体";
}

button,
input,
select {
  outline: none;
  border: none;
  border-radius: 6px;
}
</style>
