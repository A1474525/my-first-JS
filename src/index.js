import './style.css';

const baseURL = 'https://jsonplaceholder.typicode.com/users';
const button = document.querySelector('#myButton');
const myInput = document.getElementById('myInput');
const myOutput = document.querySelector('.main__right');

const getUser = () => {
    const id = myInput.value ? myInput.value : 1;
    const requestURL = `${baseURL}/${id}`;

    fetch(requestURL)
        .then(response => response.json())
        .then(json => {
            const keysToSelect = ['name', 'username', 'email'];
            const fragment = document.createDocumentFragment(); // Создаем фрагмент

            keysToSelect.forEach(key => {
                if (json.hasOwnProperty(key)) {
                    const p = document.createElement('p');
                    p.textContent = `${key}: ${json[key]}`;
                    fragment.appendChild(p); // Добавляем элемент <p> в фрагмент
                }
            });

            // Удаляем все дочерние элементы
            while (myOutput.firstChild) {
                myOutput.removeChild(myOutput.firstChild);
            }

            // Добавляем фрагмент с новыми элементами в myOutput
            myOutput.appendChild(fragment);
        })
        .catch(error => console.error('Ошибка при получении данных:', error));
}

button.addEventListener("click", getUser);
