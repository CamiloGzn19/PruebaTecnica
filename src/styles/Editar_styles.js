import styled from "styled-components";

export const Gen = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Card = styled.div`
  width: 30%;
  flex-direction: column;
  border: 1px solid #a2a2a2;
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  font-size: 25px;
  margin-left: 30px;
  padding-top: 10px;
  font-family: "Merriweather", serif;
  font-weight: 900;
  letter-spacing: -1px;
`;

export const BtnClo = styled.button`
  cursor: pointer;
  width: 400px;
  height: 40px;
  margin-top: 5px;
  color: white;
  background-color: #508c04;
  box-shadow: 3px 3px 8px -2px #959595;
  border: 0;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  margin-left: 30px;
  &:active{
    opacity: .8;
  }
`;

export const BtnPro = styled.button`
  cursor: pointer;
  width: 60px;
  height: 20px;
  background-color: gray;
  color: white;
  margin-left: 20px;
  border: 0;
  border-radius: 5px 5px 5px 5px;
  font-family: "Roboto", sans-serif;
  opacity: 1;
  &:hover {
    background-color: #252525;
  }
`;

export const BtnPro2 = styled.button`
  cursor: pointer;
  width: 60px;
  height: 20px;
  background-color: #ce4a4a;
  color: white;
  margin-left: 20px;
  border: 0;
  border-radius: 5px 5px 5px 5px;
  font-family: "Roboto", sans-serif;
  opacity: 0.8;
  &:hover {
    opacity: 1;
    background-color: #e60000;
  }
`;
