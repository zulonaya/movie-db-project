import React from 'react'

//styles
import { Wrapper, Image } from './Actor.styles'

export const Actor = ({name, character, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt="alt-thumb" />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
)
