import React from 'react';
import {
  DealsSection,
  DealsContainer,
  DealsTitle,
  Status,
  DealsList,
  DealCard,
  DealHeader,
  Profit,
  Goal,
  EntryDate,
  DealSpan,
  Dealtext,
  DealTitle,
} from './Deals.styled';

const dealsData = [
  {
    pair: 'NEAR/USDT',
    type: 'SPOT',
    time: '1 мин. назад',
    profit: '58.6206%',
    goal: 'Цель 4',
    date: '06.10.2022',
  },
  {
    pair: 'BTC/USDT',
    type: 'SPOT',
    time: '3 мин. назад',
    profit: '6.02%',
    goal: 'Цель 3',
    date: '06.10.2022',
  },
  {
    pair: 'ETH/USDT',
    type: 'SPOT',
    time: '5 мин. назад',
    profit: '16.3%',
    goal: 'Цель 2',
    date: '06.10.2022',
  },
  {
    pair: 'NEAR/USDT',
    type: 'SPOT',
    time: '10 мин. назад',
    profit: '0.963%',
    goal: 'Цель 1',
    date: '06.10.2022',
  },
  {
    pair: 'ETH/USDT',
    type: 'SPOT',
    time: '5 мин. назад',
    profit: '16.3%',
    goal: 'Цель 2',
    date: '06.10.2022',
  },
  {
    pair: 'NEAR/USDT',
    type: 'SPOT',
    time: '10 мин. назад',
    profit: '0.963%',
    goal: 'Цель 1',
    date: '06.10.2022',
  },
];

const Deals = () => {
  return (
    <DealsSection>
      <DealsContainer>
        <DealsTitle>ПРОШЕДШИЕ СДЕЛКИ</DealsTitle>
        <Status>● Онлайн</Status>
        <DealsList>
          {dealsData.map((deal, index) => (
            <DealCard key={index}>
              <DealHeader>
                <DealSpan>{deal.pair}</DealSpan>
                <Dealtext>
                  {deal.type} · {deal.time}
                </Dealtext>
              </DealHeader>
              <DealTitle>Прибыль</DealTitle>
              <Profit>{deal.profit} ↑</Profit>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Goal>{deal.goal}</Goal>
                <EntryDate>Дата входа {deal.date}</EntryDate>
              </div>
            </DealCard>
          ))}
        </DealsList>
      </DealsContainer>
    </DealsSection>
  );
};

export default Deals;
