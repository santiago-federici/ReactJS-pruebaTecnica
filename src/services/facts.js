const catFactUrl = 'https://catfact.ninja/fact'

export const randomFact = async () => {
  const response = await fetch(catFactUrl)
  const data = await response.json()
  const { fact } = data
  return fact
}
