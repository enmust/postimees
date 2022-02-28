<template>
  <div
    class="d-flex flex-row flex-no-wrap article__content"
    :class="{
      'flex-row-reverse': isEven,
      'article__box--height': $vuetify.breakpoint.lgAndUp,
    }"
  >
    <NewsArticleBoxGrey :article-lead="articleLead" :is-even="isEven" />

    <NewsArticleBoxBlue v-if="$vuetify.breakpoint.lgAndUp" :order="order" />
  </div>
</template>

<script>
import NewsArticleBoxBlue from '@/components/news_article/NewsArticleBoxBlue'
import NewsArticleBoxGrey from '@/components/news_article/NewsArticleBoxGrey'
export default {
  name: 'NewsArticleContent',
  components: { NewsArticleBoxGrey, NewsArticleBoxBlue },
  props: {
    articleLead: {
      type: Array,
      required: true,
      default: () => [],
    },
    isEven: Boolean,
    order: {
      type: Number,
      required: true,
      default: 1,
    },
  },
}
</script>

<style scoped>
.article__content >>> .article__box--blue {
  min-width: 650px;
}
.article__content >>> .circle {
  width: 190px;
  height: 190px;
}

.article__box--height {
  height: 346px;
}
</style>
