/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Brian Payne
 * @license MIT
 * 
 **/

class EasyHTTP {
    // Async functions
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    async post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const resData = await response.json();
        return resData;               
}

async put(url, data) {    
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const resData = await response.json();
        return resData; 
}

async delete(url) {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resData = await 'Resource deleted';
        return resData;
}


    // Make an HTTP GET request.
    // get(url) {
    //     return new Promise ((resolve, reject) => {
    //         fetch(url)
    //         .then(res => res.json())
    //         .then(data => resolve(data))
    //         .catch(err => reject(err))
    //     })        
    // }

    // // Make HTTP POST request.
    // post(url, data) {
    //     return new Promise ((resolve, reject) => {
    //         fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(res => res.json())
    //         .then(data => resolve(data))
    //         .catch(err => reject(err))
    //     })        
    // }

    // // Make an HTTP PUT request.
    // put(url, data) {
    //     return new Promise ((resolve, reject) => {
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(res => res.json())
    //         .then(data => resolve(data))
    //         .catch(err => reject(err))
    //     })        
    // }

    // // Make an HTTP DELTE request.
    // delete(url) {
    //     return new Promise ((resolve, reject) => {
    //         fetch(url, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(() => resolve('Resource Deleted'))
    //         .catch(err => reject(err))
    //     })        
    // }
}