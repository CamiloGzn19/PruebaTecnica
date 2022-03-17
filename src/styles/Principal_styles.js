import styled from "styled-components";

// Contenedores

export const Gen = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Card = styled.div`
  width: 40%;
  flex-direction: column;
  border: 1px solid #a2a2a2;
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const Rec = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Opt = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const Det = styled.div`
  display: inline-flex;
  height: 50px;
  padding-bottom: 10px;
  padding-top: 10px;
  align-items: center;
  width: 100%;
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const BtnChe = styled.div`
  display: flex;
  flex-direction: row;
  width: 50px;
  margin-left: 10px;
`;

export const BtnChe2 = styled.div`
  display: flex;
  margin-left: 0px;
`;

export const BtnSel = styled.button`
  border: 0;
  cursor: pointer;
  background-color: transparent;
`;

export const Esp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Pef = styled.div`
  display: flex;
  margin-right: 30px;
`;

export const Prop = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;

export const Item = styled.div`
  margin-top: 20px;
  width: 100%;
  margin-left: 30px;
`;

export const Fina = styled.div`
  width: 100px;
  margin-left: 30px;
`;

export const Fina2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

// Textos

export const Not = styled.h6`
  font-family: "Roboto", sans-serif;
  margin-left: 30px;
`;

export const Title = styled.h1`
  font-size: 25px;
  margin-left: 30px;
  padding-top: 10px;
  font-family: "Merriweather", serif;
  font-weight: 900;
  letter-spacing: -1px;
`;

export const Title2 = styled.h1`
  font-size: 20px;
  margin-left: 30px;
  padding-top: 10px;
  font-family: "Merriweather", serif;
  font-weight: 900;
  letter-spacing: -1px;
`;

// Detalles articulo

export const Art = styled.h5`
  font-size: 12px;
  font-family: "Merriweather", serif;
  font-weight: 900;
  text-align: left;
`;

export const Art2 = styled.h5`
  font-size: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: gray;
  text-align: left;
`;

export const Art3 = styled.h5`
  font-size: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: left;
`;

export const Utl = styled.h4`
  font-size: 12px;
  padding-left: 10px;
  padding-bottom: 10px;
  color: blue;
  font-family: "Roboto", sans-serif;
`;

export const Priz = styled.h5`
  color: #508c04;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

export const Lit = styled.h5`
  color: gray;
  padding-bottom: 15px;
  font-family: "Roboto", sans-serif;
  text-align: left;
`;

export const Lit2 = styled.h5`
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

export const Lit3 = styled.h5`
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-right: 30px;
  color: black;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
`;

// Botones

export const BtnPro = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

export const Lab = styled.label`
  font-size: 12px;
  margin-left: 20px;
`;

export const Pag = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnBuy = styled.button`
  cursor: pointer;
  width: 300px;
  height: 40px;
  margin-top: 5px;
  color: white;
  background-color: #508c04;
  box-shadow: 3px 3px 8px -2px #959595;
  border: 0;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
`;

export const BtnEdit = styled.button`
  cursor: pointer;
  width: 300px;
  height: 40px;
  margin-top: 50px;
  color: white;
  background-color: #508c04;
  box-shadow: 3px 3px 8px -2px #959595;
  border: 0;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
`;

// Separaciones

export const Sep = styled.hr`
  width: 99%;
  background-color: blue;
`;

export const Sep2 = styled.hr`
  width: 99%;
  background-color: #d1d1d1;
  border: 1px solid #d1d1d1;
`;

export const Inp = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  height: 40px;
  width: 40px;
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;

// Imágen

export const Imag = styled.img`
  width: 300px;
  height: 300px;
  border: 0;
  border-radius: 5px 5px 5px 5px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
