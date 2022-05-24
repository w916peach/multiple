<template>
  <div class="root">
    <router-view></router-view>
  </div>
</template>

<style>
.root {
  position: absolute;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  bottom: 0rem;
  overflow: hidden;
}

body {
  font-size: 16px;
}

* {
  padding: 0px;
  margin: 0px;
  list-style: none;
}

button,
input,
select {
  outline: none;
  border: none;
  border-radius: 6px;
}
</style>
