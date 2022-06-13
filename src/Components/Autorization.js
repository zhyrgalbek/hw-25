import styled, {css} from 'styled-components';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { FetchUser } from '../store/reducers/authorizationSlices';

function Authorization() {
    const [gmailValue, setGmail] = useState('');
    const [gmailIsValid, setGmailIsValid] = useState(true);

    const [passwordValue, setPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(true);

    const [gmailIsBlur, setGmailIsBlur] = useState(false);
    const [passwordIsBlur, setPasswordIsBlur] = useState(false);

    const [gmailIsClasses, setGmailIsClasses] = useState(false);
    const [passwordIsClasses, setPasswordIsClasses] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(gmailIsBlur && gmailIsValid){
            setGmailIsClasses(true);
        } else {
            setGmailIsClasses(false);
        }
        if(passwordIsBlur && passwordIsValid){
            setPasswordIsClasses(true);
        } else {
            setPasswordIsClasses(false);
        }
    }, [gmailIsBlur, passwordIsBlur, gmailIsValid, passwordIsValid])

    const gmailBlurHandler = (e)=>{
        setGmailIsBlur(true);
    }

    const passwordBlurHandler = (e)=>{
        setPasswordIsBlur(true);
    }

    const GmailValueChangeHandler = (e)=>{
        let value = e.target.value;
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        if(validEmailRegex.test(value)){
            setGmailIsValid(false);
        } else {
            setGmailIsValid(true);
        }
        setGmail(value);
    }

    const PasswordValueChangeHandler = (e)=>{
        let value = e.target.value;
        if(value.trim() === '' || value.trim().length > 5){
            setPasswordIsValid(true);
        } else {
            setPasswordIsValid(false);
        }
        setPassword(value);
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if(gmailIsBlur === false || passwordIsBlur === false){
            setGmailIsBlur(true);
            setPasswordIsBlur(true);
            return;
        }
        if(gmailIsClasses === true || passwordIsClasses === true){
            return;
        }
        dispatch(FetchUser({
            gmail: gmailValue,
            password: passwordValue
        }))
    }

    return (
        <FormBlock>
            <Form onSubmit={submitHandler}>
                <BlockHeader>Sign in</BlockHeader>
                <Label>UserName</Label>
                <Input type="gmail" 
                    primary={gmailIsClasses} 
                    onBlur={gmailBlurHandler} 
                    value={gmailValue} 
                    onChange={GmailValueChangeHandler} 
                />
                <Label>password</Label>
                <Input type="password" 
                    primary={passwordIsClasses} 
                    onBlur={passwordBlurHandler} 
                    value={passwordValue} 
                    onChange={PasswordValueChangeHandler} 
                />
                <FormSubmit>Sign in</FormSubmit>
            </Form>
        </FormBlock>
    )
}

export default Authorization;

const Label = styled.label`
    text-transform: uppercase;
    color: #ADB0B5;
    font-weight: bold;
    text-align: left;
    padding-bottom: 5px;
`

export const FormSubmit = styled.button`
    background-color: #015EF7;
    padding: 1rem 2rem;
    border-radius: 30px;
    border: 1px solid #015EF7;
    cursor: pointer;
    margin-top: 30px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bolder;
    position: relative;
    z-index: 3;
`;

const Input = styled.input`
    padding: 1rem 2rem;
    border-radius: 30px;
    margin-bottom: 15px;
    border: none;
    outline: none;
    background-color: #8998b7;
    opacity: 0.7;
    font-size: 1.2rem;
    color: #fff;
    ${props=>props.primary && css`
        border: 1px solid red;
        color: red;
    `}
`

const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    padding: 20px 40px;
    border: 1px solid #8998b7;
    border-radius: 10px;
`

const BlockHeader = styled.h2`
    text-transform: uppercase;
    color: #fff;
    text-align: left;
`

const FormBlock = styled.div`
    /* border: 1px solid red; */
    width: 500px;
    height: 500px;
    position: relative;
    z-index: 3;
    margin: 0 auto;
    padding-top: 13vh;
`;

export const BackgorundApp = styled.div`
    background-image: url('https://img2.goodfon.ru/wallpaper/nbig/6/46/new-york-new-york-city-46.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 1;
    &:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #3A4D78;
        opacity: 84%;
        z-index: 2;
    }
`;