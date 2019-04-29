<template>
    <div class="main">
        <router-view></router-view>

        <footer>
            <van-tabbar v-model="active">
                <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
                <van-tabbar-item icon="apps-o" to="/haokan">好看</van-tabbar-item>
                <van-tabbar-item icon="share" to="/faxian">发现</van-tabbar-item>
                <van-tabbar-item icon="contact" to="/wode">我的</van-tabbar-item>
            </van-tabbar>
        </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // active: 0
    };
  },
  computed: {
    active: {
      get: function() {
        if(this.$route.path == '/')
          return 0
        else if(this.$route.path == '/haokan')
        return 1
        else if(this.$route.path == '/faxian')
        return 2
        else if(this.$route.path == '/wode')
        return 3
      },
      set: function(val) {
        
      }
    }
  }
};
</script>

<style>
  footer {
    height: 50px;
  }
</style>