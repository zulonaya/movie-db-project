import React from 'react'

//styles
import { Wrapper } from './Button.styles'

export const Button = ({text, callback}) => {
    return (
        <Wrapper
            type="button"
            onClick={callback}
        >
            {text}
        </Wrapper>
    )
}
