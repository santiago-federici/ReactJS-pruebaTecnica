import { useState, useEffect } from 'react'

export function App () {
  const [fact, setFact] = useState()
  const [catImageUrl, setCatImageUrl] = useState()

  const catApiUrl = 'https://cataas.com'

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        const { fact } = data

        setFact(fact)

        const firstWord = fact.split(' ')[0]

        console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(resp => resp.json())
          .then(data => {
            const { url } = data
            setCatImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>Prueba tecnica!</h1>
      {fact && <p>{fact}</p>}
      {catImageUrl && <img src={`${catApiUrl}${catImageUrl}`} alt='image brought with the first word from the random fact' />}
    </main>
  )
}
