export const Post = (postObj) => {
    return `<section class="post" id="${postObj.id}">
                <h3>Entry</h3>
                <p>${postObj.entry}</p>
                <div class ="post-row">
                    <h3>Date</h3>
                    <p>${postObj.date}</p>
                    <h3>Concept</h3>
                    <p>${postObj.concept}</p>
                    <h3>Mood</h3>
                    <p>${postObj.mood}</p>
                </div>
            </section>`
}