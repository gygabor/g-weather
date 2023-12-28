import { useEffect, useState } from 'react'

type ReturnProps = {
  hours: string | null
  minutes: string | null
}

const useClock = (offset: number): ReturnProps => {
  const [hours, setHours] = useState<string | null>(null)
  const [minutes, setMinutes] = useState<string | null>(null)

  useEffect(() => {
    const randominterval = setInterval(() => {
      const randomHours = Math.floor(Math.random() * 24)
      const randomMinutes = Math.floor(Math.random() * 60)
      setHours(randomHours < 10 ? `0${randomHours}` : `${randomHours}`)
      setMinutes(randomMinutes < 10 ? `0${randomMinutes}` : `${randomMinutes}`)
    }, 100)

    const interval = setInterval(() => {
      clearInterval(randominterval)

      const date = new Date(Date.now() + offset * 1000)
      const h = date.getUTCHours()
      const m = date.getUTCMinutes()

      setHours(h < 10 ? `0${h}` : `${h}`)
      setMinutes(m < 10 ? `0${m}` : `${m}`)
    }, 1000)

    return () => {
      clearInterval(randominterval)
      clearInterval(interval)
    }
  }, [offset])

  return { hours, minutes }
}

export default useClock
