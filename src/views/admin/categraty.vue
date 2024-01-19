<template>
  分类
  <van-tabbar route>
        <van-tabbar-item replace to="/admin" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/categraty" icon="point-gift-o">分类</van-tabbar-item>
        <van-tabbar-item replace to="/shop" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

</script>

<style lang="scss" scoped></style>