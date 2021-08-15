import React from 'react'
import { Wrapper, Content } from './Grid.styles'

// styles
import { } from "./Grid.styles"

export const Grid = ({ header, children }) => {
    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}
