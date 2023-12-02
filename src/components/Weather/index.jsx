import React, { useEffect, useState } from 'react'
import { getWeather } from '../../lib/api';
import { motion } from 'framer-motion'

const Weather = () => {

    const [location, setLocation] = useState(null);
    const [dataWeather, setDataWeather] = useState();


    const handleWatchLocation = async () => {
        if (navigator.geolocation) {
            await navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
                if (permissionStatus.state === 'denied') {
                    alert('Please allow location access.');
                    window.location.href = "app-settings:location";
                } else {
                    navigator.geolocation.watchPosition((position) => {
                        setLocation(position);
                    }, (error) => {
                        console.log(error);
                    });
                }
            });
        } else {
            alert('Geolocation is not supported in your browser.');
        }
    }


    useEffect(() => {
        handleWatchLocation()
        getData(location?.coords?.latitude, location?.coords?.longitude)
    }, [location, dataWeather]);



    const getData = async (lat, long) => {
        if (lat) {
            let res = await getWeather(lat, long)
            if (res.status === 200) {
                setDataWeather(res.data)
            }
        }

    }

    return (
        <motion.div
            initial={ { y: -100, opacity: 0 } }
            animate={ { y: 0, opacity: 1 } }
            className='w-full flex flex-col gap-4  items-end'>
            <h3 className='font-medium'>Thời tiết hôm nay thế nào nhỉ?</h3>
            <div className='flex  flex-col items-end gap-2'>
                <h2><em>{ dataWeather && dataWeather.location?.country }</em></h2>
                <h3><em>{ dataWeather && dataWeather.location?.name }</em></h3>
                <div className='flex gap-4'>
                    <div className='flex items-center justify-between w-full'>
                        <img className='' src={ dataWeather && dataWeather.current?.condition?.icon }></img>
                        <div className='flex gap-1 items-center justify-center'>
                            <h4 className='font-extrabold text-lg '>{ dataWeather && dataWeather.current?.feelslike_c } 🌡️</h4>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full'>
                    <h2 className=''>{ dataWeather && dataWeather.current?.condition?.text }</h2>
                </div>
            </div>

        </motion.div>

    )
}

export default Weather