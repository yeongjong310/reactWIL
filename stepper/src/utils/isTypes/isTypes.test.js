import { isArray, isObject, isString } from './isTypes';

describe(('isTypes 테스트'), () => {
  // isArray

  // isArray([1,2,3]) => true
  test('isArray는 배열을 입력한 경우 true를 반환한다.', () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });
  
  test('isArray는 객체를 입력한 경우 false를 반환한다.', () => {
    expect(isArray({})).toBe(false);
  })

  test('isArray는 원시값을 입력한 경우 false를 반환한다.', () => {
    expect(isArray('123')).toBe(false);
  })

  // isString

  // isString('123') => true
  test('isString은 문자를 입력한 경우 true를 반환한다.', () => {
    expect(isString('123')).toBe(true);
  });
  
  test('isString은 숫자를 입력한 경우 false를 반환한다.', () => {
    expect(isString(123)).toBe(false);
  })

  test('isString은 객체를 입력한 경우 false를 반환한다.', () => {
    expect(isString({})).toBe(false);
  })

  // isObject

  // isObject({}) => true
  test('isObject는 객체를 입력한 경우 true를 반환한다.', () => {
    expect(isObject({})).toBe(true);
  });
  
  test('isObject는 배열을 입력한 경우 false를 반환한다.', () => {
    expect(isObject([])).toBe(false);
  })

  test('isObject는 원시값을 입력한 경우 false를 반환한다.', () => {
    expect(isObject('123')).toBe(false);
  })
});