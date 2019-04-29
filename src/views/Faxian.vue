<template>
  <div class="faxian">
    <div class="rows">
      <van-row id="rows">
        <van-col class="ssk" span="24">
          <div class="neirong">
            <van-icon id="sousuo" name="search"></van-icon>
            榜单
          </div>
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
      <div class="img-list">
        <van-row class="ul" gutter="5">

          <van-col class="li" span="2">
            <a class="spImg" href="JavaScript:;">
              <img src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spName">哈哈</p>
          </van-col>

          <van-col class="li" span="2">
            <a class="spImg" href="JavaScript:;">
              <img src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spName">哈哈水电费规划局</p>
          </van-col>

          <van-col class="li" span="2">
            <a class="spImg" href="JavaScript:;">
              <img src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spName">哈哈</p>
          </van-col>

          <van-col class="li" span="2">
            <a class="spImg" href="JavaScript:;">
              <img src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spName">哈哈水电费规划局</p>
          </van-col>

          <van-col class="li" span="2">
            <a class="spImg" href="JavaScript:;">
              <img src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spName">哈哈</p>
          </van-col>

          <van-col class="li" span="2">
            <a class="spImg" href="JavaScript:;">
              <img src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spName">哈哈水电费规划局</p>
          </van-col>

          <van-col class="li" span="2">
            <a class="spImg" href="JavaScript:;">
              <img src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spName">哈哈</p>
          </van-col>

          <van-col class="li" span="2">
            <a class="spImg" href="JavaScript:;">
              <img src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spName">哈哈水电费规划局</p>
          </van-col>

          <van-col class="li" span="2">
            <a class="spImg" href="JavaScript:;">
              <img src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spName">哈哈</p>
          </van-col>

          <van-col class="li" span="2">
            <a class="spImg" href="JavaScript:;">
              <img src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spName">哈哈水电费规划局</p>
          </van-col>

        </van-row>
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

      <div class="img-list1">
        <van-row class="ul1" gutter="5">
          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
          </van-col>

          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
          </van-col>

          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
          </van-col>

          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
          </van-col>

          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
          </van-col>

          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
          </van-col>

        </van-row>
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

      <div class="img-list1">
        <van-row class="ul1" gutter="5">
          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
          </van-col>

          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
          </van-col>

          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
          </van-col>

          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
          </van-col>

          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
          </van-col>

          <van-col class="li1" span="3">
            <a class="spImg1" href="JavaScript:;">
              <img id="image" src="../assets/jstm.jpg" alt="">
            </a>
            <p class="spNames">哈哈</p>
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
.faxian .van-tabs__nav {
  background-color: transparent !important;
}

.faxian .rows {
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  z-index: 2;
}

.faxian .rows #rows {
  padding-top: 10px;
}

.faxian #rows .ssk {
  height: 25px;
  padding: 0 15px;
}

.faxian .ssk .neirong {
  background: rgba(0, 0, 0, 0.5);
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 20px;
  color: #cdcdcd;
  font-size: 10px;
}

.faxian .ssk #sousuo {
  top: 2px;
}

.faxian .lbt {
  height: 200px;
  z-index: 1;
}

.faxian .lbt .lbImg {
  width: 100%;
  height: 200px;
}

.list {
  height: 100%;
}

.faxian .list .img-list {
  overflow-x: auto;
  width: 100%;
  height: 100%;
}

.faxian .img-list .ul {
  width: 50rem;
  height: 100%;
  border-bottom: 1px solid #ebedf0;
}

.faxian .img-list .ul .li {
  padding-left: 12.5px !important;
  margin-bottom: 10px;
}

.faxian .van-col .spImg {
  display: block;
  padding-top: 10px;
} 

.faxian .spImg img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 0 0 0;
}

.faxian .van-col .spName {
  width: 100%;
  height: 16px;
  text-align: center;
  font-size: 10px;
  margin: 0;
  overflow: hidden;
}

.faxian .list .title {
  height: 30px;
  padding-top: 20px;
}

.faxian .title .zuozhe {
  float: left;
}

.faxian .zuozhe img {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 10px;
}

.faxian .zuozhe h5 {
  float: right;
  margin: 0 0 0 10px;
}

.faxian .title .zz-Name {
  float: left;
  margin: 0 0 0 10px;
}

.faxian .title .p1 {
  float: right;
  margin: -6px 0 0 0;
  font-size: 12px;
  color: #959595;
}

.faxian .van-icon {
  top: 4px;
}

.faxian .list .img-list1 {
  overflow-x: auto;
  width: 100%;
  height: 100%;
}

.faxian .img-list1 .ul1 {
  width: 50rem;
  height: 100%;
}

.faxian .img-list1 .ul1 .li1 {
  height: 176px;
}

.faxian .li1 .spImg1 {
  display: block;
  width: 100%;
  height: 150px;
}

.faxian .spImg1 #image {
  width: 100%;
  height: 100%;
}

.faxian .li1 .spNames {
  margin: 0;
  text-align: center;
  padding-top: 10px;
  font-size: 10px;
}

</style>

