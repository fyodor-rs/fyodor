<template>
  <div class="article-content">
    <h4>{{content.title}}</h4>
    <div class="article-content-body" v-html="content.htmlContent"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  fetch({ store, params }) {
    return store.dispatch("article/getArticleContent", { id: params.id });
  },
  computed: {
    content() {
      return this.$store.state.article.content.data;
    },
    ...mapState({
      fetching: state => state.article.content.fetching
    })
  }
};
</script>