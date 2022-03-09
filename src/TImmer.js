import * as React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Timmer = (props) => (
  <CountdownCircleTimer
  
    isPlaying={props.play}
    duration={props.duration}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}

    onComplete={() => [true, 1000]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
)
export default Timmer