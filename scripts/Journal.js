export const Post = (postOjb) => {
    return `<section class="post" id="${postOjb[0].id}">
                <h3>Entry</h3>
                <p>${postOjb[0].entry}</p>
                <div class ="post-row">
                    <h3>Date</h3>
                    <p>${postOjb[0].date}</p>
                    <h3>Concept</h3>
                    <p>${postOjb[0].concept}</p>
                    <h3>Mood</h3>
                    <p>${postOjb[0].mood}</p>
                </div>
            </section>`
}