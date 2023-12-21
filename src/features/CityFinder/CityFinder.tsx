import {
  FC,
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import AutocompleteField from '@src/components/AutocompleteField'
import { useFetch } from '@src/hooks'
import { CITY_URL } from '@src/constants/links'
import { fetchData } from '@src/services/fetchData/fetchData'
import debounce from './debounce'
// import { debounce } from '@mui/material/utils'

// const options = [
//   'Budapest',
//   'London',
//   'New York',
//   'Berlin',
//   'Paris',
//   'Rome',
//   'Madrid',
//   'Vienna',
//   'Prague',
//   'Amsterdam',
//   'Brussels',
//   'Lisbon',
//   'Stockholm',
//   'Oslo',
//   'Copenhagen',
//   'Helsinki',
//   'Moscow',
//   'Warsaw',
// ]

interface City {
  name: string
  latitude: number
  longitude: number
  country: string
  population: number
  is_capital: boolean
}

const CityFinder: FC = () => {
  const [value, setValue] = useState<string | null>(null)
  const [options, setOptions] = useState<City[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setLoading] = useState(false)

  // url: `${CITY_URL}${searchValue}`,

  // useEffect(() => {
  //   console.log({ value, inputValue })
  // }, [value, inputValue])

  const fetch = useCallback(
    () =>
      debounce(async (url: string) => {
        setLoading(true)
        try {
          const result = await fetchData<City[]>(url, true)
          console.log({ result })
          const capitals = result.filter((city) => city.is_capital)
          setOptions(capitals)
        } catch (err) {
          console.log(err)
        } finally {
          setLoading(false)
        }
      }, 200),
    [],
  )

  useEffect(() => {
    let timerId: NodeJS.Timeout

    const fetchClient = fetch()
    fetchClient(`${CITY_URL}${inputValue}`)

    // if (inputValue) {
    //   fetchClient(`${CITY_URL}${inputValue}`)
    // } else {
    //   setOptions([])
    // }

    return () => {
      clearTimeout(timerId)
    }
  }, [value, inputValue])

  const onChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: string | null,
  ) => {
    console.log(event)
    console.log({ newValue })
  }

  return (
    <>
      <AutocompleteField
        options={options}
        onChange={onChange}
        value={value}
        setInputValue={setInputValue}
      />
    </>
  )
}

export default CityFinder
