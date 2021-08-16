import React from 'react'
import { useParams } from 'react-router-dom';

//config
import { POSTER_SIZE, IMAGE_BASE_URL } from '../config';

//components
import { Grid } from './Grid';
import { Spinner } from './Spinner';


//Hooks
import { useMovieFetch } from '../hooks/useMovieFetch'

//Image
import NoImage from '../images/no_image.jpg'

export const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    console.log(movie);
    
    return (
        <>
        <div>
            Moive
            </div>
        </>
    )
}
