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

// THIS IS THE FUNCTION THAT DELETES POSTS 

export const deletePost = postId => {
    return fetch(`http://localhost:8088/Journal/${postId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(getPosts)
}

// FUNCTION FOR POST COLLECTION 

let postCollection = [];

export const usePostCollection = () => {
    return [...postCollection]
}
