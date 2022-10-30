<template>
  <div class="body">
    <div class="inner">
      <div class="flex">
        <ul class="menu">
          <li class="item" v-for="item in menuList">
            <i :class="['iconfont', item.icon]"></i>
            <span>{{ item.name }}</span>
          </li>
        </ul>

        <div class="rest" style="background-color: #d9f8fd">
          <div class="flex">
            <img class="nft-img" src="../assets/img-001.jpg" alt="" />
            <div class="rest nft-box">
              <div style="width: 100%">
                <div class="title">
                  <h3>Your Artwork Name</h3>
                  <p>10,000 NFTs</p>
                </div>
                <div class="flex">
                  <label>Remaining</label>
                  <span class="rest"></span>
                  <span>4583 / 10,000</span>
                </div>
                <div class="flex">
                  <label>Price</label>
                  <span class="rest"></span>
                  <span>0.07 ETH</span>
                </div>
                <div class="flex">
                  <label>Quantity</label>
                  <div class="num">
                    <i @click="buyNum <= 1 ? buyNum : buyNum--">➖</i>
                    <input type="number" aria-controls="none" min="1" v-model="buyNum" />
                    <i @click="buyNum++">➕</i>
                  </div>
                  <span>Max 5</span>
                </div>
                <div class="flex">
                  <label>Total</label>
                  <span class="rest"></span>
                  <span>Total</span>
                </div>
                <label class="checkbox">
                  <input type="checkbox" />
                  <span>Stake NFTs now</span>
                </label>
                <button class="btn btn-01">Mint Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const menuList = ref([
  { name: 'Minting', path: '/#mydapp', hash: '', icon: 'icon-liwuhuodong' },
  { name: 'China Data', path: '/#mydapp', hash: '', icon: 'icon-shujukanban' },
  { name: 'Reward', path: '/#mydapp', hash: '', icon: 'icon-huizhang' },
  { name: 'Token Info', path: '/#mydapp', hash: '', icon: 'icon-info' },
  { name: 'Token list', path: '/#mydapp', hash: '', icon: 'icon-qingdan' },
])

const buyNum = ref(1)
</script>

<style scoped lang="scss">
.body {
  padding-top: 30px;
}
.menu {
  width: 170px;
  margin-right: 30px;
  .item {
    display: block;
    padding: 8px 15px;
    margin-bottom: 10px;
    cursor: pointer;
    .iconfont {
      margin-right: 10px;
    }
    &:hover {
      background-color: #453a9a;
      color: #fff;
    }
  }
}
.nft-img {
  max-width: 50%;
  max-height: 400px;
}
.nft-box {
  display: flex;
  justify-content: center;
  padding: 30px;
  .flex {
    padding: 10px 0;
    border-bottom: 1px solid #748898;
  }
  .title {
    text-align: center;
    h3 {
      font-weight: bold;
      font-size: 20px;
    }
  }
  .num {
    flex: 1;
    text-align: center;
    margin: -10px 0;
    user-select: none;
    i {
      cursor: pointer;
      padding: 15px;
    }
    input {
      text-align: center;
      width: 100px;
      height: 100%;
      border: none;
      outline: none;
      padding: 5px;
      border-left: 1px solid #748898;
      border-right: 1px solid #748898;
      background-color: transparent;
      font-size: inherit;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      -moz-appearance: textfield;
    }
  }
  .checkbox {
    display: inline-block;
    margin: 10px 0;
    input {
      margin-right: 5px;
    }
  }

  .btn {
    width: 100%;
    display: block;
    margin-top: 20px;
  }
}
</style>
