document.addEventListener('DOMContentLoaded', () => {
    const selectEl = document.getElementById('select-btn');
    const modifyEl = document.getElementById('modify-btn');
    const fetchEl = document.getElementById('fetch-btn');
    const inputField = document.querySelector('.input');

    // Some input related events
    inputField.addEventListener('input', (e) => {
        console.log('input event:', e.target);
    })

    inputField.addEventListener('change', (e) => {
        console.log('change event:', e.target);
    })

    inputField.addEventListener('keyup', (e) => {
        console.log('keyup event:', e.target);
    })

    inputField.addEventListener('keydown', (e) => {
        console.log('keydown event:', e.target);
    })


    // Select all elements on click on "selectEl" and console log them
    selectEl.addEventListener('click', () => {
        // Select individual box using id
        const box1El = document.getElementById("box1");
        const box2El = document.getElementById("box2");
        const box3El = document.getElementById("box3");
        console.log(box1El, box2El, box3El);

        // Select all boxes using class name
        const allBoxes = document.getElementsByClassName('box');
        for (box of allBoxes) {
            console.log(box);
        }
    })

    // Modify any content on click on "modifyEl" button
    modifyEl.addEventListener("click", () => {
        const box1El = document.getElementById("box1");
        const box2El = document.getElementById("box2");
        const box3El = document.getElementById("box3");

        box1El.textContent = 'Modified';
        box2El.style.backgroundColor = 'black';
        box3El.innerHTML = '<strong>Box</strong>';
    });

    // Fetch data from jsonplaceholder on click on "fetchEl" button and log the data
    fetchEl.addEventListener('click', fetchData);
    async function fetchData() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            const firstTenData = data.slice(0, 10);
            firstTenData.map((val, index) => {
                console.log(`Post no: ${index + 1}`, val);
            })
        } catch (err) {
            console.log(`Failed to fetch posts: ${err}`);
        }
    }
});