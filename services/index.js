import PostimeesApi from '~/services/postimees.api'

export default (context) => ({
  postimees: PostimeesApi(context.$axios),
})
