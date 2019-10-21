<template>
  <div v-if="!isExtend" class="right-bar" ><img draggable="false" :src="bingPic?bingPic[0].humanizeUrl:defaultPic" ></div>
</template>
<script>
import logo from "@/assets/img/logo.jpg"
export default {
  computed: {
    isExtend() {
      return this.$store.state.article.isExtendPost;
    },
    bingPic() {
      return this.$getBingPic()&&this.$getBingPic().success?this.$getBingPic().data:null
    },
    defaultPic(){
      return logo
    }
  }
};
</script>