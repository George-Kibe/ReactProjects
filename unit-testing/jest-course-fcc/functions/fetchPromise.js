function fetchPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Peanut butter');
            //reject('error');
        }, 2000)
    })
}

function fetchExample(){
    fetch('https://api.apttracking.com/api/properties/')
    .then(response => response.json())
    .then(data => {
        // Do something with the fetched data
        console.log(data.results.count);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error(error);
    });
}

module.exports = {fetchPromise, fetchExample};