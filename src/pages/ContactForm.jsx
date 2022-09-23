import React, { useCallback, useContext } from 'react';
import { useForm } from '@mantine/form';
import { IconMail, IconUser, IconMessage, IconAlertCircle } from '@tabler/icons';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import MailChecker from 'mailchecker';
import { MouseContext } from "../components/MouseContext";



const InputBox = styled.input`
    font-family: 'FontAwesome';
    width: 550px;
    height: 30px;
    padding: 5px;
    margin: 5px;
    font-weight: bold;
    &:focus{
        outline: none !important;
        border-color: #a87a64;
        box-shadow: 0 0 5px #cca7a1;
    } 
    @media screen and (max-width: 600px){
        width: 350px;
    }
`;

const TextArea = styled.textarea`
    font-family: 'FontAwesome';
    width: 550px;
    padding: 5px;
    margin: 5px;
    font-weight: bold;
    &:focus{
        outline: none !important;
        border-color: #9F3931;
        box-shadow: 0 0 5px #cca7a1;
    }
    @media screen and (max-width: 600px){
        width: 350px;
`;

const Button = styled.button`
    display: flex; 
    border: none; 
    background-color: transparent; 
    color: #9F3931;
    font-size: 20px;
    font-weight: bold;
    margin: auto;
    margin-top: 20px;
    &:hover{
        cursor: pointer;
        color: #F9B2C1;
    }
`;

const Errors = styled.p`
    font-size: 12px;
    color: red; 
    margin: 0;   
`;

function ContactForm() {
    const { cursorChangeHandler } = useContext(MouseContext);

    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            message: '',
        },

        validate: {
            email: (value) => MailChecker.isValid(value) ? null : 'Invalid email',
        },
    });
   
    const handleFormSubmit = useCallback((values) => {
        fetch('http://localhost:3001/contact', { //*
            method: "POST", 
            body: JSON.stringify(values), 
            headers: {
              'Content-type': 'application/json'
            }
          })
            .then((res) => res.text())
            .then(text => console.log(text))
    }, []);



    return (
        <div style={{ maxWidth: 650, margin: 'auto' }}>
            <form onSubmit={form.onSubmit(handleFormSubmit)}>
                <InputBox type="text" placeholder=" &#xf0e0;  Email"
                    {...form.getInputProps('email')} />

                <Errors>{form.errors.email}</Errors>

                <InputBox type="text" placeholder=" &#xf007;   Name"
                    {...form.getInputProps('name')} />

                <TextArea type="text" placeholder=" &#xf075;  Message" rows="10"
                    {...form.getInputProps('message')} />
        <div
        onMouseEnter = {() => cursorChangeHandler("hovered")}
        onMouseLeave = {() => cursorChangeHandler("")}> 
                <Button type="submit">Send</Button>
        </div>
            </form>
        </div>
    );

}
   
export default ContactForm;