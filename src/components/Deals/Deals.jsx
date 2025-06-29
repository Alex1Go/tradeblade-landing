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
    time: '1 min ago',
    profit: '58.6206%',
    goal: 'Target 4',
    date: '06.10.2022',
  },
  {
    pair: 'BTC/USDT',
    type: 'SPOT',
    time: '3 min ago',
    profit: '6.02%',
    goal: 'Target 3',
    date: '06.10.2022',
  },
  {
    pair: 'ETH/USDT',
    type: 'SPOT',
    time: '5 min ago',
    profit: '16.3%',
    goal: 'Target 2',
    date: '06.10.2022',
  },
  {
    pair: 'NEAR/USDT',
    type: 'SPOT',
    time: '10 min ago',
    profit: '0.963%',
    goal: 'Target 1',
    date: '06.10.2022',
  },
  {
    pair: 'ETH/USDT',
    type: 'SPOT',
    time: '5 min ago',
    profit: '16.3%',
    goal: 'Target 2',
    date: '06.10.2022',
  },
  {
    pair: 'NEAR/USDT',
    type: 'SPOT',
    time: '10 min ago',
    profit: '0.963%',
    goal: 'Target 1',
    date: '06.10.2022',
  },
];

const Deals = () => {
  return (
    <DealsSection>
      <DealsContainer>
        <DealsTitle>PAST TRANSACTIONS</DealsTitle>
        <Status>● Online</Status>
        <DealsList>
          {dealsData.map((deal, index) => (
            <DealCard key={index}>
              <DealHeader>
                <DealSpan>{deal.pair}</DealSpan>
                <Dealtext>
                  {deal.type} · {deal.time}
                </Dealtext>
              </DealHeader>
              <DealTitle>Profit</DealTitle>
              <Profit>{deal.profit} ↑</Profit>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Goal>{deal.goal}</Goal>
                <EntryDate>Release date {deal.date}</EntryDate>
              </div>
            </DealCard>
          ))}
        </DealsList>
      </DealsContainer>
    </DealsSection>
  );
};

export default Deals;
