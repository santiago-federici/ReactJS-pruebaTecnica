import { useEffect, useState } from 'react'
import { randomImage } from './services/image'

export function useCatImage ({ fact }) {
  const [catImageUrl, setCatImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    randomImage(firstWord).then(newCatImage => setCatImageUrl(newCatImage))
  }, [fact])

  return { catImageUrl }
}
