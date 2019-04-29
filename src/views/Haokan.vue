<template>
  <div class="haokan">
    <div class="rows">
      <van-row>
        <van-col span="22">
          <van-tabs>
            <van-tab v-for="(v,k) in cate" :key="k" :title="v"></van-tab>
          </van-tabs>
        </van-col>
        <van-col span="2">
          <div class="tubiao">
            <van-icon id="sousuo" name="search"></van-icon>
          </div>
        </van-col>
      </van-row>
    </div>
    
    <div class="xsp">
      <van-pull-refresh id="lists" v-model="isLoading" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">

          <van-cell v-for="(item,k) in list" :key="k">
            <div class="x-video">
              <video width="100%" height="150px" :src="item.url" controls="controls"></video>
              <div class="jieshao">
                <h4>{{item.title}}</h4>
                <van-icon class="fenxiang" name="share" />
                <p class="leixing" v-for="(v,t) in item.types" :key="t">
                  <span>{{item.types[t]}}</span>
                </p>
              </div>
            </div>
          </van-cell>
          
        </van-list>
      </van-pull-refresh>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      cate: [
        "推荐", "搞笑", "剧情", "预告", "混剪", "生活", "美食", "萌宠", "游戏", "时尚", "音乐", "综艺",
        "创意", "爱情", "旅行", "科技", "记录", "运动", "励志", "汽车", "动画", "广告", "其他"
      ],
      list: [
        {
          url: "../../videos/github.mp4",
          title: "白日梦想家：旅行是人生的万能治愈剂",
          types: ["#音乐"]
        },
        {
          url: "../../videos/github.mp4",
          title: "白能治愈剂",
          types: ["#音乐", "#吃饭"]
        },
        {
          url: "../../videos/github.mp4",
          title: "白能治愈剂12",
          types: ["#音乐", "#吃饭"]
        },
      ],
      isLoading: false,
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
    },

    onRefresh() {
      setTimeout(() => {
        // this.list = [];
        this.isLoading = false;
        this.finished = false;
      }, 1000);
    }

  }
};
</script>

<style>
.haokan .rows {
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  z-index: 2;
}

.haokan .van-col .tubiao {
  height: 44px;
  background-color: #fff;
}

.haokan .tubiao #sousuo {
  top: 8px;
  float: right;
  font-size: 25px;
}

.haokan .xsp {
  width: 100%;
  height: 100%;
}

.haokan .xsp #lists {
  margin-top: 44px;
}

.haokan #lists .van-cell:not(:last-child)::after {
  border: none;
}

.haokan #lists .x-video {
  width: 100%;
  height: 215px;
  border-bottom: 1px solid #9e9e9e;
}

.haokan .jieshao h4 {
  margin: 0;
}

.haokan .jieshao .fenxiang {
  margin: -5px 0 0 0;
  float: right;
  font-size: 15px;
}

.haokan .jieshao .leixing {
  float: left;
  margin: 0 5px 0 0;
  color: #666;
  font-size: 10px;
}

.haokan .leixing span {
  margin: 0 0 0 -1px;
}

</style>
