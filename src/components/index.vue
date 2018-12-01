<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <li v-for="(item,inde) in catelist" :key="item.id">
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>{{item.title}}</span>
                    <p>
                      <span v-for="(it,n) in item.subcates " :key="it.id">{{it.title}}&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">{{item.title}}</a>
                      </dt>
                      <dd>
                        <a
                          v-for="(it,n) in item.subcates"
                          :key="it.id"
                          href="/goods/43.html"
                        >{{it.title}}</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            
            <div class="banner-img">
             <el-carousel height="341px">
              <el-carousel-item v-for="item in sliderlist" :key="item.id">
                <img :src="item.img_url" alt="">
              </el-carousel-item>
            </el-carousel>
            </div>
          </div>
          <!--/幻灯片-->
          <div class="left-220">
            <ul v-for="(item,index) in toplist" :key="item.id" class="side-img-list">
              <li>
                <div class="img-box">
                  <label>{{index+1}}</label>
                  <img :src="item.img_url">
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">{{item.title}}</a>
                  <span>{{item.add_time | shortTime }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(item,index) in goodsList" :key="item.level1cateid" class="section">
      <div class="main-tit">
        <h2>{{item.catetitle}}</h2>
        <p>
          <a v-for="(it,n) in item.level2catelist" :key="it.subcateid" href="/goods/43.html">{{it.subcatetitle}}</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul  class="img-list">
            <li v-for="(it,n) in item.datas" :key="it.artID">
              <!-- <a href="#/site/goodsinfo/87" class> -->
              <router-link :to="'/detail/'+it.artID">
                <div class="img-box">
                  <img
                    :src="it.img_url"
                  >
                </div>
                <div class="info">
                  <h3>{{it.artTitle}}</h3>
                  <p class="price">
                    <b>{{it.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{it.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{it.market_price}}</s>
                    </span>
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data: function() {
    return {
      catelist: [],
      sliderlist: [],
      toplist: [],
      goodsList:[],
    };
  },
  created() {
    this.$axios.get(`site/goods/gettopdata/goods`).then(result => {
    //   console.log(result);
      this.catelist = result.data.message.catelist;
      this.sliderlist = result.data.message.sliderlist;
      this.toplist = result.data.message.toplist;
    });
    this.$axios.get(`site/goods/getgoodsgroup`).then(result=>{
        console.log(result);
        this.goodsList=result.data.message;

    })
  }
};
</script>
<style >
    .banner-img img{
        width: 100%;
        height: 100%;
    }
</style>
