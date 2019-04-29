<template>
  <div class="wode">
    <div class="top">
      <van-row>
        <van-col span="20">
          <router-link to="/login">
            <img class="txImg" src="../assets/touxiang.png" alt="">
            <div class="title">
              <h5>点击登录</h5>
              <p>别做吃瓜群众，快点登录吧~</p>
            </div>
          </router-link>
        </van-col>
        <van-col span="4">
          <van-icon id="shezhi" name="setting"></van-icon>
        </van-col>
      </van-row>
    </div>
    <div class="lists-1">
      <router-link to="">
        <div class="gongneng">
          <van-row class="rows">
            <van-col id="cols" span="22">
              <h5>离线缓存</h5>
            </van-col>
            <van-col id="cols" span="2">
              <van-icon name="arrow"></van-icon>
            </van-col>
          </van-row>
        </div>
      </router-link>

      <router-link to="">
        <div class="gongneng">
          <van-row class="rows">
            <van-col id="cols" span="22">
              <h5>观看历史</h5>
            </van-col>
            <van-col id="cols" span="2">
              <van-icon name="arrow"></van-icon>
            </van-col>
          </van-row>
          
          <div class="img-list">
            <van-row class="ul" gutter="5">

              <van-col class="li" span="3">
                <a class="spImg" href="JavaScript:;">
                  <img src="../assets/jstm.jpg" alt="">
                </a>
                <p class="spName">哈哈</p>
              </van-col>

              <van-col class="li" span="3">
                <a class="spImg" href="JavaScript:;">
                  <img src="../assets/jstm.jpg" alt="">
                </a>
                <p class="spName">哈哈</p>
              </van-col>

              <van-col class="li" span="3">
                <a class="spImg" href="JavaScript:;">
                  <img src="../assets/jstm.jpg" alt="">
                </a>
                <p class="spName">哈哈</p>
              </van-col>

              <van-col class="li" span="3">
                <a class="spImg" href="JavaScript:;">
                  <img src="../assets/jstm.jpg" alt="">
                </a>
                <p class="spName">哈哈</p>
              </van-col>

              <van-col class="li" span="3">
                <a class="spImg" href="JavaScript:;">
                  <img src="../assets/jstm.jpg" alt="">
                </a>
                <p class="spName">哈哈</p>
              </van-col>

              <van-col class="li" span="3">
                <a class="spImg" href="JavaScript:;">
                  <img src="../assets/jstm.jpg" alt="">
                </a>
                <p class="spName">哈哈</p>
              </van-col>

              <van-col class="li" span="3">
                <a class="spImg" href="JavaScript:;">
                  <img src="../assets/jstm.jpg" alt="">
                </a>
                <p class="spName">哈哈</p>
              </van-col>

              <van-col class="li" span="3">
                <a class="spImg" href="JavaScript:;">
                  <img src="../assets/jstm.jpg" alt="">
                </a>
                <p class="spName">哈哈</p>
              </van-col>

            </van-row>
          </div>

        </div>
      </router-link>

      <router-link to="">
        <div class="gongneng">
          <van-row class="rows">
            <van-col id="cols" span="22">
              <h5>我喜欢的</h5>
            </van-col>
            <van-col id="cols" span="2">
              <van-icon name="arrow"></van-icon>
            </van-col>
          </van-row>
        </div>
      </router-link>

      <router-link to="">
        <div class="gongneng">
          <van-row class="rows">
            <van-col id="cols" span="22">
              <h5>推荐应用</h5>
            </van-col>
            <van-col id="cols" span="2">
              <van-icon name="arrow"></van-icon>
            </van-col>
          </van-row>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .top {
    height: 150px;
    background-color: #545f61;
  }

  .top .van-row {
    padding-top: 43px;
  }

  .wode .van-row .van-col {
    height: 60px;
  }

  .van-col .txImg {
    float: left;
    width: 60px;
    height: 60px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .van-col .title {
    float: left;
  }

  .wode .title h5 {
    margin: 10px 0 8px 0;
    color: #fff;
  }

  .title p {
    margin: 0;
    color: #eee;
    font-size: 10px;
  }

  .van-col #shezhi {
    top: 17px;
    font-size: 20px;
    color: #fff;
    left: 15px;
  }

  .lists-1 {
    height: 100%;
  }

  .lists-1 .gongneng {
    border-bottom: 1px solid #ebebeb;
  }

  .gongneng .rows {
    height: 100%;
  }

  .rows #cols {
    height: 100%;
    padding: 11px 0 12px 0;
  }

  .gongneng h5 {
    margin: 0 0 0 10px;
    float: left;
    color: #111;
  }

  .gongneng .van-icon {
    float: right;
    font-size: 15px;
    color: #888;
    margin: 0 7px 0 0;
  }

  .gongneng .img-list {
    overflow-x: auto;
    width: 100%;
    height: 100%;
  }

  .wode .img-list .ul {
    width: 50rem;
    height: 100%;
  }

  .wode .img-list .ul .li {
    height: 186px;
  }

  .wode .li .spImg {
    display: block;
    width: 100%;
    height: 150px;
  }

  .wode .spImg img {
    width: 100%;
    height: 100%;
  }

  .wode .li .spName {
    margin: 0;
    text-align: center;
    padding-top: 10px;
    font-size: 10px;
  }
  
</style>

