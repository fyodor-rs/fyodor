<template>
  <div class="article">
    <div class="article-content" >
    <h4>
      {{content.title?content.title:''}}
      <!-- <i
        @click="exendPost()"
        :class="[isExtend?'fa fa-chevron-left fa-fw':'fa fa-chevron-right fa-fw']"
      ></i> -->
    </h4>
    <div class="article-content-body braft-output-content" v-changeHtml="content.htmlContent?content.htmlContent:''"></div>
    <share></share>
    <comment></comment>
  </div>
  
  </div>
</template>
<script>
import { mapState } from "vuex";
import share from "@/components/widgets/share"
import comment from "@/components/items/comment"
export default {
  components:{
    share,
    comment
  },
  fetch({ store, params }) {
    return store.dispatch("article/getArticleContent", { id: params.id });
  },
  methods: {
    exendPost() {
      this.$store.commit("article/changeExendPost", !this.isExtend);
    }
  },
  beforeRouteLeave(to,from,next){
     this.$store.commit("article/changeExendPost", false);
     next()
  },
  computed: {
    content() {
      return this.$store.state.article.content;
    },
    ...mapState({
      isExtend: state => state.article.isExtendPost
    })
  },
  directives: {
    changeHtml: (el, binding) => {
      el.innerHTML = binding.value;
    }
  }
};
</script>
<style lang="scss" >
.article{
  width: 100%;
  .article-content {
  width: 100%;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  // border-radius: 10px;
  background-color: rgb(243, 243, 243);
  @include css3-prefix(transition, width 0.5s);
  h4 {
    text-align: center;
    margin-bottom: 1rem;
    font-family: "SourceHanSansCN";
  }
  i {
    position: relative;
    font-size: 0.5rem;
    float: right;
    margin-top: 0.5rem;
    margin-right: -1rem;
    cursor: pointer;
  }
  .article-content-body {
    //单词断句
    //  word-wrap:break-word;
    word-break:break-all;//推荐，简单粗暴
    // overflow: hidden;
    text-overflow: ellipsis;//超过文本显示...
    // white-space:nowrap;强制不换行
    line-height: 2rem;
    font-size: 0.9rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
      "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    video,iframe{
      width: 100%;
    };
    iframe{
       height: 400px;
    };
    img{
      width: 100% !important;
      height: 300px !important;
    }
  }
}
}

</style>