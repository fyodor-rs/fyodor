<template>
    <div v-if="!articles" class="emptyDiv">该板块暂未开放，敬请期待。</div>
    <article-list v-else-if="articles.length" :articles="articles" />
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
  computed: {
    articles() {
      return this.$store.state.article.list;
    }
  }
};
</script>
<style lang="scss" scoped>
.emptyDiv {
  background-color: rgba(243, 243, 243, 0.5);
  font-family: "SourceHanSansCN";
  width: 100%;
  height: 3em;
  text-align: center;
  line-height: 3em;
  font-size: 0.8em;
}
</style>