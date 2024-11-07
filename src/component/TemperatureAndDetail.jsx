
import { FaThermometerEmpty } from 'react-icons/fa'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FiWind } from 'react-icons/fi'
import { GiSunrise, GiSunset } from "react-icons/gi"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
const TemperatureAndDetail = ({ weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like,
}, units,
}) => {
    const verticalDetails = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Real Feel",
            value: `${feels_like.toFixed()}° ${units === 'metric' ? 'C' : 'F'}`,
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity.toFixed()}%`,
        },
        {
            id: 3,
            Icon: FiWind,
            title: "Wind",
            value: `${speed.toFixed()} ${units === 'metric' ? 'km/h' : 'm/s'}`,
        }
    ]
    const horizontalDetails = [
        {
            id: 1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise,
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${temp_max.toFixed()}°`,
        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${temp_min.toFixed()}°`
        }
    ]
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-4xl font-bold text-white'>
                <p>{details}</p>
            </div>
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img src={icon} alt="weather icon" className='w-23' />
                <p className='text-5xl ml-20'>{`${temp.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}</p>
                <div className='flex flex-col space-y-3 items-start'>

                    {
                        verticalDetails.map(({ id, Icon, title, value }) => (
                            <div key={id} className='flex font-normal text-lg items-center justify-center '>
                                <Icon size={22} className="mr-1 font-bold" />
                                {`${title}: `}<span className='font-semibold ml-1'>{value}</span>
                            </div>
                        ))}
                </div>
            </div>


            <div className="text-white flex flex-row items-center justify-center space-x-10 text-sm py-3 font-medium">
                {horizontalDetails.map(({ id, Icon, title, value }) => (
                    <div key={id} className="text-white text-xl flex-row items-center">
                        <Icon size={40} className='font-bold'/>
                        <p>
                            {`${title}: `}
                            <span className="font-medium ml-1">{value}</span>
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TemperatureAndDetail