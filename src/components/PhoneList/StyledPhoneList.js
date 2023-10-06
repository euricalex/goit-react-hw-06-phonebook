import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  color: white;


  padding: 30px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  flex-wrap: wrap; /* Разрешаем перенос элементов на новый ряд */
`;

export const StyledItem = styled.li`
margin-bottom: 20px;
  background-color: black;
  padding: 20px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
