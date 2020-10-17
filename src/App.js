import React from 'react'
import TopNav from './Components/TopNav.js'
import styled from 'styled-components'

function App() {
    return (
        <>
        <TopNav />
         <StyledOuterDiv>
            <StyledImageContainer>
                <StyledHeaderText>
                    <h1>Got freight? We haul!</h1>
                    <p>No matter how close or far, we'll get the job done. Licensed to pick up and drop off shipments nationwide. Our transportation services include dry goods, refrigerated loads, half-loads and full-loads. If you need freight hauled with no stress? Say less and choose Cadxpress.</p>
                </StyledHeaderText>
            </StyledImageContainer>
            <StyledContentContainer>
                <h2>Operating Principles</h2>
                <p>We're road warriors and even pickup and drop off on holidays. We've found that the best way to do business is to pretend the shipment we've picked up needs to be dropped off yesterday. Putting your needs first is the bridge to building lasting relationships.</p>
                <h2>Communication/Integrity</h2>
                <p>The essense of business is being able to communicate with your clients at the moment something doesn't go according to plan and not waiting until the last moment. Trust is key and our goal is to establish trust not just with our words, but with our actions.</p>
                <h2>True Partnership</h2>
                <p>We're in this together and the understanding that if your load doesn't get delivered on time affects us just as much as it affects you, so if you need a freight hauled with no stress? Say less and choose <strong>Cadxpress!</strong></p>
                <h2>Services</h2>
                <ul>
                    <li>Nationwide hauling</li>
                    <li>2 drivers = 20 hours of driving per day per truck (under normal circumstances)</li>
                    <li>Dry loads</li>
                    <li> Refrigerated loads</li>
                    <li>Single item</li>
                    <li>Half load</li>
                    <li>Full load (up to 45,000lbs)</li>
                </ul>
                <h2>Contact us</h2>
                <p>Communication is a must so don’t hesitate to get in touch...</p>
                <p><strong><a href='tel:XXX-XXX-XXXX'>XXX-XXX-XXXX</a></strong> | <a href='mailto: email@gmail.com'>email@gmail.com</a></p>
            </StyledContentContainer>
        </StyledOuterDiv>
        </>
    )
}

export const StyledOuterDiv = styled.div`
display: flex;
width: 1600px !important;
min-width: 470px;
margin: 0!important;
justify-content: center;
justify-items: center;
flex-direction: column;
@media screen and (max-width: 470px) {
width: 470px !important;
max-width: 470px !important;
}
`

export const StyledImageContainer = styled.div`
    background-color: rgba(39, 56, 126, 0.5);
    width: 1600px !important;
    min-width: 470px;
    display: flex;
    justify-content: center;
    justify-items: center;
    height: 800px;
    margin: 0;
    padding: 0;
    background: url('https://imagesforportfolio.s3.amazonaws.com/truck.jpeg') center no-repeat;
    color: white;
    background-size: cover;
    margin-top: 40px;
    /* background-attachment: fixed; */
    @media screen and (max-width: 470px) {
     /* max-width: 470px; */
     height: auto;
     width: 400px !important;
     max-height: 400px;
    }
`

export const StyledHeaderText = styled.div`
width: 1440px;
/* display: flex;
justify-content: center;
justify-items: center; */
height: auto;
margin: 10% 0 20% 0;
color: white;
h1 {
    font-size: 8rem;
    margin-bottom: 3%;
}
p {
    max-width: 1200px;
    width: 100%;
    font-size: 1.75rem;
    margin: 0 auto;
    line-height: 2.75rem;
    text-align: center;
}
@media screen and (max-width: 470px) {
    width: 470px;
    max-width: 470px;
    h1 {
        font-size: 36px;
        width: 470px;
        text-align: center;
    }
    p {
        font-size: 20px;
        line-height: 30px;
        width: 400px;

    }
}
`

export const StyledContentContainer = styled.div`
margin: 50px auto 0 auto;
max-width: 1200px;
text-align: left;
height: auto;
color: black;
h2 {
    margin-top: 20px;
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 30px;
}
p {
    font-size: 1.5rem;
}

ul {
    padding-left: 20px;
}

ul li {
    font-size: 1.5rem;
}

@media screen and (max-width: 470px) {
    width: 470px;
    max-width: 470px;
    padding-left: 20px;
    h2 {
        font-size: 25px;
    }
    p {
        font-size:20px;
        width: 400px;
    }

    ul li {
        font-size: 20px;
    }
}
`

export default App;