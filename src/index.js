import _ from 'lodash'
import { NiJou } from './utillities'

console.log(NiJou(2));

function component() {
  const element = document.createElement('div');
  const array = ['Hello','webpack','!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());
