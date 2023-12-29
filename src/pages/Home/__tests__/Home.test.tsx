import { fireEvent, render } from '@testing-library/react'
import Home from '../Home'
import routes from '@src/constants/routes'
import { useAppSelector } from '@src/services/store'
import { City } from '@src/types'

const mockedCities: City[] = [
  {
    id: 'id1',
    name: 'test1',
    lon: 1,
    lat: 1,
  },
  {
    id: 'id2',
    name: 'test2',
    lon: 1,
    lat: 1,
  },
]

const mockNavigate = jest.fn()
const mockuseAppSelector = useAppSelector as jest.MockedFunction<
  typeof useAppSelector
>

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => mockNavigate),
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}))

jest.mock('@src/services/store/hooks', () => ({
  useAppSelector: jest.fn().mockReturnValue([]),
}))

jest.mock('@src/constants/routes', () => ({
  CITIES: '/cities',
  WEATHER: '/weather',
}))

describe('Home', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the add button', () => {
    const { getByRole } = render(<Home />)

    expect(getByRole('button')).toBeInTheDocument()
  })

  it(`doesn't render the city list`, () => {
    const { queryByRole } = render(<Home />)

    expect(queryByRole('heading', { name: 'h5' })).not.toBeInTheDocument()
  })

  it('click on the button navigates to the /cities url', () => {
    const { getByRole } = render(<Home />)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(mockNavigate).toHaveBeenCalledWith(routes.CITIES)
  })

  it('click on the button navigates to the /cities url', () => {
    const { getByRole } = render(<Home />)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(mockNavigate).toHaveBeenCalledWith(routes.CITIES)
  })

  it('renders the list of the cities', () => {
    mockuseAppSelector.mockReturnValue(mockedCities)
    const { getAllByText, queryByRole } = render(<Home />)

    expect(queryByRole('heading', { name: /h5/i })).not.toBeInTheDocument()
    expect(getAllByText(/test/i)).toHaveLength(2)
  })

  it('renders the list of the cities', () => {
    mockuseAppSelector.mockReturnValue(mockedCities)
    const { getAllByText, queryByRole } = render(<Home />)

    expect(queryByRole('heading', { name: /h5/i })).not.toBeInTheDocument()
    expect(getAllByText(/test/i)).toHaveLength(2)
  })

  it('renders the list of the cities', () => {
    mockuseAppSelector.mockReturnValue(mockedCities)
    const { getByText } = render(<Home />)

    const cityTest1 = getByText('test1')
    fireEvent.click(cityTest1)

    expect(mockNavigate).toHaveBeenCalledWith(routes.WEATHER, {
      state: { city: mockedCities[0] },
    })
  })
})
