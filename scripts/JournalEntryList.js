import { Post } from "./Journal.js";

export const postList = (allPosts) => {
    let postHTML = "";
//Loop over the array of post and for each one, invoke the post component which returns HTML representation
        for (const postObj of allPosts) {
            postHTML += Post(postObj)
        }
        return postHTML;
}