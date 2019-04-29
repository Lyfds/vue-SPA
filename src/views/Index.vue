<template>
  <div class="d1">
    <div class="rows">
      <van-row>
        <van-col span="22">
          <van-tabs>
            <van-tab v-for="(v,k) in cate" :key="k" :title="v"></van-tab>
          </van-tabs>
        </van-col>
        <van-col span="2">
          <van-icon id="sousuo" name="search"></van-icon>
        </van-col>
      </van-row>
    </div>
    
    <div class="lbt">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(v,k) in images" :key="k">
          <img class="lbImg" :src="v">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="list">
      <div class="title">
        <h5 class="zz-Name">最新热播剧</h5>
        <p class="p1">
          共90部
          <van-icon size="18px" name="arrow"></van-icon>
        </p>
      </div>
      <div class="lists">
        <div class="video">
          <van-row gutter="5">
            <van-col span="8">
              <router-link class="spImg" to="/list">
                <img src="../assets/buliangren.jpg" alt="">
                <p class="sInfo">
                  <span>更新至21集</span>
                </p>
              </router-link>
              <router-link to="/list">
                <p class="spName">画江湖之不良人</p>
              </router-link>
            </van-col>
            <van-col span="8">
              <a class="spImg" href="JavaScript:;">
                <img src="../assets/jstm.jpg" alt="">
                <p class="sInfo">
                  <span>更新至22集</span>
                </p>
              </a>
              <p class="spName">绝世唐门</p>
            </van-col>
            <van-col span="8">
              <a class="spImg" href="JavaScript:;">
                <img src="../assets/xbnzcq.jpg" alt="">
                <p class="sInfo">
                  <span>更新至24集</span>
                </p>
              </a>
              <p class="spName">新白娘子传奇</p>
            </van-col>
            <van-col span="8">
              <a class="spImg" href="JavaScript:;">
                <img src="../assets/hjtong.jpg" alt="">
                <p class="sInfo">
                  <span>56集全</span>
                </p>
              </a>
              <p class="spName">黄金瞳</p>
            </van-col>
            <van-col span="8">
              <a class="spImg" href="JavaScript:;">
                <img src="../assets/fsyy.jpg" alt="">
                <p class="sInfo">
                  <span>更新至16集</span>
                </p>
              </a>
              <p class="spName">封神演义</p>
            </van-col>
            <van-col span="8">
              <a class="spImg" href="JavaScript:;">
                <img src="../assets/zhaoyao.jpg" alt="">
                <p class="sInfo">
                  <span>56集全</span>
                </p>
              </a>
              <p class="spName">招摇</p>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>

    <div class="list">
      <div class="title">
        <h5 class="zz-Name">最新热播电影</h5>
        <p class="p1">
          共111部
          <van-icon size="18px" name="arrow"></van-icon>
        </p>
      </div>
      <div class="lists">
        <div class="video">
          <van-row gutter="5">
            <van-col span="8">
              <a class="spImg" href="JavaScript:;">
                <img src="../assets/fulian1.jpg" alt="">
              </a>
              <p class="spName">复仇者联盟</p>
            </van-col>
            <van-col span="8">
              <a class="spImg" href="JavaScript:;">
                <img src="../assets/fulian2.jpg" alt="">
              </a>
              <p class="spName">复仇者联盟2</p>
            </van-col>
            <van-col span="8">
              <a class="spImg" href="JavaScript:;">
                <img src="../assets/fulian3.jpg" alt="">
              </a>
              <p class="spName">复仇者联盟3</p>
            </van-col>
            <van-col span="8">
              <a class="spImg" href="JavaScript:;">
                <img src="../assets/X-zhanjing.jpg" alt="">
              </a>
              <p class="spName">X战警3</p>
            </van-col>
            <van-col span="8">
              <a class="spImg" href="JavaScript:;">
                <img src="../assets/yiren.jpg" alt="">
              </a>
              <p class="spName">蚁人2</p>
            </van-col>
            <van-col span="8">
              <a class="spImg" href="JavaScript:;">
                <img src="../assets/lvjvren.jpg" alt="">
              </a>
              <p class="spName">绿巨人2</p>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>

    <div class="list">
      <div class="title">
        <div class="zuozhe">
          <img src="../assets/zuozhe.webp" alt="">
          <h5>漫威超级英雄</h5>
        </div>
        <p class="p1">
          20部
          <van-icon size="18px" name="arrow"></van-icon>
        </p>
      </div>

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

        </van-row>
      </div>
      
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      cate: ["推荐", "电视剧", "电影", "美剧", "韩剧", "日剧", "综艺", "动漫"],
      images: [
        "/images/lbt-1.jpg",
        "/images/lbt-3.jpg",
        "/images/lbt-2.jpg"
      ]
    };
  }
};
</script>

<style>
.d1 .van-tabs__nav{
  background-color: transparent !important;
}

/* .van-tab--active {
  color: red;
} */

.d1 .van-tab {
  color: #fff !important;
}

.d1 .rows {
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  z-index: 2;
}

.d1 .van-col #sousuo {
  top: 8px;
  float: right;
  font-size: 25px;
  color: #fff;
}

.d1 .lbt {
  height: 200px;
  z-index: 1;
}

.d1 .lbt .lbImg {
  width: 100%;
  height: 200px;
}

.list {
  height: 100%;
}

.d1 .list .title {
  height: 30px;
  padding-top: 20px;
}

.d1 .title .zuozhe {
  float: left;
}

.d1 .zuozhe img {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 10px;
}

.d1 .zuozhe h5 {
  float: right;
  margin: 0 0 0 10px;
}

.d1 .title .zz-Name {
  float: left;
  margin: 0 0 0 10px;
}

.d1 .title .p1 {
  float: right;
  margin: -6px 0 0 0;
  font-size: 12px;
  color: #959595;
}

.d1 .p1 .van-icon {
  top: 4px;
}

.d1 .list .lists {
  margin-top: -10px;
}

.d1 .lists .video {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}

.d1 .video .van-col {
  margin-top: 10px;
}

.d1 .van-col .spImg {
  display: block;
  width: 100%;
  height: 150px;
}

.d1 .spImg img {
  width: 100%;
  height: 100%;
}

.d1 .spImg .sInfo {
  margin: -28px 0 0 8px;
  font-size: 10px;
  color: #f3f3f3;
}

.d1 .van-col .spName {
  margin: 0;
  text-align: center;
  padding-top: 10px;
  font-size: 10px;
  color: #000;
}

.d1 .list .img-list {
  overflow-x: auto;
  width: 100%;
  height: 100%;
}

.d1 .img-list .ul {
  width: 50rem;
  height: 100%;
}

.d1 .img-list .ul .li {
  height: 186px;
}
</style>
