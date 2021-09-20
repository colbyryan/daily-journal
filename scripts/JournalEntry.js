export const JournalEntryComponent = (entry) => {
    return `  <section class="journal">
    <!-- CONCEPTS SECTION     -->
    <form action="">
      <fieldset>
        <section class="concepts">
          <label for="journalConcepts">Concepts Covered</label>
          <input type="text" name="journalDate"
          placeholder="Enter concept here..." id="journalConcept" />
        </section>
      </fieldset>
    </form>

    <!-- ENTREY SECRTION  -->
    <form action="">
      <fieldset>
        <section class="entry">
          <label for="journalEntry">Journal Entry</label>
          <textarea
            name="journalEntry"
            id="journalEntry"
            placeholder="Enter journal entry here..."
            cols="30"
            rows="2"
          ></textarea>
        </section>
      </fieldset>
    </form>

    <!-- MOOD SECTION      -->
    <form action="">
      <fieldset>
        <section class="mood">
          <label for="journalMood">Mood for the day</label>
          <select name="journalMood" id="journalMood">
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="confused">Confused</option>
          </select>
        </section>
      </fieldset>
      <div class="btn">
      <button id="newPost_submit">Record Journal Entry</button>
    </div>
    </form>
  </section>
 `
};