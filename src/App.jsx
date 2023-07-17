import './app.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import { catApiUrl } from './services/image'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { catImageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
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
