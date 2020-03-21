<template>
  <div class="container">
    <nar-bar></nar-bar>
    <left-bar></left-bar>
    <div class="contents">
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </div>
    
    <right-bar></right-bar>
  </div>
</template>
<script>
import NarBar from "../middle/narBar";
import RightBar from "../middle/rightBar";
import LeftBar from "../middle/leftBar";
export default {
  components: {
    NarBar,
    RightBar,
    LeftBar
  }
};
</script>