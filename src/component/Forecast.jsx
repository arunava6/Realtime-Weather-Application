import React from 'react'

const Forecast = ({ title, data, units }) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-semibold uppercase'>{title}</p>
            </div>
            <hr className='my-1' />
            <div className='flex items-center justify-between text-white'>
                {data.map((d, index) => (
                    <div key={index} className='flex flex-col items-center justify-center'>
                        <p className='text-white font-medium text-lg'>{d.title}</p>
                        <img src={d.icon} alt="weather icon" className='w-13 my-1' />
                        <p className='text-white font-medium text-lg'>{`${d.temp.toFixed()}° ${units === 'metric' ? 'C' : 'F'}`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Forecast