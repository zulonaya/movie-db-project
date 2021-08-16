import React from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../Movie'

// styles
import { Wrapper, Content } from './BreadCrumbs.styles'

export const BreadCrumbs = ({movieTitle, movieId}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>
                    Home
                </span>
            </Link>
            <span>|</span>
            <Link to={`/${movieId}`}>
                <span>
                    {movieTitle}
                </span>
            </Link>
        </Content>
    </Wrapper>
)
