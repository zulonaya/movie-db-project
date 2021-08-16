import React from 'react'
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles"

export const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt="RMDB-Logo" />
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt="TMDB-Logo" />
            </Content>
        </Wrapper>
    )
}
