import { getData } from "./model.js";

window.addEventListener('load', bindEvents);

const update = async function() {

    const profile = document.querySelector('input').value;

    try {

        const data = await getData(profile);

        const output = document.querySelector('#output');

        for(let index = 0; index < data.length; index++) {

            const repo = data[index];

            for(let key in repo) {

                let value = repo[key];

                if(value === null) {

                    value = "N/A";
                }

                const p = document.createElement('p');

                p.innerHTML = `${key}: ${value}`;

                output.appendChild(p);
            }

            const br = document.createElement('br');

            output.appendChild(br);
        }
    }

    catch(error) {

        console.error(error);
        alert('Something went wrong');
    }
}

function bindEvents() {

    document.querySelector('#search').addEventListener('click', update);
}