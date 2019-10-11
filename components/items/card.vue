<template>
  <div class="card">
    <div class="card-content">
      <div class="card-img">
        <img draggable="false" :src="image()" />
      </div>
      <div class="card-article">
        <div class="card-article-title">
          <nuxt-link to="/article">{{article.title}}</nuxt-link>
        </div>
        <div class="card-article-description">{{article.describe}}</div>
        <div class="card-article-icons">
          <span>
            <i class="fa fa-clock-o fa-fw"></i>
            <span>{{new Date(article.createTime).toLocaleDateString()}}</span>
          </span>
          <span>
            <i class="fa fa-eye fa-fw"></i>
            <span>56</span>
          </span>
          <span>
            <i class="fa fa-commenting fa-fw"></i>
            <span>123</span>
          </span>
          <span>
            <i class="fa fa-heart fa-fw"></i>
            <span>43</span>
          </span>
          <span>
            <i class="fa fa-bars fa-fw"></i>
            <span>{{article.category}}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    article:Object
  },
  computed:{
  },
  methods:{
    format(time){
      return new Date(time).toLocaleDateString()
    },
    image(){
      const content=JSON.parse(this.article.rawContent)
      return content&&Object.keys(content.entityMap).length?content.entityMap[0].data.url:this.article.img
    }
  }
};
</script>
<style lang="scss" scope>
.card {
  background-color: white;
  width: 100%;
  height: 8.5em;
  @include css3-prefix(transition, background-color 0.5s);
  &:hover {
    background-color: rgb(219, 218, 218);
    .card-content > .card-img > img {
      @include css3-prefix(transform, translateX(-2px));
    }
  }
  .card-content {
    padding: 0.5em;
    height: 7.5em;
    .card-img {
      float: left;
      overflow: hidden;
      height: 100%;
      width: 9.5em;
      img {
        height: 100%;
        width: 100%;
        cursor: pointer;
        @include css3-prefix(transition, transform 0.5s);
      }
    }
    .card-article {
      height: 100%;
      float: right;
      width: 26.6em;
      .card-article-title {
        cursor: pointer;
        font-size: 1em;
        height: 2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        a {
          @include css3-prefix(transition, margin-left 0.5s);
          color: black;
          &:hover {
            color: gray;
            text-decoration: underline;
            margin-left: 0.5em;
          }
        }
      }
      .card-article-description {
        font-size: 0.8em;
        height: 4rem;
        cursor: pointer;
        // white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .card-article-icons {
        font-size: 0.8em;
        height: 1.5rem;
        display: flex;
        margin-right: 1.5em;
        justify-content: space-between;
      }
    }
  }
}
</style>>
