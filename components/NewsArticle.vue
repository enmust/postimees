<template>
  <div class="news-article">
    <v-img
      :src="landscapeLarge"
      height="calc(100vh - 56px)"
      min-height="800px"
      class="article__image article__image--gradient cursor-pointer"
      gradient="0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.18039) 100%"
      @click="$openPostimees(`${data.id}/${data.slug}`)"
      @click.middle="$openPostimees(`${data.id}/${data.slug}`, '_blank')"
    >
      <NewsArticleHeadline :headline="headline" :is-even="isEven" />

      <NewsArticleBoxBlue v-if="$vuetify.breakpoint.mdAndDown" :order="order" />
    </v-img>

    <NewsArticleContent
      class="cursor-pointer"
      :article-lead="articleLead"
      :is-even="isEven"
      :order="order"
      @click.native="$openPostimees(`${data.id}/${data.slug}`)"
      @click.native.middle="$openPostimees(`${data.id}/${data.slug}`, '_blank')"
    />
  </div>
</template>

<script>
import NewsArticleHeadline from '@/components/news_article/NewsArticleHeadline'
import NewsArticleContent from '@/components/news_article/NewsArticleContent'
import NewsArticleBoxBlue from '@/components/news_article/NewsArticleBoxBlue'
export default {
  name: 'NewsArticle',
  components: { NewsArticleBoxBlue, NewsArticleContent, NewsArticleHeadline },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    order: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  computed: {
    isEven() {
      return this.order % 2 === 0
    },
    headline() {
      return this.data?.editorsChoice?.headline ?? ''
    },
    landscapeLarge() {
      return this.data?.thumbnail?.sources?.landscape?.large
    },
    articleLead() {
      return this.data?.editorsChoice?.articleLead ?? []
    },
  },
}
</script>

<style scoped>
.article__image--gradient {
  background-image: -moz-linear-gradient(
    0deg,
    rgb(0, 0, 0) 0%,
    rgba(0, 0, 0, 0.18039) 100%
  );
  background-image: -webkit-linear-gradient(
    0deg,
    rgb(0, 0, 0) 0%,
    rgba(0, 0, 0, 0.18039) 100%
  );
  background-image: -ms-linear-gradient(
    0deg,
    rgb(0, 0, 0) 0%,
    rgba(0, 0, 0, 0.18039) 100%
  );
  opacity: 0.902;
}

.article__image >>> .article__box--blue {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
}

.article__image >>> .circle {
  width: 100px;
  height: 100px;
}
</style>
