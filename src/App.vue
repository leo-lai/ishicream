<template>
  <div class="header">
    <div class="inner">
      <a class="logo" href="/">
        <img src="./assets/logo.jpg" alt="" />
      </a>
      <div class="menu">
        <a
          v-for="item in menuList"
          :class="{ active: item.hash ? route.hash === item.hash : route.path === item.path }"
          :href="item.path + item.hash"
        >
          {{ item.name }}
        </a>
      </div>
      <a class="btn btn-01">Connect Wallet</a>
    </div>
  </div>

  <router-view></router-view>

  <div class="footer">
    <div class="inner">
      <div class="flex">
        <div class="left">
          <img class="logo" src="./assets/logo.jpg" alt="" />
          <p>All Right Reserved @ ishicream.com</p>
        </div>
        <div class="rest"></div>
        <div class="right">
          <div class="mail">
            <label>Get On The Lists</label>
            <input placeholder="Enter your email address" />
            <button class="btn btn-01">→</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md

import { ref } from 'vue'
import { useRoute } from 'vue-router'
const menuList = ref([
  { name: 'Explore', path: '', hash: '' },
  { name: 'Marketplace', path: '', hash: '' },
  { name: 'Community', path: '', hash: '' },
  { name: 'Support', path: '', hash: '' },
  { name: 'My DApp', path: '/', hash: '#MyDapp' },
])

const route = useRoute()
</script>

<style lang="scss">
.tc {
  text-align: center;
}
.tr {
  text-align: right;
}
.flex {
  display: flex;
  .rest {
    flex: 1;
  }
  .half {
    width: 50%;
  }
}
.inner {
  width: 1100px;
  padding: 0 50px;
  margin: auto;
}
.btn {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  &:active {
    opacity: 0.8;
  }

  &.btn-01 {
    background-color: #453a99;
    color: #fff;
  }
  &.btn-02 {
    background-color: #1da1f3;
    color: #fff;
  }
}

.header {
  .inner {
    display: flex;
    justify-items: center;
    align-items: center;
    height: 80px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .logo {
    display: inline-block;
    width: 40px;
    height: 40px;
    img {
      max-width: 100%;
      height: 100%;
    }
  }
  .menu {
    flex: 1;
    text-align: left;
    padding: 0 35px;
    a {
      font-size: 18px;
      display: inline-block;
      padding: 5px 0;
      margin: 0 15px;
      border-bottom: 2px solid transparent;
      &.active,
      &:hover {
        border-bottom-color: #453a9a;
      }
    }
  }
}
.body {
  min-height: calc(100vh - 280px);
  box-sizing: border-box;
}
.footer {
  margin-top: 50px;
  .inner {
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid #f1f1f1;
  }
  .logo {
    width: 40px;
    height: 40px;
  }
  .right {
    .mail {
      label {
        display: block;
        font-size: 20px;
        margin-bottom: 10px;
      }
      input {
        height: 40px;
        width: 200px;
        background-color: #f1f3ff;
        padding: 5px 15px;
        border: none;
        outline: none;
      }
    }
  }
}
</style>
