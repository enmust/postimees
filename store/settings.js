import { getField, updateField } from 'vuex-map-fields'
import {
  CLOSE_SUBSCRIPTION_NOTIFICATION,
  SET_KEYWORDS,
  SET_DESCRIPTION,
} from '~/store/mutation-types'

export const state = () => ({
  subscriptionNotification: true,
  leftDrawer: false,
  keywords: [],
  description: '',
})

export const mutations = {
  updateField,

  [CLOSE_SUBSCRIPTION_NOTIFICATION](state) {
    state.subscriptionNotification = false
  },

  [SET_KEYWORDS](state, keywords) {
    state.keywords = keywords
  },

  [SET_DESCRIPTION](state, keywords) {
    state.description = keywords
  },
}

export const actions = {
  closeSubscriptionNotification({ commit }) {
    commit(CLOSE_SUBSCRIPTION_NOTIFICATION)
  },

  setKeywords({ commit }, payload) {
    commit(SET_KEYWORDS, payload?.keywords ?? [])
  },

  setDescription({ commit }, payload) {
    commit(SET_DESCRIPTION, payload?.description ?? '')
  },
}

export const getters = {
  getField,
}
