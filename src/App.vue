<template>
  <div class="app">
    <div class="header">
      <div class="inner">
        <img class="logo" src="./assets/logo.jpg" alt="" />
        <div class="menu">
          <a href="#">Explore</a>
          <a href="#">Marketplace</a>
          <a href="#">Community</a>
          <a href="#">Support</a>
          <a href="#">My DApp</a>
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
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss">
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
  width: 1200px;
  margin: auto;
  max-width: 100%;
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
    box-sizing: border-box;
    height: 80px;
    padding: 10px 0;
  }
  .logo {
    width: 40px;
    height: 40px;
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
      &:hover {
        border-bottom-color: #453a9a;
      }
    }
  }
}

.footer {
  margin-top: 100px;
  .inner {
    padding: 30px 0;
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
