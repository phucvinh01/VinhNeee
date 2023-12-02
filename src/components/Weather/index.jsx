import React, { useEffect, useState } from 'react'
import { getWeather } from '../../lib/api';
import { motion } from 'framer-motion'

const Weather = () => {

    const [location, setLocation] = useState(null);
    const [dataWeather, setDataWeather] = useState();
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)


    const handleWatchLocation = async () => {
        if (navigator.geolocation) {
            await navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
                if (permissionStatus.state === 'denied') {
                    alert('Please allow location access.');
                    window.location.href = "app-settings:location";
                } else {
                    navigator.geolocation.watchPosition((position) => {
                        setLocation(position);
                        localStorage.setItem("latitude", position.coords.latitude)
                        localStorage.setItem("longitude", position.coords.longitude)
                        setLat(position.coords.latitude)
                        setLong(position.coords.longitude)
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
    }, [location]);
    useEffect(() => {
        if (localStorage.getItem("latitude")) {
            getData(localStorage.getItem("latitude"), localStorage.getItem("longitude"))
        }
    }, [])


    const getData = async (lat, long) => {
        if (lat) {
            let res = await getWeather(lat, long)
            console.log(res);
            if (res.status === 200) {
                setDataWeather(res.data)
            }
        }

    }

    return (
        <motion.div
            initial={ { y: -100, opacity: 0 } }
            animate={ { y: 0, opacity: 1 } }
            className='border p-6 rounded w-1/3'>
            <h3 className='font-medium'>Weather</h3>
            <div className=''>
                <div className=''>
                    <h2><em>{ dataWeather && dataWeather.location?.country }</em></h2>
                    <h3><em>{ dataWeather && dataWeather.location?.name }</em></h3>
                    <div className='flex gap-4'>
                        <div className='flex items-center justify-between w-full'>
                            <img className='' src={ dataWeather && dataWeather.current?.condition?.icon }></img>
                            <div className='flex gap-1 items-center justify-center'>
                                <h4 className='font-extrabold text-lg '>{ dataWeather && dataWeather.current?.feelslike_c }</h4>
                                <i className="">C</i>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <h2 className=''>{ dataWeather && dataWeather.current?.condition?.text }</h2>
                        <small>{ dataWeather && dataWeather.current?.last_updated }</small>
                    </div>
                </div>
            </div>

        </motion.div>

    )
}

export default Weather