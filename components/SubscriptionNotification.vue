<template>
  <v-card class="subscription-notification" tile>
    <div
      class="d-flex flex-row justify-center mx-auto px-2"
      style="height: 50px; max-width: 1030px"
    >
      <div class="font-weight-bold text-sm align-self-center ml-auto">
        <a
          href="https://secure.postimees.ee/subscribe/variants"
          class="text-none black--text text-decoration-none"
          target="SubscriptionWindow"
        >
          DIGIPAKETT ALATES 1 EURO
        </a>
      </div>
      <v-btn
        class="align-self-center white--text px-5 ml-4"
        small
        color="red"
        rounded
        href="https://secure.postimees.ee/subscribe/variants"
        target="SubscriptionWindow"
        >Telli</v-btn
      >
      <v-btn
        class="align-self-center ml-auto"
        icon
        @click="closeSubscriptionNotification"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SubscriptionNotification',
  methods: {
    ...mapActions('settings', ['closeSubscriptionNotification']),
  },
}
</script>

<style scoped>
.subscription-notification {
  position: fixed;
  bottom: 0;
  z-index: 100000;
  width: 100%;
  background-color: #fc0;
}

.text-sm {
  font-size: 14px;
}
</style>
