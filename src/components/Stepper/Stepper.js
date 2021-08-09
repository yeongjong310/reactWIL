import './Stepper.css';
import { Component } from 'react';
import { A11yHidden, AngleButton } from 'components'
import { shape, exact, string, bool, number, oneOfType, oneOf } from 'prop-types';

const StringOrNumberType = oneOfType([number, string]);

const ButtonType = shape({
  label: string,
  withTitle: bool,
});

const ButtonPropsType = exact({
  minus: ButtonType,
  plus: ButtonType,
});

export class Stepper extends Component{
  static defaultProps = {
    mode: 'horizontal',
    buttonProps: {
      minus: {
        label: '카운트 감소',
        withTitle: true,
      },
      plus: {
        label: '카운트 증가',
        withTitle: true,
      }
    },
    min: 0,
    max: 10,
    current: 0,
    step: 1,
  };

  static propTypes = {
    id: string.isRequired,
    mode: oneOf(['vertical', 'horizontal']),
    buttonProps: ButtonPropsType,
    min: StringOrNumberType,
    max: StringOrNumberType,
    current: StringOrNumberType,
    step: StringOrNumberType,
  };

  state = {
    count: +this.props.current
  }

  static getDerivedStateFromProps({ min, max }, { count }) {
    const updateCount = count < min ? min : count > max ? max : count;
  
    return {
      isMinCount: min >= count,
      isMaxCount: max <= count,
      count: updateCount,
    };
  }

  handleUpdate = type => {
    this.setState(
      ({count}, {step}) => ({
        count: count + step * (type === 'increment' ? 1: -1),
      })
    );
  };

  render() {
    const { count, isMinCount, isMaxCount } = this.state;
    const { id, mode, buttonProps: { plus, minus} } = this.props;
  
    return(
      <div 
        role="timer"
        aria-live="polite"
        aria-atomic="true"
        aria-describedby={id}
        className={`stepper__${mode}`}
      >  
        <A11yHidden id={id}>
          증가 또는 감소 버튼을 눌러, 스텝퍼의 값을 변경할 수 있습니다.
        </A11yHidden>

        <AngleButton 
          direction={mode === 'horizontal' ? 'left' : 'up'} 
          onClick={() => {this.handleUpdate(mode === 'horizontal' ? 'decrement' : 'increment')}}
          aria-label={mode === 'horizontal' ? minus.label : plus.label}
          title={mode === 'horizontal' ? minus.withTitle && minus.label : plus.withTitle && plus.label}
          disabled={mode === 'horizontal' ? isMinCount : isMaxCount}
        />

        <output className="output">{count}</output>

        <AngleButton 
          direction={mode === 'horizontal' ? 'right' : 'down'} 
          onClick={() => this.handleUpdate(mode === 'horizontal' ? 'increment' : 'decrement')}
          aria-label={mode === 'horizontal' ? plus.label : minus.label}
          title={mode === 'horizontal' ? plus.withTitle && plus.label : minus.withTitle && minus.label}
          disabled={mode === 'horizontal' ? isMaxCount : isMinCount}
        />
      </div>
    )
  }
}