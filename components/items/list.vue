<template>
  <div>
    <transition name="fade" mode="out-in">
      <transition-group key="list" name="fade" tag="div" v-if="articles && articles.length">
        <card :key="article._id" :article="article" v-for="article in articles" />
      </transition-group>
      <div class="contents" v-else></div>
    </transition>
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