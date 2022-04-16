const ref = {
    form: document.getElementById('items-form'),
    input: document.querySelectorAll('[type="text"]'),
    list: document.querySelector('#items')
}
const arr = [];

const createItems = (array) => array.map((element) => {
    const item = document.createElement('li');
    const title = document.createElement('h2');
    const text = document.createElement('p');
    title.textContent = element.title;
    text.textContent = element.text;
    item.append(title, text);
    return item;
})

const onSubmit = (event) => {
    event.preventDefault()
    const toDo = {
        title: event.target[0].value,
        text: event.target[1].value
    }
    arr.push(toDo);
    event.target.reset();
    ref.list.append(...createItems(arr));
}
ref.form.addEventListener('submit', onSubmit);

