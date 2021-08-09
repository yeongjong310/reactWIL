import { AngleButton } from './AngleButton';
import { render } from '@testing-library/react';
describe('<AngleIcon />', () => {
  let angleButton;

  beforeEach(() => {
    
  })

  test('AngleButton 컴포너트의 루트 요소는 button이다.', () => {
    const { getByTestId } = render(<AngleButton />)
    angleButton = getByTestId('angleBtn');

    expect(angleButton.localName).toBe('button');
  });

  test('direction이 right라면 angleBtn__right 클래스를 적용한다.', () => {
    const { getByTestId } = render(<AngleButton direction='right'/>)
    angleButton = getByTestId('angleBtn');
    expect(angleButton).toHaveClass('angleBtn__right');
  });

  test('direction이 left라면 angleBtn__left 클래스를 적용한다.', () => {
    const { getByTestId } = render(<AngleButton direction='left'/>)
    angleButton = getByTestId('angleBtn');
    expect(angleButton).toHaveClass('angleBtn__left');
  });

  test('disabled가 true면 disabled attribute를 추가한다.', () => {
    let { getByTestId } = render(<AngleButton disabled/>)
    angleButton = getByTestId('angleBtn');
    expect(angleButton).toHaveAttribute('disabled');
  });
});
