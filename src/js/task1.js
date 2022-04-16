const ref = {
    form: document.getElementById('items-form'),
    input: document.querySelectorAll('[type="text"]'),
    list: document.querySelector('#items')
}
const arr = [];

const onSubmit = (event) => {
    event.preventDefault()
    console.log({ title: event.target[0].value, text: event.target[1].value
    })
    const toDo = {
        title: event.target[0].value,
        text: event.target[1].value
    }
    arr.push(toDo);
    console.log(arr);

}
ref.form.addEventListener('submit', onSubmit);

