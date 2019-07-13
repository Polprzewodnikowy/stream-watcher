import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const Delay = (Component) => {
  const DelayWrapper = ({
    delayKey,
    delayValue,
    delayTimeOn,
    delayTimeOff,
    ...props
  }) => {
    const [timer, setTimer] = useState(null);
    const [delayed, setDelayed] = useState(delayValue);

    useEffect(() => {
      clearTimeout(timer);
      const delayTime = delayValue ? delayTimeOn : delayTimeOff;
      if (delayTime) {
        const timeout = setTimeout(() => {
          setDelayed(delayValue);
        }, delayTime);
        setTimer(timeout);
      } else {
        setDelayed(delayValue);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delayValue, delayTimeOn, delayTimeOff]);

    const delayProps = { [delayKey]: delayed };

    return <Component {...props} {...delayProps} />;
  };

  DelayWrapper.defaultProps = {
    delayKey: 'delayed',
    delayTimeOff: 750,
    delayTimeOn: 0,
    delayValue: null,
  };

  DelayWrapper.propTypes = {
    delayKey: PropTypes.string,
    delayTimeOff: PropTypes.number,
    delayTimeOn: PropTypes.number,
    delayValue: PropTypes.bool,
  };

  return DelayWrapper;
};

export default Delay;
