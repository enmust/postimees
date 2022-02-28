<template>
  <v-app>
    <AppHeader />
    <LeftDrawer />
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>

      <client-only>
        <SubscriptionNotification v-if="subscriptionNotification" />
      </client-only>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'
import LeftDrawer from '~/components/LeftDrawer'
import SubscriptionNotification from '~/components/SubscriptionNotification'

export default {
  name: 'DefaultLayout',
  components: { SubscriptionNotification, LeftDrawer, AppFooter, AppHeader },
  computed: {
    ...mapState('settings', ['subscriptionNotification', 'leftDrawer']),
  },
}
</script>

<style>
html {
  font-family: 'Tabac Sans';
}
</style>
