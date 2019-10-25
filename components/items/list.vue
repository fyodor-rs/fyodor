<template>
  <div>
    <!-- <transition name="fade" mode="out-in"> -->
      <!-- <transition-group key="list" name="fade" tag="div"> -->
        <card :key="article._id" :article="article" v-for="article in articles" />
      <!-- </transition-group> -->
      <!-- <div  class="emptyText" v-else></div> -->
    <!-- </transition> -->
  </div>
</template>
<script>
import card from "./card";
export default {
  components: {
    card
  },
  props: {
    articles: {
      type: Array
    }
  },
  methods: {
    toDetail(article) {
      this.$router.push(`/article/${article._id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.emptyText{
     width: 100%;
     text-align: center;
     background-color: white;
     font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
</style>