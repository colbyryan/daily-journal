import { createPost, getPosts } from "./DataManager.js"
import { Post } from "./Journal.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import { getJournalEntries } from "./JournalData.js";

const journal = document.querySelector('.journal');
const applicationElement = document.querySelector(".daily-journal");

const postJournal = () => {
    journal.innerHTML = JournalEntryComponent()
}

const showPosts = () => {
    const postElement = document.querySelector(".entryLog");
    getPosts()
    .then((allPost) => {
        postElement.innerHTML = Post(allPost);
    })
}

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if(event.target.id === "newPost_submit") {
    const entry = document.querySelector("#journalEntry").value
    const postObject = {
        entry: entry,
    }

    createPost(postObject)
    .then(dbResponse => {
        console.log("dbResponse", dbResponse)
        showPosts();
    })
    }
})

postJournal();
showPosts();
