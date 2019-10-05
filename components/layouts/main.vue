<template>
  <div >
    <img id="main-img" src="https://www.bing.com/th?id=OHR.ClavijoLandscape_ZH-CN1525245124_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp" alt="Peach Blossom" />
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
