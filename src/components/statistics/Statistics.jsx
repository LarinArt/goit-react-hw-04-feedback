import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
  StatisticsValue,
} from './Statistics.style';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <StatisticsText>
          Good: <StatisticsValue>{good}</StatisticsValue>
        </StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>
          Neutral: <StatisticsValue>{neutral}</StatisticsValue>
        </StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>
          Bad: <StatisticsValue>{bad}</StatisticsValue>
        </StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>
          Total: <StatisticsValue>{total}</StatisticsValue>
        </StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>
          Positive feedback:
          <StatisticsValue>{positivePercentage}</StatisticsValue>
        </StatisticsText>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
