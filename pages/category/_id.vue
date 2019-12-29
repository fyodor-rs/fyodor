<template>
  <article-list :articles="articles" />
</template>
<script>
import articleList from "@/components/items/list";
export default {
   fetch({ store,params }) {
     return  store.dispatch("article/getArticleList",{category:params.id});
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