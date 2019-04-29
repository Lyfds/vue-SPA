<template>
  <div class="lists">
    <div class="x-video">
      <video width="100%" height="160px" src="../../public/videos/github.mp4" controls="controls"></video>
    </div>

    <div class="jieshao">
        <h5>封神演义</h5>
        <p class="laiyuan">来源：网络</p>
        <p class="jianjie">
            <span style="text-indent:2em; word-break: break-all; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;">
                韩信一共拥有4款皮肤，除了白龙吟和逐梦之影必须用点券购买之外，
                其他两款皮肤从某种意义上来说都是免费兑换的。教廷特使是可以通过王者水晶兑换的，
                但是需要花钻石。而街头霸王是可以通过皮肤碎片兑换的，但是需要积攒碎片还要等街霸的上架。
            </span>
        </p>
        <div class="btns">
            <span class="xihuan">
                <van-icon id="xin" name="like-o" />
                喜欢
            </span>

            <span class="xihuan">
                <van-icon id="xin" name="like-o" />
                缓存
            </span>

            <span class="xihuan">
                <van-icon id="xin" name="share" />
                分享
            </span>
        </div>
    </div>

    <div class="xuanji">
        <div class="title">
            <h5 class="zz-Name">选集</h5>
            <p class="p1">
                <van-icon size="18px" name="arrow"></van-icon>
            </p>
        </div>
        <div class="ji">
            <div id="ji">
                <button v-for="(v,k) in 20" :key="k">{{v}}</button>
            </div>
        </div>
    </div>

    <div class="xgsp">
        <h5>推荐</h5>
        <div class="spName">
            <div  id="spImg">
                <img src="../assets/jstm.jpg" alt="">
            </div>
            <div class="wenzhang">
                <h4>哈哈哈</h4>
                <p class="zhuyan">
                    <span>规：划 / 和经 / 济</span>
                </p>
                <p class="lxing">
                    类型
                </p>
            </div>
        </div>
        
        <div class="spName">
            <div  id="spImg">
                <img src="../assets/jstm.jpg" alt="">
            </div>
            <div class="wenzhang">
                <h4>哈哈哈</h4>
                <p class="zhuyan">
                    <span>规：划 / 和经 / 济</span>
                </p>
                <p class="lxing">
                    类型
                </p>
            </div>
        </div>

        <div class="spName">
            <div  id="spImg">
                <img src="../assets/jstm.jpg" alt="">
            </div>
            <div class="wenzhang">
                <h4>哈哈哈</h4>
                <p class="zhuyan">
                    <span>规：划 / 和经 / 济</span>
                </p>
                <p class="lxing">
                    类型
                </p>
            </div>
        </div>

    </div>

  </div>
</template>

<script>
export default {};
</script>

<style>
.lists .x-video {
  position: fixed;
  border-bottom: 1px solid #ebedf0;
  background-color: #fff;
  z-index: 1;
}

.lists .jieshao {
    padding: 165px 0 0 0;
    border-bottom: 1px solid #ebedf0;
}

.lists .jieshao h5 {
    margin: 10px 0 10px 8px;
    font-size: 15px;
}

.lists .jieshao .laiyuan {
    margin: 0 0 5px 8px;
    font-size: 12px;
    color: #a2a2a2;
}

.lists .jieshao .jianjie {
    margin: 0 0 20px 8px;
    font-size: 12px;
    color: #a2a2a2;
}

.lists .jieshao .btns {
    margin: 0 0 10px 15px;
    font-size: 12px;
}

.lists .btns .xihuan {
    margin-right: 40px;
}

.lists .xihuan #xin {
    font-size: 17px;
    top: 3px;
}

.lists .xuanji {
    padding: 15px 0 15px 8px;
    border-bottom: 1px solid #ebedf0;
}

.lists .xuanji .title {
  height: 17px;
  margin-bottom: 9px;
}

.lists .title .zz-Name {
  float: left;
  margin: 0;
}

.lists .title .p1 {
  float: right;
  margin: -5px 0 0 0;
  font-size: 12px;
  color: #959595;
}

.lists .p1 .van-icon {
  top: 4px;
}

.lists .xuanji .ji {
    overflow-x: auto;
    width: 100%;
    height: 100%;
}

.lists .ji #ji {
    width: 50em;
    height: 100%;
}

.lists #ji button {
    width: 35px;
    height: 35px;
    border: 1px solid #f2f2f2;
    background-color: #f2f2f2;
    border-radius: 5px;
    margin-right: 5px;
    font-size: 12px;
}

.lists .xgsp {
    padding: 10px 0 0 8px;
}

.lists .xgsp h5 {
    margin: 0 0 10px 0;
}

.lists .xgsp .spName {
    height: 150px;
    margin-bottom: 5px;
}

.lists .spName #spImg {
    float: left;
    margin-right: 10px;
}

.lists #spImg img {
    width: 100px;
    height: 150px;
}

.lists .wenzhang h4 {
    margin: 2px 0 10px 0;
    font-size: 13px;
    color: #676767;
}

.lists .wenzhang .zhuyan {
    margin: 0 0 10px 0;
    font-size: 12px;
    color: #7d7d7d;
}

.lists .wenzhang .lxing {
    margin: 0;
    font-size: 12px;
    color: #7d7d7d;
}

</style>

