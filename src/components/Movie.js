import React from 'react'
import { useParams } from 'react-router-dom';

//config
import { POSTER_SIZE, IMAGE_BASE_URL } from '../config';

//components
import { Grid } from './Grid';
import Spinner from './Spinner';
import { BreadCrumbs } from './BreadCrumbs';
import { MovieInfo } from './MovieInfo';
import { MovieInfoBar } from './MovieInfoBar';


//Hooks
import { useMovieFetch } from '../hooks/useMovieFetch'

//Image
import NoImage from '../images/no_image.jpg'

export const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if(loading) return <Spinner />
    if(error) return <div>Something went wrong..</div>
    
    return (
        <>
            <BreadCrumbs movieTitle={movie.original_title} movieId={movie.id} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
        </>
    )
}
