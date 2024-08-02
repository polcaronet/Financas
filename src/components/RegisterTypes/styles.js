import styled from "styled-components/native";

export const RegisterContainer = styled.View` 
    flex-direction: row;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
    align-items: center;
`;
export const RegisterTypeButton = styled.TouchableOpacity` 
    background-color: ${props => props.checked ? '#FFF' : '#E7E7E7'};
    width: 48%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 45px;
    border-radius: 4px;
    border-width: 1.5px;
    border-color: ${props => props.checked ? '#3458EF' : 'transparent'};
    margin-bottom: 14px;
`;
export const RegisterLabel = styled.Text` 
    margin-left: 8px;
    font-family: 'Poppins_500Medium';
    font-size: 17px;
`;