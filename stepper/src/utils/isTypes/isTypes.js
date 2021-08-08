export const isArray = data => Array.isArray(data);
export const isString = data => typeof data === 'string';
export const isObject = data => Object.prototype.toString.call(data).slice(8, 14) === 'Object';