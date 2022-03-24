import {useContext} from "react";
import useGlobaGif from '../../hooks/useGlobalGif'
import Gifs from "../../components/Gifs";

export default function Detail({params}){
    const gifs = useGlobaGif()
    const gif = gifs.find(gif => gif.id === params.id)

    return <Gifs {...gif} />
}