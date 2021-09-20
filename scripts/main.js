import { createPost, getPosts } from "./DataManager.js"
import { Post } from "./Journal.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import { postList } from "./JournalEntryList.js";

// DECLARING CONSTATS FOR QUERY SECLECTORS 

const journal = document.querySelector('.journal');
const applicationElement = document.querySelector(".daily-journal");

// POSTING THE ENTRY FORM TO THE DOM 

const postJournal = () => {
    journal.innerHTML = JournalEntryComponent()
}

// SHOWING THE ACTUAL POSTS IN THE DOM

const showPosts = () => {
    const postElement = document.querySelector(".entryLog");
    getPosts()
    .then((allPost) => {
        postElement.innerHTML = postList(allPost);
    })
}

// THIS RECORDS THE ENTRY INFO TO JOURNAL.JSON AND DISPLAYS IT ON THE DOM

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if(event.target.id === "newPost_submit") {
    const concept = document.querySelector("#journalConcept").value
    const entry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#journalMood").value
    const postObject = {
        date: Date.now(),
        concept: concept,
        entry: entry,
        mood: mood
    }

    createPost(postObject)
    .then(dbResponse => {
        console.log("dbResponse", dbResponse)
        showPosts();
    })
    }
})


// THIS RUNS ALL FUNCTIONS NEEDED FOR THE WEBPAGE 

postJournal();
showPosts();
