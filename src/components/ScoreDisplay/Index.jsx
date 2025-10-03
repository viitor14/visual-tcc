import { CardScore, BoxResult, BoxResultInfo, ProgressBar, NumScore, MaxNumScore } from './styled';
import PropTypes from 'prop-types';
export default function ScoreDisplay({ score, maxScore, problems }) {
  return (
    <CardScore>
      <p>Score de acessibilidade</p>
      <p>
        <NumScore>{score}</NumScore> <MaxNumScore>/{maxScore}</MaxNumScore>
      </p>
      <ProgressBar value={score} max={maxScore} />
      <BoxResult>
        {problems.map((problem) => (
          <BoxResultInfo key={problem.id} type={problem.type}>
            <p>{problem.numProblem}</p>
            <p>{problem.label}</p>
          </BoxResultInfo>
        ))}
      </BoxResult>
    </CardScore>
  );
}

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
  maxScore: PropTypes.number,
  problems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      numProblem: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

ScoreDisplay.defaultProps = {
  maxScore: 100,
  problems: []
};
