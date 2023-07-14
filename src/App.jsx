import { useState, useEffect } from 'react'
import './app.css'
import { randomFact } from './services/facts'

export function App () {
  const [fact, setFact] = useState()
  const [catImageUrl, setCatImageUrl] = useState()

  const catApiUrl = 'https://cataas.com'

  useEffect(() => {
    randomFact().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(resp => resp.json())
      .then(data => {
        const { url } = data
        setCatImageUrl(url)
      })
  }, [fact])

  const handleClick = () => {
    randomFact().then(newFact => setFact(newFact))
  }

  return (
    <main className='app-main'>
      <h1>Prueba tecnica!</h1>
      <div>
        {fact && <p>{fact}</p>}
        {catImageUrl && <img src={`${catApiUrl}${catImageUrl}`} alt='image brought with the first word from the random fact' />}
      </div>

      <button onClick={handleClick}>Reset fact</button>
    </main>
  )
}
