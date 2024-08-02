import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
     flex: 1;
     background-color: #F0F4FF;
`;

export const ListBalance = styled.FlatList`
     max-height: 190px;
`;

export const Area = styled.View`
     margin-top: 20px;
     background-color: #FFF;
     border-top-left-radius: 15px;
     border-top-right-radius: 15px;
     flex-direction: row;
     padding-right: 14px;
     padding-top: 14px;
     flex-direction: row;
     justify-content: baseline;
     padding-left: 1px;
`;

export const Title = styled.Text`
     margin-left: 5px;
     color: #121212;
     margin-bottom: 14px;
     font-weight: bold;
     font-size: 18px;
     font-family: 'Poppins_500Medium';
     
`;

export const List = styled.FlatList`
     flex: 1;
     background-color: #FFF;
`;