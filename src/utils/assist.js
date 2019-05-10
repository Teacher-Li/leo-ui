/**
 * Created by leo on 2018/12/11.
 */

export function oneOf (value, todos) {
  return todos.some(todo => todo === value);
}

export function removeOne (value, todos) {
  const index = todos.indexOf(value);
  index > -1 && todos.splice(index, 1);

  return todos;
}

export function isInclude (value, min, max) {
  return value <= max && value >= min;
}

export function getExtremum (value, min, max) {
  return Math.min(max, Math.max(min, value));
}

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

export function getStyle (element, styleName) {
  if (!element || !styleName) return null;

  styleName = camelCase(styleName);
  if (styleName === 'float') { styleName = 'cssFloat' };

  try {
    const computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch(e) {
    return element.style[styleName];
  }
}