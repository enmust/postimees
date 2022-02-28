export default ($axios) => ({
  async getSection(sectionId) {
    const response = await $axios.get(`/sections/${sectionId}`)

    return response?.data
  },

  async getArticles(sectionId, { options }) {
    const params = {
      ...buildDefaultOptions(options),
    }

    const response = await $axios.get(
      `/sections/${sectionId}/editorsChoice/articles`,
      { params }
    )

    return response?.data
  },
})

const buildDefaultOptions = (options) => {
  return {
    limit: options?.limit ?? 5,
  }
}
