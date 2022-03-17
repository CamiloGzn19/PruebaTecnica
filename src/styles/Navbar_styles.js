import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  height: 80px;
  background-color: #508c04;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h1`
  cursor: pointer;
  font-size: 40px;
  margin-left: 80px;
  font-family: "Merriweather", serif;
  font-weight: 900;
  letter-spacing: -1px;
  color: white;
`;

export const BtnSes = styled.button`
  cursor: pointer;
  width: 150px;
  height: 30px;
  margin-right: 80px;
  font-family: "Roboto", sans-serif;
  background-color: #3d3d3d;
  color: white;
  border: 0;
  border-radius: 5px;
`;
