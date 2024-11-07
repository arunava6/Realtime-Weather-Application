import React from 'react'

const TopButtons = ({ setQuery }) => {
    const cities = [
        {
            id: 1,
            name: "Kolkata"
        },
        {
            id: 2,
            name: "Sydney"
        },
        {
            id: 3,
            name: "Colombo"
        },
        {
            id: 4,
            name: "Paris"
        },
        {
            id: 5,
            name: "Mumbai"
        },
    ]
    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                <button key={city.id}
                    className='text-white text-2xl font-semibold hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'
                    onClick={() => setQuery({ q: city.name })}>
                    {city.name}
                </button>
            ))}
        </div>
    )
}

export default TopButtons