import { useState } from 'react';
import Statistics from './statistics/statistics';
import FeedbackOptions from './feedback-options/feedback-options';
import Notification from './notification/notification';

function App () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = name => {
    switch (name) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      default:
        return
    }
  };

  const total = good + neutral + bad;
  const positiveFeedback = Math.trunc((good / (good + neutral + bad)) * 100);

    return (
      <div>
        <section>
          <h2>Please leave feedback</h2>
          <div className="btns">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={handleClick}
            />
          </div>
          <div>
            {good > 0 || neutral > 0 || bad > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positiveFeedback={good === 0 ? 0 : positiveFeedback}
              />
            ) : (
              <Notification text="Here is no feedback" />
            )}
          </div>
        </section>
      </div>
    );
  }

export default App;
