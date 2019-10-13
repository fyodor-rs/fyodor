<template>
  <div class="container">
    <nar-bar></nar-bar>
    <div class="contents">
      <nuxt :nuxtChildKey="$route.name" keep-alive />
    </div>
    <transition name="side" mode="out-in">
       <right-bar></right-bar>
    </transition>
  </div>
  
</template>
<script>
import NarBar from "../middle/narBar";
import RightBar from "../middle/rightBar";
export default {
  components: {
    NarBar,
    RightBar
  }
};
</script>