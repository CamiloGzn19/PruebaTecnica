import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 200px;
  margin-top: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  border: 0;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const Tle = styled.h1`
  padding-top: 30px;
  font-size: 28px;
  margin-bottom: 20px;
`;

export const Lab = styled.label`
  text-align: right;
  margin-left: 35px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: "Merriweather", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  font-weight: 400;
`;

export const Inp = styled.input`
  width: 83%;
  height: 30px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid #c2c2c2;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
`;

export const Red = styled.button`
  border: 0;
  background-color: transparent;
  width: 60px;
  cursor: pointer;
`;

export const Stam = styled.img`
  width: 40px;
`;

export const Check = styled.button`
  width: 294px;
  height: 40px;
  margin-top: 20px;
  background: linear-gradient(
    0deg,
    rgba(241, 197, 87, 1) 0%,
    rgba(246, 222, 162, 1) 100%
  );
  border: 1px solid gray;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  cursor: pointer;
`;

export const Reg = styled.button`
  width: 294px;
  height: 40px;
  margin-top: 20px;
  background: linear-gradient(
    0deg,
    rgba(241, 197, 87, 1) 0%,
    rgba(246, 222, 162, 1) 100%
  );
  border: 1px solid gray;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  cursor: pointer;
`;

export const Art = styled.h5`
  font-size: 12px;
  font-family: "Merriweather", serif;
  font-weight: 900;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`;