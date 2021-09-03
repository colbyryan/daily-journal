
const journal = [
    {
        id: 1,
        date: "08/27/2021",
        concept: "HTML and CSS",
        entry: "We talked about HTML components and how to make a grid layout with Flexbox in CSS",
        mood: "Happy"
    }
]

export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
        return sortedByDate
}