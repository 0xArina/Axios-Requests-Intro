//////////////////////////          INTRO TO AXIOS         /////////////////////////////

/*
    // axios request
    axios.get("https://swapi.dev/api/people/1/")
        //return promises
        .then(res => {
            console.log("RESPONSE: ", res);
        })
        .catch(e => {
            console.log("ERROR! ", e);
        })
*/


// async axios

// create async f with id parameter and save it to var
const getStarWarsPerson = async (id) => {
    try {
        // wait for a promise of axios get request and save to var
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(`ID ${id}: `, res.data);
    } catch (e) {
        console.log("ERROR", e);
    }
}

// call people with diff ids
getStarWarsPerson(5);
getStarWarsPerson(10);