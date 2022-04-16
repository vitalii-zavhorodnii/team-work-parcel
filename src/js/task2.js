import debounce from 'debounce';
import throttle from 'lodash.throttle';

const refs = {
  input: document.querySelector('[type="text"]'),
  textElement: document.getElementById('some-text'),
};

refs.input.addEventListener(
  'input',
  debounce(e => {
    console.log(e.target.value);
  }, 1000),
);

document.addEventListener('scroll', throttle(e => {
  refs.textElement.textContent = +refs.textElement.textContent + 1;
}, 1000))
console.log(document.body);

