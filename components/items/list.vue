<template>
  <div>
    <card 
     :key="article.id" 
     :article="article"
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
       console.log(article._id);
       this.$router.push(`/article/${article._id}`)
     }    
  }
};
</script>