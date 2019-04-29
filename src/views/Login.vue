<template>
  <div class="login">
    <div class="rows">
      <van-row id="rows">
        <van-col class="ssk" span="22">
          <h4>手机快捷登录</h4>
        </van-col>
        <van-col class="guanbi" span="2">
          <router-link to="/wode">
            <van-icon name="cross"/>
          </router-link>
        </van-col>
      </van-row>
    </div>

    <div class="form">
      <div class="srk">
          <div class="phone">
            <van-field placeholder="手机号码" />
          </div>
          <div class="phone">
            <van-field placeholder="输入验证码" />
            <van-button id="yzm" size="mini">获取验证码</van-button>
          </div>
          <div class="phone">
            <van-button class="dlBtn" round type="danger">登录</van-button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login .rows {
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #ebedf0;
}

.login .rows #rows {
  padding-top: 15px;
}

.login #rows .ssk {
  height: 25px;
}

.login .ssk h4 {
  margin: 0;
  text-align: center;
  font-size: 13px;
}

.login .guanbi .van-icon {
  color: #888;
}

.login .form {
  width: 100%;
  height: 100%;
}

.login .form .srk {
    margin: 35px 0 0 0;
}

.login .srk .phone {
    margin: 0 20px 15px 20px;
}

.login .phone .van-field {
    height: 35px;
    padding: 5px 15px;
    border: 1px solid #ebedf0;
    border-radius: 20px;
}

.login .phone #yzm {
    float: right;
    bottom: 29px;
    right: 10px;
    border: none;
}

.login .phone .dlBtn {
    width: 100%;
    height: 35px;
    margin-top: -10px;
    color: #000;
    background-color: #f9d80d;
    border: 1px solid #f9d80d;
    line-height: 35px;
}

</style>
