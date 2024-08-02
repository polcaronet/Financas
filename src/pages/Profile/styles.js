import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #F0F4FF;
    align-items: center;
`;
export const Message = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 24px;
    color: #323c44;
`;

export const Name = styled.Text`
    font-size: 42px;
    font-family: 'DancingScript_700Bold';
    margin-bottom: 24px;
    margin-top: 8px;
    padding: 0 14px;
    color: #121220;
`;

export const NewLink = styled.TouchableOpacity`
    background-color: #3B3DBF;
    width: 90%;
    height: 45px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
`;

export const NewText = styled.Text`
   font-size: 18px;
   font-weight: bold;
   font-family: 'DancingScript_700Bold';
   color: #FFF;
`;

export const LogoutButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 45px;
    border-color: #323c44;
`;

export const LogoutText = styled.Text`
    font-Family: 'Roboto_700Bold';
    margin-top: 20px;
    background-Color: #0C5BDD; 
    text-Align: center;
    border-Radius: 4px;
    border-radius: 8px;
    font-Size: 16px;
    padding: 10px;
    width: 100%;
    height: 45px;
    color: #FFF;
`;