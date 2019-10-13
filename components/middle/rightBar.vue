<template>
  <div v-if="!isExtend" class="right-bar" ><img :src="bingPic?bingPic[0].humanizeUrl:''" ></div>
</template>
<script>
export default {
  computed: {
    isExtend() {
      return this.$store.state.article.isExtendPost;
    },
    bingPic() {
      return this.$getBingPic()&&this.$getBingPic().success?this.$getBingPic().data:null
    }
  }
};
</script>