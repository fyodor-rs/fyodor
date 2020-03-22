<template>
  <div>
    <!-- <transition name="fade" mode="out-in"> -->
    <!-- <transition-group key="list" name="fade" tag="div"> -->
      <diV class="lantern"></div>
    <card :key="article._id" :article="article" v-for="article in articles" />
    <div class="paging">
      <button class="button">
        <i class="fa fa-envira fa-fw"></i>
        <span class="button-word"><span>加载更多</span></span>
      </button>
    </div>
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
.emptyText {
  width: 100%;
  text-align: center;
  background-color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.lantern{
  width: 100%;
  height: 15rem;
  background-color: gray;
  margin-bottom: 1rem;
}
.paging {
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  button {
    width: 100%;
    background-color: rgb(243, 243, 243);
    height: 3rem;
    border: 0;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1.5rem;
    transition: background-color 0.1s;
    &:hover {
      background-color: rgb(219, 218, 218);
      i {
        color: rgba(255, 87, 34, 0.9);
      }
    }
    i {
      opacity: 0.5;
      transition: color 0.1s;
    }
    .button-word {
      float: right;
      height: 3rem;
      width: 9rem;
      background-color: rgba(255, 87, 34, 0.6);
      line-height: 3rem;
      font-family: "SourceHanSansCN";
      color: white;
      span{
        display: inline-block;
        position: relative;
        // top: -3.2rem;
        // left: -0.1rem;
      }
      // &::before {
      //   content: "";
      //   display: inline-block;
      //   position: relative;
      //   bottom: 0.8rem;
      //   right: 3.27rem;
      //   height: 5rem;
      //   width: 0.9rem;
      //   background-color: rgb(231, 228, 228);
      //   transform: rotate(18deg);
      // }
    }
  }
}
</style>