<template>
  <div>
    <v-img
      height="calc(100vh - 56px)"
      :src="require('~/assets/img/stacked-waves-haikei.svg')"
    >
      <div
        class="d-flex flex-column justify-center"
        style="height: 100%; width: 100%"
      >
        <v-btn
          v-if="$vuetify.breakpoint.lgAndUp"
          absolute
          small
          rounded
          style="
            background-color: rgba(255, 255, 255, 0.8);
            top: 24px;
            left: 24px;
          "
          class="primary--text"
          elevation="0"
          href="https://secure.postimees.ee/subscribe/variants"
          target="SubscriptionWindow"
          >Postimees pluss</v-btn
        >
        <div
          v-else
          class="white--text"
          style="position: absolute; top: 24px; left: 24px"
        >
          POSTIMEES PLUSS {{ currentDateAndTime }}
        </div>
        <div
          class="article__title text-center mx-auto mb-12 px-6"
          :class="{
            'article__title-xl': $vuetify.breakpoint.lgAndUp,
            'article__title-md': $vuetify.breakpoint.mdAndUp,
            'article__title-xs': $vuetify.breakpoint.xsOnly,
          }"
          style="max-width: 1400px"
        >
          {{ description }}
        </div>

        <div v-if="$vuetify.breakpoint.mdAndDown" class="px-6">
          <v-btn fab large icon class="white--text">
            <span>{{ getRandomInt() }}</span>
            <v-img
              :src="require('~/assets/img/comments.png')"
              alt="Kommentaarid"
              max-width="24"
              class="ml-2"
            />
          </v-btn>
        </div>

        <!--        <v-btn-->
        <!--          large-->
        <!--          color="primary"-->
        <!--          fab-->
        <!--          class="mx-auto mt-12"-->
        <!--          elevation="10"-->
        <!--          @click="$vuetify.goTo('.news-article')"-->
        <!--        >-->
        <!--          <v-icon x-large>mdi-chevron-down</v-icon>-->
        <!--        </v-btn>-->

        <div>
          <v-hover v-slot="{ hover }">
            <v-img
              class="mx-auto cursor-pointer elevation-10 rounded-circle btn__scroll"
              :class="{ 'elevation-8': hover, 'elevation-3': !hover }"
              height="64"
              width="64"
              contain
              :src="require('~/assets/img/nooleke_2.png')"
              @click="$vuetify.goTo('.news-article')"
            />
          </v-hover>
        </div>
      </div>
    </v-img>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LandingImage',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    ...mapState('settings', ['description']),

    ogImage() {
      return this.data?.meta?.logos?.ogImage?.path
    },

    currentDateAndTime() {
      const now = new Date()
      const months = [
        'jaan',
        'veebr',
        'märts',
        'apr',
        'mai',
        'juuni',
        'juuli',
        'aug',
        'sept',
        'okt',
        'nov',
        'dets',
      ]

      return `${now.getDate()}. ${
        months[now.getMonth()]
      } ${now.getFullYear()} ${now.toTimeString().substring(0, 5)}`
    },
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * 99) + 1
    },
  },
}
</script>

<style scoped>
.btn__scroll {
  transition: box-shadow 0.2s ease-in-out;
}
</style>
