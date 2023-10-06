import styled from 'styled-components';

export const StyledFilter = styled.div`
  text-align: center;
  background-color: black;
  border-radius: 10px;
  text-align: center;
  width: 200px;
  margin: auto;
  padding: 20px 60px;
  border-radius: 15px;
  color: white;
`;
export const StyledInput = styled.input `
padding-top: 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: red; /* Цвет границы при фокусе */
  }`;