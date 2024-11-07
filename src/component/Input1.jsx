import { useState } from 'react'
import { BiSearch, BiCurrentLocation } from 'react-icons/bi'
// import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'

const Input1 = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState('')

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city })
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setQuery({ lat: latitude, lon: longitude })
      })
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  }
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 item-center justify-center space-x-4'>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyPress={handleKeyPress} 
          type="text"
          placeholder='Search by city....'
          className='text-gray-500 text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' />
        <BiSearch
          size={30} className='text-white cursor-pointer transition ease-out hover:scale-125 translate-y-2' onClick={handleSearchClick} />
        <BiCurrentLocation
          size={30} className='text-white cursor-pointer transition ease-out hover:scale-125 translate-y-2' onClick={handleLocationClick} />
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button className='text-2xl text-white font-medium transition ease-out hover:scale-125' onClick={() => setUnits("metric")}>°C</button>
        <p className='text-2xl text-white font-medium mx-1'>|</p>
        <button className='text-2xl text-white font-medium transition ease-out hover:scale-125' onClick={() => setUnits("imperial")}>°F</button>
      </div>
    </div>
  )
}

export default Input1