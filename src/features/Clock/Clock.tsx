import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const Clock: React.FC<{ time: number; offset: number }> = ({
  time,
  offset,
}) => {
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date(Date.now() + offset * 1000)
      setHours(date.getUTCHours())
      setMinutes(date.getUTCMinutes())
    }, 1000)

    return () => clearInterval(interval)
  }, [time, offset])

  return (
    <>
      <Typography variant="h3">{hours}</Typography>
      <Typography variant="h3">{minutes}</Typography>
    </>
  )
}

export default Clock
