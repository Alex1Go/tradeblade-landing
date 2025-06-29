import React from 'react';
import {
  StatsSection,
  StatsContainer,
  Title,
  Subtitle,
  StatsGrid,
  StatItem,
  StatLabel,
  StatValue,
  Trap,
} from './Stats.styled';

const Stats = () => {
  return (
    <StatsSection id="stats">
      <Trap></Trap>
      <StatsContainer>
        <div>
          <Title>NUMBERS</Title>
          <Subtitle>September 2022</Subtitle>
        </div>
        <StatsGrid>
          <StatItem>
            <StatLabel>TRADING PROFIT</StatLabel>
            <StatValue>2756%</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>FUTURES AND SPOT TRANSACTIONS</StatLabel>
            <StatValue>67</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>SUBSCRIBERS' PROFIT</StatLabel>
            <StatValue>375000</StatValue>
          </StatItem>
        </StatsGrid>
      </StatsContainer>
    </StatsSection>
  );
};

export default Stats;
