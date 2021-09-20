export const createPost = (postObj) => {
    return fetch('http://localhost:8088/Journal', {
        meathod: "JOURNAL", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
    .then(response => response.json())
}

let postCollection = [];

export const usePostCollection = () => {
    return [...postCollection]
}

export const getPosts = () => {
    return fetch ('http://localhost:8088/Journal')
    .then(response => response.json())
    .then(paresedResponse => {
        postCollection = paresedResponse
        return paresedResponse;
    })
}