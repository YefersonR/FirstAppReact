import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifts from "../../components/ListOfGifts";
import Spinner from "../../components/spiner";
import './home.css'

const arraygif = ['wolverine','killua','goku','thor']

export default function Home(){

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = evt =>{
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }
    return (
    <>
    <form onSubmit={handleSubmit}>
        <input placeholder="Search a gif" onChange={handleChange} type='text' value={keyword} />
    </form>
    <h1>Gifs mas buscados</h1>
    <ul>
        {
            arraygif.map((populargif) =>(
                <li key={populargif}>
                <Link to={`/search/${populargif}`}> Gifs {populargif}</Link>
                </li>
            ))
        }
    </ul>
        <h1>Ultima busqueda</h1>
        { loading ? <Spinner/> : <ListOfGifts gifs={gifs}/>}
        
    </>
    )
}
