<template>
  <article-list :articles="articles" />
</template>
<script>
import ArticleList from "../components/items/list";
export default {
  async fetch({ store }) {
    await store.dispatch("article/getArticleList");
  },
  data() {
    return {};
  },
  components: {
    ArticleList
  },
  computed: {
    articles() {
      return this.$store.state.article.list;
    }
  }
};
</script>