<template>
  <v-app-bar fixed app height="56" color="primary" dark>
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.smAndDown"
      @click.stop="leftDrawer = !leftDrawer"
    />

    <img
      :src="require('~/assets/img/logo.png')"
      alt="Postimees logo"
      width="120"
      class="mx-2"
    />

    <v-spacer v-if="$vuetify.breakpoint.lgAndUp && description" />

    <div v-if="$vuetify.breakpoint.lgAndUp && description">
      {{ description }}
    </div>

    <!--    <v-toolbar-items v-if="$vuetify.breakpoint.lgAndUp && keywords.length > 0">-->
    <!--      <v-btn-->
    <!--        v-for="(item, key) in keywords"-->
    <!--        :key="key"-->
    <!--        :href="`https://${item}.postimees.ee`"-->
    <!--        class="text-none"-->
    <!--        elevation="0"-->
    <!--        color="primary"-->
    <!--        target="Item"-->
    <!--        >{{ item.charAt(0).toUpperCase() + item.substring(1) }}</v-btn-->
    <!--      >-->
    <!--    </v-toolbar-items>-->

    <v-spacer />

    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, key) in buttons"
        :key="key"
        icon
        :href="item.href"
        target="_blank"
      >
        <v-img
          :src="require(`~/assets/img/${item.src}`)"
          :alt="item.title"
          max-width="26"
        />
      </v-btn>

      <v-btn icon>
        <v-img
          :src="require('~/assets/img/jutumull.png')"
          alt="Sõnumid"
          max-width="16"
          class="mr-1"
        />
        <span style="font-size: 0.75rem">{{ getRandomInt() }}</span>
      </v-btn>
    </div>

    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp" class="ml-2">
      <v-btn
        href="https://secure.postimees.ee/"
        target="_blank"
        elevation="0"
        color="primary"
        >Logi sisse</v-btn
      >
    </v-toolbar-items>

    <div v-else class="d-flex flex-no-wrap">
      <v-menu v-model="shareMenu" offset-y>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-img
              :src="require(`~/assets/img/share.png`)"
              alt="Jaga"
              height="22"
              contain
            />
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, key) in buttons"
            :key="key"
            :href="item.href"
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
      </v-menu>

      <v-btn icon href="https://secure.postimees.ee/" target="_blank">
        <v-img
          :src="require(`~/assets/img/avatar.png`)"
          alt="Logi sisse"
          height="22"
          contain
        />
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapState } from 'vuex'

export default {
  name: 'AppHeader',
  data() {
    return {
      shareMenu: false,
      drawer: false,
      buttons: [
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
      ],
    }
  },
  computed: {
    ...mapFields('settings', ['leftDrawer']),
    ...mapState('settings', ['keywords', 'description']),
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * 99) + 1
    },
  },
}
</script>
