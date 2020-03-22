<template>
  <div class="leftBar">
    <!-- <div class="leftBar-input">
            <input  />
            <i class="fa fa-list-ul fa-fw"></i>
    </div>-->
    <!-- <div class="person">
     <animationTree></animationTree>
    </div> -->

    <div class="rank">
      <div class="title">
        <i class="fa fa-fire fa-fw"></i>
        <span>热门文章</span>
      </div>

      <div class="rank-item">
        <span class="item-index">1</span>
        <span class="item-title">54213</span>
      </div>
      <div class="rank-item">
        <span class="item-index">1</span>
        <span class="item-title">54213</span>
      </div>
      <div class="rank-item">
        <span class="item-index">1</span>
        <span class="item-title">54213</span>
      </div>
      <div class="rank-item">
        <span class="item-index">1</span>
        <span class="item-title">54213</span>
      </div>
      <div class="rank-item">
        <span class="item-index">1</span>
        <span class="item-title">54213</span>
      </div>
       <div class="rank-item">
        <span class="item-index">1</span>
        <span class="item-title">54213</span>
      </div>
       <div class="rank-item">
        <span class="item-index">1</span>
        <span class="item-title">54213</span>
      </div>
       <div class="rank-item">
        <span class="item-index">1</span>
        <span class="item-title">54213</span>
      </div>
    </div>

    <div class="tag">
      <div class="title">
        <i class="fa fa-columns fa-fw"></i>
        <span>标签分类</span>
      </div>
      <div class="rank-item">
        <i class="fa fa-bus fa-fw"></i>
        <span class="item-title">54213</span>
        <span class="number">12篇</span>
      </div>
      <div class="rank-item">
        <i class="fa fa-bus fa-fw"></i>
        <span class="item-title">54213</span>
        <span class="number">12篇</span>
      </div>
      <div class="rank-item">
        <i class="fa fa-bus fa-fw"></i>
        <span class="item-title">54213</span>
        <span class="number">12篇</span>
      </div>
      <div class="rank-item">
        <i class="fa fa-bus fa-fw"></i>
        <span class="item-title">54213</span>
        <span class="number">12篇</span>
      </div>
    </div>

    <div class="file">
      <div class="title">
        <i class="fa fa-list-ul fa-fw"></i>
        <span>归档</span>
      </div>
      <div class="file-item">
        <span class="item-title">2019-04</span>
        <span class="number">12篇</span>
      </div>
      <div class="file-item">
        <span class="item-title">2019-04</span>
        <span class="number">12篇</span>
      </div>
      <div class="file-item">
        <span class="item-title">2019-04</span>
        <span class="number">12篇</span>
      </div>
      <div class="file-item">
        <span class="item-title">2019-04</span>
        <span class="number">12篇</span>
      </div>
    </div>
    <calendar></calendar>
  </div>
  
</template>
<script>
import calendar from '../widgets/calendar'
import animationTree from '../widgets/animationTree'
export default {
    components:{
        calendar,
        animationTree
    }
}
</script>
<style lang="scss" scoped>
.leftBar {
    user-select: none;
  position: relative;
//   top: 3.7rem;
  width: 15.5rem;
  // opacity: 0.2;
  //   background-color: gray;
//   height: 100rem;
  margin-left: 1rem;
.person{
    width: 100%;
    height: 20rem;
    background-color: rgb(243, 243, 243);
     margin-bottom: 1rem;
}
  .rank,
  .tag,
  .file {
    font-size: 0.9rem;
    width: 100%;
    // height: 15rem;
    // background-color: rgb(243, 243, 243);
    background-color: white;
    // padding: 0.6rem;
    box-sizing: border-box;
    margin-bottom: 1rem;
    overflow: hidden;
    .title {
      color: #555;
      font-family: "SourceHanSansCN";
      height: 2.5rem;
      line-height: 2.5rem;
      padding: 0 0.7rem;
      border-bottom: 1px solid rgba(black, 0.1);
      i {
        margin-right: 0.4rem;
      }
    }
  }

  .rank-item,
  .tag-item,
  .file-item {
    font-family: "SourceHanSansCN";
    color: rgba(0, 0, 0, 0.54);
    margin: 0.7rem;
    height: 1.5rem;
    font-size: 0.8rem;
    line-height: 1.5rem;
    .item-index {
      display: inline-block;
      line-height: 1.2rem;
      text-align: center;
      height: 1.2rem;
      width: 1.2rem;
      margin-right: 0.4rem;
      color: rgba(0, 0, 0, 0.54);
      background-color: hsla(0, 0%, 77.3%, 0.5);
    }
    .item-title {
      display: inline-block;
      height: 1.2rem;
      line-height: 1.2rem;
    }
    i {
      margin-right: 0.3rem;
    }
    .number {
      float: right;
    }
  }

}
</style>