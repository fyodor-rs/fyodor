<template>
  <div class="comment">
      <div class="comment-header"></div>  
      <div class="divider"></div>
      <div class="comment-item"></div>
      <div class="comment-item"></div>
      <div class="comment-item"></div>
      <div class="comment-item"></div>
      <div class="comment-item"></div>
      <div class="comment-item"></div>
  </div>     
</template>
<style lang="scss">
.comment{
    width: 100%;
    // height: 400px;
    box-sizing: border-box;
    background-color: rgb(243, 243, 243);
    padding: 15px;
    margin-top: 15px;
   .comment-header{
      width: 100%;
      height: 40px;
   }
   .divider{
      width: 100%;
      height: 1px;
      opacity: 0.1;
      background-color:black
   }
   .comment-item{
       width: 100%;
       height: 90px;
       background-color: rgb(214, 213, 213);
       margin: 15px 0
   }
}
</style>