<template>
  <div v-if="!isExtend" class="right-bar">
    <img draggable="false" :src="bingPic" />
  </div>
</template>
<script>
import logo from "@/assets/img/Wachsenburg.jpg";
export default {
  data(){
    return{
      bingPic:logo
    }
  },
  computed: {
    isExtend() {
      return this.$store.state.article.isExtendPost;
    }
  },
  mounted(){
    this.$axios.$get('/wallpapper').then(res => {
        this.bingPic=res?res.data[0].humanizeUrl:logo
    }).catch(err => {
       console.log(err);
    })
  }
};
</script>