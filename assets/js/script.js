/* Author: 

*/

let notes = localStorage.getItem("notes")
let noteContainer = $(".note-container")

$(".addNotes-btn").click(addNotes)

function addNotes() {
 let noteSection = `
    <div class="notes">
      <div class="control-div">
        <button class="edit-btn btn">1</button>
        <button class="delete-btn btn">1</button>
      </div>
      <div class="editable-area">
        <div class="note-text"><p></p></div>
        <textarea class="hide" name="note" cols="30" rows="10"></textarea>
      </div>
    </div> `;
 
  noteContainer.append(noteSection)
 
  $(".delete-btn").click(deleteNote)
  $(".edit-btn").click(editNote)
  $("textarea").on("input", noteText)
}

function deleteNote(e) { $(e.target).parent().parent().remove() }


function editNote(e) {
  let editArea = $(e.target).parent().parent().children()[1]
  let editAreaEl = $(editArea).children()
  for (const x of editAreaEl) {
    $(x).toggleClass("hide")
  }
  updateLocalStorage()
}

function noteText(e) {
  let value = e.target.value
  let noteArea = $(e.target).parent().children()[0]
  $(noteArea).children().text(value)
}























