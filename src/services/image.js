export const catApiUrl = 'https://cataas.com'

export const randomImage = async (firstWord) => {
  const res = await fetch(`${catApiUrl}/cat/says/${firstWord}?size=50&color=red&json=true`)
  const data = await res.json()
  const { url } = data
  return url
}
