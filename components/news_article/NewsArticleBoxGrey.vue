<template>
  <div
    class="article__box--grey flex-grow-1 white--text"
    :class="{
      'px-6 py-8': $vuetify.breakpoint.smAndDown,
      'padding-even': isEven && $vuetify.breakpoint.xlOnly,
      'padding-odd': !isEven && $vuetify.breakpoint.xlOnly,
      'padding-md': $vuetify.breakpoint.mdOnly || $vuetify.breakpoint.lgOnly,
      'article__box--text-xl': $vuetify.breakpoint.xlOnly,
      'article__box--text-lg': $vuetify.breakpoint.lgAndDown,
    }"
  >
    <div v-for="(item, key) in articleLead" :key="key">
      <div
        v-if="$vuetify.breakpoint.lgAndUp"
        :inner-html.prop="
          item.html | truncate($vuetify.breakpoint.xl ? 20 : 15, '...')
        "
      />

      <div v-else v-html="item.html" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsArticleBoxGrey',
  props: {
    articleLead: {
      type: Array,
      required: true,
      default: () => [],
    },
    isEven: Boolean,
  },
}
</script>

<style scoped>
.article__box--grey {
  background-color: #181818;
  padding-top: 65px;
  padding-bottom: 65px;
  font-weight: 300;
}

.article__box--text-xl {
  font-size: 40px;
  line-height: 48px;
}

.article__box--text-lg {
  font-size: 30px;
  line-height: 36px;
}
</style>
