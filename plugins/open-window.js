const POSTIMEES_URL = 'https://postimees.ee/'

export default ({ app }, inject) => {
  const openWindow = (url) => {
    window.open(url, 'NewWindow')
  }

  const openPostimees = (url, target = 'NewWindow') => {
    window.open(`${POSTIMEES_URL}${url}`, target)
  }

  inject('openWindow', openWindow)
  inject('openPostimees', openPostimees)
}
