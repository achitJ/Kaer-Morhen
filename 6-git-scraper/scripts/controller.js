import { getData, filterData, sortData } from "./logic.js";

window.addEventListener('load', bindEvents);

let originalData = {

    val: '',
    data: [],
    languages: []
}

const options = {
    
    language: 'all',
    sortOrder: 'desc',
    sortBy: 'last_updated'
}

const setOriginal = function (key, value) {

    const newObj = { ...originalData }

    newObj[key] = value;

    originalData = newObj;
}

const makeData = async function() {

    try {

        const profile = document.querySelector('input').value;
        const data = await getData(profile);
        const languages = new Set();

        data.forEach(repo => {

            languages.add(repo.language);
        })
        
        setOriginal("val", profile);
        setOriginal("data", data);
        setOriginal("languages", Array.from(languages));
    }
    
    catch(error) {
        
        console.error(error);
        alert('Something went wrong');
    }
}

const initData = async function() {
    
    await makeData();
    
    // console.log(state.data);
    // console.log(state.languages);

    // console.log(sortData(state.data, state.sortBy, state.sortOrder));

    // for(let language of state.languages) {

    //     console.log(filterData(state.data, language));
    // }
    
    // update(state.data);

    renderData();

}

const renderRepos = function(data) {

    try {

        const output = document.querySelector('#output');

        output.innerHTML = '';

        for(let index = 0; index < data.length; index++) {

            const repo = data[index];

            for(let key in repo) {

                let value = repo[key];

                if(value === null) {

                    value = "N/A";
                }

                const p = document.createElement('p');

                p.innerText = `${key}: ${value}`;

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

const renderOptions = function(languages) {

    const output = document.querySelector('#output-options');

    output.innerHTML = '';

    const languageHTML = `<option value="all">All</option>`;

}

const renderData = function() {

    console.log(originalData);
};

function bindEvents() {

    document.querySelector('#search').addEventListener('click', initData);
}