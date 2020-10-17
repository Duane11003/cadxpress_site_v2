import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TopNav = () => {
    return (
        <>
         <StyledNav>
             <Link to='/'>Logo goes here</Link>
         </StyledNav>
        </>
    )
}

export const StyledNav = styled.div`
@media screen and (max-width: 470px) {
    width: 470px !important;
    a {
        font-size: 12px;
    }
}
`

export default TopNav