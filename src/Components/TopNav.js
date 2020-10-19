import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TopNav = () => {
    return (
        <>
         <StyledNav>
             <img src='https://imagesforportfolio.s3.amazonaws.com/cadxpress_black.svg'></img>
         </StyledNav>
        </>
    )
}

export const StyledNav = styled.div`
display: flex;
background: url("https://imagesforportfolio.s3.amazonaws.com/cadxpress_black.svg") no-repeat cover;
width: 200px;
max-height: 200px !important;
img {
    height: auto;
    max-width: 200px;
    margin-bottom: -83px;
    margin-top: -20px;
}
`

export default TopNav