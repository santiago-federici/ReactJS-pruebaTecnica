import { useEffect, useState } from 'react'
import { randomFact } from './services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    randomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
