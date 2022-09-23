import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import styled from 'styled-components';

const Container = styled.div`
    font-family: Montserrat;
    text-align: center;
    letter-spacing : 0.1em;
    color: #9F3931;

`;

const Image = styled.img`
    height: auto;
    max-width: 100%;
    opacity: .6;
    margin-top: 50px;
`;

const Typewrite = styled.h1`
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto; 
    font-size: 2.8em;   
`;

const Text = styled.p`   
    position: absolute;    
    display: table;  
    background-color: rgba(255,255,255,0.9);
    font-weight: 600;
    font-size: 1.5em; 
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 15px;
    
  
`;

const About = () => {
    const { text } = useTypewriter ({
        words: ['Freelancer', 'Problem Solver', 'Developer', 'Designer'],
        loop: true,
    })
    return (
    <Container>
        <Image src="./images/img3.svg"></Image>
        <Typewrite> 
            { text }
        <Cursor />
        </Typewrite>
        <Text>Hello, my name is Rachel. <br></br> I am a front-end developer based in Malaysia.
    </Text>
   
    </Container>
    )
  }
  
  export default About;