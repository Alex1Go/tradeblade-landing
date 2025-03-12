import styled from 'styled-components';
import deals from '../../assets/img/deals.png';
import { globalColor } from '../../styles/root';

export const DealsSection = styled.section`
  padding-top: 48px;
  padding-bottom: 77px;

  @media (min-width: 1440px) {
    padding-top: 96px;
    padding-bottom: 118px;
  }
`;

export const DealsContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;

  @media (min-width: 1440px) {
    padding: 0;
  }
`;
export const DealsTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 2px;

  @media (min-width: 1440px) {
    font-size: 44px;
    margin-bottom: 4px;
    line-height: 127%;
  }
`;

export const Status = styled.p`
  font-size: 14px;
  color: #35ff9e;
  opacity: 0.9;
  margin-bottom: 24px;

  @media (min-width: 1440px) {
    margin-bottom: 72px;
  }
`;
export const DealsList = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 16px;

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 100%;
    height: 6px;
    background: #434f70;
    opacity: 0.4;
    border-radius: 56px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 56px;
  }
  @media (min-width: 1440px) {
    gap: 20px;
    padding-bottom: 24px;
  }
`;

export const DealCard = styled.div`
  background-image: url(${deals});
  border-radius: 4px;
  padding: 16px 16px 13px 16px;
  width: 299px;
  height: 208px;
  flex-shrink: 0;
`;

export const DealHeader = styled.div`
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  color: ${globalColor.colorWhite};
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

export const DealSpan = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: ${globalColor.colorWhite};
  margin-bottom: 2px;
`;

export const Dealtext = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  text-transform: uppercase;
  opacity: 0.4;
`;
export const DealTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: 2px;
`;

export const Profit = styled.p`
  font-weight: 500;
  font-size: 28px;
  text-transform: uppercase;
  color: #35ff9e;
  margin-right: 15px;
  margin-bottom: 9px;
`;

export const Goal = styled.p`
  font-weight: 500;
  font-size: 14px;
  opacity: 0.7;
`;

export const EntryDate = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: right;
  opacity: 0.4;
`;

// /* === СТИЛИЗАЦИЯ SCROLLBAR (slick-dots) === */
// export const DealsContainerStyled = styled.div`
//   .slick-dots {
//     position: absolute;
//     bottom: -20px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 80%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .slick-dots li {
//     list-style: none;
//     width: 100%;
//     height: 6px;
//     background: rgba(255, 255, 255, 0.3);
//     border-radius: 3px;
//     margin: 0 5px;
//     transition: background 0.3s;
//     cursor: pointer;
//   }

//   .slick-dots li.slick-active {
//     background: #35ff9e;
//   }
// `;
