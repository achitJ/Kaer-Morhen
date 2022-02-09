
export const getData = async function(profile) {

    const url = `https://api.github.com/users/${profile}/repos`;
    
    const netWorkCallPrefetch = await fetch(url);

    if(!netWorkCallPrefetch.ok) {

        throw new Error(`invalid Response`);
    }

    const netWorkCall = await(netWorkCallPrefetch).json();

    console.log(netWorkCall);

    const repos = [];

    for(let index = 0; index < netWorkCall.length; index++) {

        const repo = netWorkCall[index];

        repos.push({
            name: repo.name,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
            last_updated: new Date(repo.updated_at)
        });
    }

    console.log(repos);

    return repos;

}

export const filterData = function(data = [], language = 'all') {

    if(data === undefined || data.length === 0 || data === null) {

        return [];
    }

    const filteredData = data.filter(repo => {
        
        if(language === 'all') return true

        return repo.language === language;
    });

    return filteredData;
}

export const sortData = function(data = [], sortBy, sortOrder) {

    if(!sortBy || !sortOrder) {

        return null;
    }

    const sortedData = [...data];

    let compare;
    
    if(sortOrder === 'asc') {

        compare =(a, b) => {
            
            const first = (typeof a[sortBy]) === 'object' ? a[sortBy].getTime() : a[sortBy];
            const second = (typeof b[sortBy]) === 'object' ? b[sortBy].getTime() : b[sortBy];
    
            return first - second;
        };
    }

    else if(sortOrder === 'desc') {

        compare =(a, b) => {
            
            const first = (typeof a[sortBy]) === 'object' ? a[sortBy].getTime() : a[sortBy];
            const second = (typeof b[sortBy]) === 'object' ? b[sortBy].getTime() : b[sortBy];
    
            return second - first;
        };
    }

    
    sortedData.sort(compare);

    console.log(sortedData);

    return sortedData;
}


//name
//description
//stars ---
//last updated ---
//language