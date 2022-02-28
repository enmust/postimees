import Vue from 'vue'

Vue.filter('truncate', (text, maxWordLength, suffix) => {
  const textWordLength = text.split(' ')
  if (textWordLength.length > maxWordLength) {
    textWordLength.length = maxWordLength
    return textWordLength.join(' ') + suffix
  } else return text
})
