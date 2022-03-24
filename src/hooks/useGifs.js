import { useContext, useEffect, useState } from 'react';
import getGifs from "../services/getGIfs"
import GifContextProvider from '../context/GifContextProvider';

export function useGifs({keyword} = {keyword : null}){
    const [loading, setLoading]=useState(false)
    const {gifs , setGifs} = useContext(GifContextProvider)
    
    useEffect(()=>{
        setLoading(true)
        const lastKeyword = keyword ? keyword : localStorage.getItem('lastKeyword') || "random"
       getGifs({keyword : lastKeyword}).
        then(gifs=> {
            setGifs(gifs)
            setLoading(false)
            localStorage.setItem('lastKeyword',keyword)
        })
    },[keyword, setGifs])
    return {loading, gifs}
}