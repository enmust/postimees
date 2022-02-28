<template>
  <v-navigation-drawer
    v-model="leftDrawer"
    temporary
    fixed
    color="primary"
    dark
  >
    <v-list>
      <v-list-item
        v-for="(item, key) in links"
        :key="key"
        href="https://secure.postimees.ee"
      >
        <v-list-item-avatar class="my-0 mr-1">
          <v-img
            :src="require(`~/assets/img/${item.src}`)"
            :alt="item.title"
            height="26"
            contain
          />
        </v-list-item-avatar>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'LeftDrawer',
  data() {
    return {
      links: [
        {
          src: 'Facebook.png',
          href: 'https://www.facebook.com/postimees/',
          title: 'Facebook',
        },
        {
          src: 'Twitter.png',
          href: 'https://twitter.com/postimees',
          title: 'Twitter',
        },
        {
          src: 'Email.png',
          href: 'mailto:vihje@postimees.ee',
          title: 'Email',
        },
        {
          src: 'jutumull.png',
          href: '',
          title: 'Sõnumid',
        },
        {
          src: 'avatar.png',
          href: 'https://secure.postimees.ee',
          title: 'Logi sisse',
        },
      ],
    }
  },
  computed: {
    ...mapFields('settings', ['leftDrawer']),
  },
}
</script>
