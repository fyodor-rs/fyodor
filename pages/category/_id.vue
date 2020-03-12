<template>
  <article-list v-if="articles&&articles.length" :articles="articles" />
  <div v-else-if="!articles" class="emptyDiv">该板块暂未开放，敬请期待。</div>
  <div v-else class="emptyDiv">空空如也...</div>
</template>
<script>
import articleList from "@/components/items/list";
export default {
  fetch({ store, params }) {
    return store.dispatch("article/getArticleList", { category: params.id });
  },
  components: {
    articleList
  },
  beforeRouteUpdate (to, from, next) {
    const plateList = ["note", "life"];
    if (!plateList.includes(to.params.id)) {
      this.articles=null
    }
    next();
  },
  computed: {
    articles: {
      get: function() {
        return this.$store.state.article.list;
      },
      set: function(newValue) {
        this.$store.commit('article/updateList',newValue);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.emptyDiv{
  background-color: rgba(243, 243, 243,0.5);
  font-family: "SourceHanSansCN";
  width: 100%;
  height: 3em;
  text-align: center;
  line-height: 3em;
  font-size: 0.8em;
}
</style>