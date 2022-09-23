import React, { useContext } from 'react';
import styled from 'styled-components'
import ContactForm from "../pages/ContactForm";
import 'font-awesome/css/font-awesome.min.css';
import { MouseContext } from "../components/MouseContext";

const Container = styled.div`
  font-family: Montserrat;
  letter-spacing : 0.1em;
  text-align: center;

`;

const Banner = styled.div`
    background-image: url("./images/img4.svg"); 
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: -1;
    margin-bottom: 30px;
   
`;

const Text = styled.h1`  
    font-size: 3.0em;
    color: #9F3931;
    padding-top: 100px;
    padding-bottom: 80px;
`;

const MailTo = styled.p`
  margin-top: 30px;
`;

const Attribute = styled.a`
  font-size: 1.2em;  
  font-family: 'FontAwesome';
  color: #9F3931;
  text-decoration: none;
}
`;

const Contact = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
    return ( <Container>
       <Banner> 
        <Text> Get In Touch.</Text>
       </Banner>
       <ContactForm />
       <div
        onMouseEnter = {() => cursorChangeHandler("hovered")}
        onMouseLeave = {() => cursorChangeHandler("")}> 
       <MailTo><Attribute href="mailto:rach.wph@gmail.com"> or Drop me an email &#xf1d8;</Attribute></MailTo>
       </div>
    </Container>

  )
}

export default Contact;