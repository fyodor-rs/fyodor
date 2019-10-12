<template>
  <article-list :articles="articles" />
</template>
<script>
import ArticleList from "@/components/items/list";
export default {
   fetch({ store,params }) {
     return  store.dispatch("article/getArticleList",{category:params.id});
  },
  components: {
    ArticleList
  },
  computed: {
    articles() {
      return this.$store.state.article.list.data;
    }
  }
};
</script>