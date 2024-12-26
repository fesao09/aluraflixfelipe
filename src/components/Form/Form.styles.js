import styled from 'styled-components';

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 1172px;
    background: #262626;
    padding: 20px;
    border-radius: 10px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
`;

export const FormLabel = styled.label`
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF;
`;

export const FormInput = styled.input`
    background: #191919;
    border: 3px solid #262626;
    border-radius: 10px;
    padding: 15px;
    font-size: 20px;
    color: #A5A5A5;
    &:focus {
        outline: none;
        border-color: #2271D1;
    }
`;

export const FormTextArea = styled.textarea`
    background: #191919;
    border: 3px solid #262626;
    border-radius: 10px;
    padding: 15px;
    font-size: 20px;
    color: #A5A5A5;
    resize: vertical;
    height: 100px;
    &:focus {
        outline: none;
        border-color: #2271D1;
    }
`;

export const FormSelect = styled.select`
    background: #191919;
    border: 3px solid #262626;
    border-radius: 10px;
    padding: 15px;
    font-size: 20px;
    color: #A5A5A5;
    &:focus {
        outline: none;
        border-color: #2271D1;
    }
`;

export const FormButton = styled.button`
    background-color: #2271D1;
    color: white;
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #1c5e9b;
    }
    &:active {
        background-color: #17467a;
    }
`;

export const FormActions = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
`;

