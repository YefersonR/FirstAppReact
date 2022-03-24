import Spinner from '../../components/spiner'
import ListOfGifts from '../../components/ListOfGifts';
import { useGifs } from '../../hooks/useGifs';

export default function SearchResult({params}){
    const {keyword} = params
    const {loading, gifs} = useGifs({keyword})
    return <>
    {
        loading ? <Spinner/> : <ListOfGifts gifs={gifs}/>
    }
    </>
}