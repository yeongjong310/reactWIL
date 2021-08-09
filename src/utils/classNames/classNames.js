import { isString, isObject } from 'utils';

export const classNames = (...classNames) => 
  classNames.map(className => {
    if (isString(className)) return className;
    if (isObject(className)) {
      const filteredObj = Object.entries(className).filter(([_, value]) => value === true);
      
      return filteredObj.map(([key]) => key).join(' ');
    }
    return '';
  }).join(' ');