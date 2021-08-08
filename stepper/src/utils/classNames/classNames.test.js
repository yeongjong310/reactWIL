import { classNames } from './classNames';

describe('classNames 테스트', () => {
  test('classNames("testName")은 입력받은 "testName"을 반환한다.', () => {
    expect(classNames('testName')).toBe('testName');
  });

  // classNames({ testName1: true, testName2: false, testName3: true })  => 'testName1 testName3'
  test('객체를 입력받은 경우 value 가 true인 프로퍼티 키만을 string으로 반환한다.', () => {
    expect(classNames({ testName1: true, testName2: false, testName3: true })).toBe('testName1 testName3');
  })

  // classNames('testName1', { testName2: true, testName3: false, testName4: true }))
  // => 'testName1 testName2 testName4'
  test('객체와 스트링으로 혼합된 경우', () => {
    expect(classNames('testName1', { testName2: true, testName3: false, testName4: true }))
    .toBe('testName1 testName2 testName4');
  })
})