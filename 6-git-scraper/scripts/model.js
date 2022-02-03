
export const getData = async function(profile) {

    const url = `https://api.github.com/users/${profile}/repos`;
    
    const netWorkCallPrefetch = await fetch(url);

    if(!netWorkCallPrefetch.ok) {

        throw new Error(`invalid Response`);
    }

    const netWorkCall = await(netWorkCallPrefetch).json();

    const repos = [];

    for(let index = 0; index < netWorkCall.length; index++) {

        const repo = netWorkCall[index];

        repos.push({
            name: repo.name,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks
        });
    }

    return repos;

}

// console.log(netWorkCall);

//name
//description
//stars
//last updated
//language