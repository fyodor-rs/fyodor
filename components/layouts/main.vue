<template>
  <div >
    <!-- <img id="main-img" src="@/assets/img/LofotenSurfing.jpg" /> -->
    <div id="main-img"  />
    <header-view></header-view>
    <container-view></container-view>
    <footer-view></footer-view>
  </div>
</template>
<script>
import HeaderView from "./header";
import FooterView from "./footer";
import ContainerView from "./container";
export default {
  components: {
    HeaderView,
    FooterView,
    ContainerView
  },
};
</script>
