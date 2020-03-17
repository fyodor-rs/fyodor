<template>
  <div class="card">
<nuxt-link :to="`/article/${article._id}`">
    <div class="card-content">
      <div class="card-img">
          <img draggable="false" :src="image()" />
      </div>
      <div class="card-article">
        <div class="card-article-title">
          <nuxt-link :to="`/article/${article._id}`">{{article.title}}</nuxt-link>
        </div>
        <div class="card-article-description">{{article.describe}}</div>
        <div class="card-article-icons">
          <span>
            <i class="fa fa-clock-o fa-fw"></i>
            <span>{{new Date(article.createTime).toLocaleDateString()}}</span>
          </span>
          <span>
            <i class="fa fa-eye fa-fw"></i>
            <span>0</span>
          </span>
          <span>
            <i class="fa fa-commenting fa-fw"></i>
            <span>0</span>
          </span>
          <span>
            <i class="fa fa-heart fa-fw"></i>
            <span>0</span>
          </span>
          <span>
            <i class="fa fa-bars fa-fw"></i>
            <span>{{article.category}}</span>
          </span>
        </div>
      </div>
    </div>
</nuxt-link>
  </div>
</template>
<script>
import logo from "@/assets/img/logo.jpg";
export default {
  props: {
    article: Object
  },
  computed: {
    defaultPic() {
      return logo;
    }
  },
  methods: {
    image() {
      const content = JSON.parse(this.article.rawContent);
      if (content&&content.entityMap) {
        return Object.keys(content.entityMap).length&&
        content.entityMap[0].data.url.indexOf('http')==0&&
        content.entityMap[0].data.type!=='VIDEO'
          ? content.entityMap[0].data.url
          : this.defaultPic;
      } else {
        return this.defaultPic;
      }
    }
  }
};
</script>
<style lang="scss" scope>
.card {
  background-color: rgb(243, 243, 243);
  font-family: "SourceHanSansCN";
  width: 100%;
  height: 8.5rem;
  margin-bottom: 1rem;
  @include css3-prefix(transition, background-color 0.5s);
  &:hover {
    background-color: rgb(219, 218, 218);
    img {
      @include css3-prefix(transform, translateX(-2px));
    }
  }
  .card-content {
    padding: 0.5rem;
    height: 7.5rem;
    .card-img {
      float: left;
      overflow: hidden;
      height: 100%;
      width: 10rem;
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
      width: 26rem;
      color: #555;
      .card-article-title {
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 600;
        height: 2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        a {
          @include css3-prefix(transition, margin-left 0.25s linear);
          color: #555;
          &:hover {
            color: black;
            // text-decoration: underline;
            margin-left: 0.5rem;
          }
        }
      }
      .card-article-description {
        font-size: 0.8rem;
        height: 4.3rem;
        cursor: pointer;
        // white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .card-article-icons {
        font-size: 0.7rem;
        // height: 1.3rem;
        font-family: "fontawesome";
        display: flex;
        justify-content: space-between;
        span {
          flex: 1;
          span{
            font-size: 0.6rem;
            font-weight: 400
          }
        }
        span:first-child {
          flex: 2;
        }
      }
    }
  }
}
</style>>
