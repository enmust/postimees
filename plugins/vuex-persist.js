import VuexPersistence from 'vuex-persist'

const vuexOptions = {
  key: 'postimees',
  reducer: (state) => ({
    settings: {
      subscriptionNotification: state.settings.subscriptionNotification,
    },
  }),
}

export default ({ store }) => {
  new VuexPersistence(vuexOptions).plugin(store)
}
