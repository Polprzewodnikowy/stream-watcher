export function getParametersFromHash() {
  let hash = window.location.hash
  if (hash.length) {
    hash = hash.replace('#', '')
    const parameters = hash.split('&')
    const data = parameters.reduce((prev, next) => {
      const [key, value] = next.split('=')
      return { ...prev, [key]: value }
    }, {})
    return data
  } else {
    return {}
  }
}
