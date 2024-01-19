<template>
  <!-- 导航 -->
  <van-nav-bar :title="title.title" left-arrow>
    <template #right>
      <van-icon name="ellipsis" size="18" />
    </template>
  </van-nav-bar>

  <div class="box">
    <van-icon name="shopping-cart-o" class="card" />
  </div>

  <!-- 表单 -->
  <van-form>
    <van-cell-group inset>
      <van-field v-model="query.loginName" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="query.passwordMd5" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
    </van-cell-group>
    <p @click="reg">立即注册</p>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" @click="login">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script lang="ts" setup>
import { loginApi, registerApi } from "@/api";
import { ref, reactive } from "vue";
import { ElMessageBox, ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-message-box.css';
import { useRouter } from 'vue-router';
const router = useRouter();
const title = reactive({
  title: "登录"
})
const query = reactive({
  loginName: '13239528199',
  passwordMd5: '123456'

})

// 注册
const reg = () => {
  router.push({ path: '/zuce' })

}

//登录
const login = () => {
  loginApi(query).then((res: any) => {
    console.log(res);
    if (res.resultCode == 500) {
      ElMessage({
        showClose: true,
        message: '恭喜您登录成功',
        type: 'success',
      })
      router.push('/admin')
    }
  })
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;

  .card {
    font-size: 200px;
    color: #0ea0b1;
  }
}

p {
  text-align: center;
}
</style>