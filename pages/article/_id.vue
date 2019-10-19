<template>
  <div class="article-content" :style="{width:isExtend?52.7+'em':38+'em'}">
       <h4>
      {{content.title}}
      <i
        @click="exendPost()"
        :class="[isExtend?'fa fa-chevron-left fa-fw':'fa fa-chevron-right fa-fw']"
      ></i>
    </h4>
    <div class="article-content-body braft-output-content" v-changeHtml="content.htmlContent"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  fetch({ store, params }) {
    return store.dispatch("article/getArticleContent", { id: params.id });
  },
  methods: {
    exendPost() {
      this.$store.commit("article/changeExendPost", !this.isExtend);
    }
  },
  watch:{
   $route(){
    this.$store.commit("article/changeExendPost", false);
   }
  },
  computed: {
    content() {
      return this.$store.state.article.content.data;
    },
    ...mapState({
      fetching: state => state.article.content.fetching,
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
.article-content {
  width: 100%;
  padding: 1.5em 2.5em;
  box-sizing: border-box;
  background-color: white;
  transition: width 0.5s;
  h4 {
    text-align: center;
    margin-bottom: 1em;
  }
  i {
    position: relative;
    font-size: 0.5em;
    float: right;
    margin-top: 0.5em;
    margin-right: -2em;
    cursor: pointer;
  }
  .article-content-body {
    //  word-wrap:break-word;
    // word-break:break-word;
    // overflow: hidden;
    // text-overflow: ellipsis
    // white-space:nowrap;强制不换行
    line-height: 2em;
    font-size: 0.9em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
      "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
}
</style>