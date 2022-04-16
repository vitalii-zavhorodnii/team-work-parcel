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
