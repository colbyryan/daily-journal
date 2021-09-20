// FETCH CALL FOR CREATING A NEW POST 

export const createPost = postObj => {
	return fetch("http://localhost:8088/Journal", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(postObj)
  
	}).then(response => response.json())
  }

// FETCH CALL FOR DISPLAYING EXISTING POSTS TO THE DOM

export const getPosts = () => {
    return fetch ('http://localhost:8088/Journal')
    .then(response => response.json())
    .then(paresedResponse => {
        postCollection = paresedResponse
        return paresedResponse;
    })
}

let postCollection = [];

export const usePostCollection = () => {
    return [...postCollection]
}
