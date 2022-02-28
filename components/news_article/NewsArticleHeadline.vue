<template>
  <div
    class="d-flex"
    :class="{
      'flex-row': isEven && $vuetify.breakpoint.lgAndUp,
      'flex-column justify-end': !isEven && $vuetify.breakpoint.lgAndUp,
      'align-self-end': !isEven && $vuetify.breakpoint.lgAndUp,
    }"
    style="height: 100%; width: 100%"
  >
    <div
      v-if="isEven && $vuetify.breakpoint.lgAndUp"
      class="box__blue--opacity"
    />
    <div
      class="article__title align-self-end mx-6 mx-md-0 my-8 my-md-0"
      :class="{
        'padding-even': isEven && $vuetify.breakpoint.xlOnly,
        'padding-odd': !isEven && $vuetify.breakpoint.xlOnly,
        'padding-md': $vuetify.breakpoint.mdOnly || $vuetify.breakpoint.lgOnly,
        'article__title-xl': $vuetify.breakpoint.xlOnly,
        'article__title-md': $vuetify.breakpoint.mdAndUp,
        'article__title-xs': $vuetify.breakpoint.xsOnly,
      }"
    >
      {{ headline }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsArticleHeadline',
  props: {
    headline: {
      type: String,
      required: true,
      default: 'Headline',
    },
    isEven: Boolean,
  },
}
</script>

<style scoped>
.box__blue--opacity {
  background-color: #1ba6e2;
  opacity: 0.5;
  min-width: 650px;
}
</style>
