<template>
  <div>
    <card 
     :key="article.id" 
     :article="article"
     @click="toDetail(article)" 
     v-for="article in articles" 
     />
  </div>
</template>
<script>
import card from "./card";
export default {
  mounted() {
    console.log(this.articles);
  },
  components: {
    card
  },
  props: {
    articles: {
      type: Array
    }
  },
  methods:{
     toDetail(article){
       this.$router.push(`/article/${article.id}`)
     }    
  }
};
</script>