<template>
  <div>
    <LandingImage :data="sectionData" />

    <div v-if="articles" class="article-feed">
      <NewsArticle
        v-for="(item, key) in articles"
        :key="key"
        :data="item"
        :order="key + 1"
      />
    </div>
  </div>
</template>

<script>
import NewsArticle from '~/components/NewsArticle'
import LandingImage from '~/components/LandingImage'
export default {
  name: 'IndexPage',
  components: { LandingImage, NewsArticle },
  async asyncData({ params, route, error, store, $services }) {
    const SECTION_ID = 81
    try {
      const sectionResponse = await $services.postimees.getSection(SECTION_ID)
      const articlesResponse = await $services.postimees.getArticles(
        SECTION_ID,
        { options: { limit: 5 } }
      )

      await store.dispatch('settings/setKeywords', {
        keywords: sectionResponse?.keywords,
      })
      await store.dispatch('settings/setDescription', {
        description: sectionResponse?.meta?.titleBar,
      })

      return {
        sectionData: sectionResponse,
        articles: articlesResponse,
      }
    } catch (err) {
      error({
        message: `Could not find section ${SECTION_ID}`,
        path: route.path,
      })
    }
  },
}
</script>
