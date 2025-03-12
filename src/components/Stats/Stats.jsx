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
          <Title>ЦИФРЫ</Title>
          <Subtitle>Сентябрь 2022</Subtitle>
        </div>
        <StatsGrid>
          <StatItem>
            <StatLabel>ТОРГОВОЙ ПРИБЫЛИ</StatLabel>
            <StatValue>2756%</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>ФЬЮЧЕРСНЫХ И СПОТОВЫХ СДЕЛОК</StatLabel>
            <StatValue>67</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>ПРИБЫЛЬ ПОДПИСЧИКОВ</StatLabel>
            <StatValue>375000</StatValue>
          </StatItem>
        </StatsGrid>
      </StatsContainer>
    </StatsSection>
  );
};

export default Stats;
