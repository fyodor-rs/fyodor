<template>
  <div class="card">
    <div class="card-content">
      <nuxt-link :to="`/article/${article._id}`">
        <div class="card-img">
          <img draggable="false" :src="image()" />
        </div>
      </nuxt-link>

      <div class="card-article">
        <div class="card-article-title">
          <!-- <span>原创</span> -->
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
      if (content && content.entityMap) {
        return Object.keys(content.entityMap).length &&
          content.entityMap[0].data.url.indexOf("http") == 0 &&
          content.entityMap[0].data.type !== "VIDEO"
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
  // background-color: rgb(243, 243, 243);
  background-color: #fff;
  // font-family: "SourceHanSansCN";
  width: 100%;
  height: 8.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  box-shadow: 0 1px 1px 0 rgba(31, 35, 46, 0.15);
  // border-radius: 10px;
  @include css3-prefix(transition, all 0.3s);
  &:hover {
     transform: translate(0px, -2px);
    box-shadow: 0 15px 45px -10px rgba(10, 16, 34, .2);
    // background-color: rgb(219, 218, 218);
    
    img {
      // @include css3-prefix(transform, translateX(-2px));
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
        width: calc(100% + 2px);
        cursor: pointer;
        @include css3-prefix(transition, transform 0.1s);
      }
    }
    .card-article {
      height: 100%;
      float: right;
      width: 32rem;
      // color: #555;
      .card-article-title {
        font-size: 0.8rem;
        font-weight: 600;
        height: 2rem;
        display: flex;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        span{
          display: inline-block;
          height: 1.2rem;
          line-height: 1.2rem;
          width: 2rem;
          text-align: center;
          color: white;
          background: rgba(165, 72, 44, 0.37);
          border-radius: 1px;
          margin-right: 1rem;
          font-family: fontawesome;
        }
        a {
          @include css3-prefix(transition, margin-left 0.25s linear);
          font-size: 0.9rem;
          height: 1.2rem;
          line-height: 1.2rem;
          color: rgb(58, 57, 57);
          font-family: "SourceHanSansCN";
          cursor: pointer;
          &:hover {
            // color: black;
            // text-decoration: underline;
            margin-left: 0.5rem;
          }
        }
      }
      .card-article-description {
        color: black;
        font-size: 0.8rem;
        height: 4rem;
        // cursor: pointer;
        // white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .card-article-icons {
        font-size: 0.7rem;
        // height: 1.3rem;
        display: flex;
        justify-content: space-between;
        span {
          flex: 1;
          span {
            font-size: 0.6rem;
            font-weight: 400;
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
