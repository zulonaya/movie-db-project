import React from 'react'

// styles
import { Wrapper, Content, Text } from './MovieInfo.styles'

//components
import { Thumb } from '../Thumb'

//config
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../config';

//Image
import NoImage from '../../images/no_image.jpg'

export const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                    }
                clickable={false}
                alt="movie-thumb"
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <h3>Rating</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="directors">
                        <div>
                            <h3>DIRECTOR{ movie.directors.length > 1 ? "s" : "" }</h3>
                            {movie.directors.map(director => (
                                <p key={director.creadit_id}>{ director.name }</p>
                            ))}
                        </div>
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
)
