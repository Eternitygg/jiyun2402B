<template>
    <div class="header">
        <van-icon name="wap-nav" size="30" color="#0f9ca6"/>
        <p style="font-size: 25px; font-weight: bold; color:#0f9ca6 ;">新密商城</p>
        |
        <p>山河无恙,人间接案</p>
        <van-icon name="contact" size="30" color="#0f9ca6" />
    </div>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item, index in swiplist" :key="index">
            <img :src="item.carouselUrl" alt="">
        </van-swipe-item>
    </van-swipe>


    <h2>新品上线</h2>
    <ul class="center">
        <li v-for="item, index in list" :key="index">
            <img :src="item.goodsCoverImg" alt="">
            <p>{{ item.goodsName }}</p>
            <div class="price">{{ item.sellingPrice }}</div>
        </li>
    </ul>
    <van-tabbar route>
        <van-tabbar-item replace to="/admin" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/categraty" icon="point-gift-o">分类</van-tabbar-item>
        <van-tabbar-item replace to="/shop" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
</template>

<script lang="ts" setup>
import { getIndexDataApi } from "@/api";
import { ref, reactive } from "vue";


const list = ref<any[]>([])
const swiplist = ref<any[]>([])
const getlist = () => {
    getIndexDataApi().then((res: any) => {
        console.log(res);
        list.value = res.data.recommendGoodses
        swiplist.value = res.data.carousels
    })
}
getlist()
</script>

<style lang="scss" scoped>
h2 {
    text-align: center;
    color: #328e9f;
    background-color: #f9f9f9;
    line-height: 80px;
}

.center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
        width: 48%;
        text-align: center;

        img {
            width: 150px;
            height: 150px;
        }
    }
}

.van-swipe {
    width: 100vw;
    height: 400px;

    .van-swipe-item {
        width: 100vw;
        height: 400px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}

.header{
    display: flex;
    align-items: center;
    line-height: 60px;
    justify-content: space-between;
    padding: 0 20px;
}
</style>