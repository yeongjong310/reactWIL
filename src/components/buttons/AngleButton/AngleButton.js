import buttonStyle from './AngleButton.module.css';

import { ReactComponent as AngleIconSVG } from 'assets/icons/angle-normal.svg';
import { oneOf } from 'prop-types';

export function AngleButton({direction, disabled, ...restProps}) {
  console.log(restProps)
  return (
    <button
      data-testid="angleBtn"
      className={buttonStyle[direction]}
      disabled={disabled}
      {...restProps}
    >
      <AngleIconSVG />
    </button>
  )
}

AngleButton.defaultProps = {
  direction: 'left'
}

AngleButton.propTypes = {
  direction: oneOf(['left', 'right', 'up', 'down']),
  disabled: oneOf([null, false, true])
}