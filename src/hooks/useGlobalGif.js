import React,{useContext} from "react";
import GifContextProvider from "../context/GifContextProvider";

export default function useGlobaGif(){
    const {gifs} = useContext(GifContextProvider)
    return gifs
}