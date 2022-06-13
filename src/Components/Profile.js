import { FormSubmit } from "./Autorization";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { ExitUser } from "../store/reducers/authorizationSlices";

function Profile(){
    const dispatch = useDispatch();

    const ExitHandler = (e)=>{
        dispatch(ExitUser());
    }
    return (
        <ProfileBlock>
            <ButtonExit onClick={ExitHandler}>
                Exit
            </ButtonExit>
        </ProfileBlock>
    )
}

export default Profile;

const ProfileBlock = styled.div`
    /* border: 1px solid red; */
    position: relative;
    z-index: 3;
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`;

const ButtonExit = styled(FormSubmit)`
    border-radius: 0;
    margin: 0;
`;