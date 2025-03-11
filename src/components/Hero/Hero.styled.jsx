import styled from 'styled-components';

export const HeroSection = styled.section`
  padding-top: 40px;
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px 20px;
  } */
`;

export const TradeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const TradeBox = styled.div`
  border-radius: 4px;
  width: 176px;
  height: 104px;
  padding: 6px 10px;
  border: ${({ dashed }) => (dashed ? '1px dashed  #6a54ff' : 'none')};
  background: ${({ dashed }) => (dashed ? 'none' : ' #6a54ff')};
  color: #ffffff;
  font-size: 18px;
  text-align: center;
`;

export const TradeText = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const HeroContent = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #6c63ff;
  border-radius: 4px;
  background: transparent;
  color: #ffffff;

  &::placeholder {
    color: #6c63ff;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background: #57e1ff;
  color: #030718;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0097a7;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
