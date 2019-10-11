<template>
  <div class="article-content">
      <h4>{{content.title}}</h4>
    <div class="article-content-body" v-html="content.htmlContent"></div> 
  </div>
</template>
<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch('article/getArticleContent',{id:params.id});
  },
  props: {
    id: String
  },
  computed:{
      content(){
       return this.$store.state.article.content
      }
  }
};
</script>