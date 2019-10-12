<template>
  <div class="container">
    <nar-bar></nar-bar>
    <div class="contents">
      <nuxt :nuxtChildKey="$route.name" keep-alive />
    </div>
    <!-- <contents></contents> -->
    <right-bar></right-bar>
    <!-- <div style="clear:both"></div> -->
  </div>
  
</template>
<script>
import NarBar from "../middle/narBar";
import contents from "../middle/contents";
import RightBar from "../middle/rightBar";
export default {
  components: {
    contents,
    NarBar,
    RightBar
  }
};
</script>