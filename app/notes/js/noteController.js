var NotesManager = (function () {
    let noteList;
    let notes = [];

    function populateNotes() {
        let txtNote = $('#note').val();
        let noteItem = $('<div class="note">'+txtNote+'</div>');
        noteList.append(noteItem);
    }

    function init() {
        noteList = $('.note_container');
        $('#help').hide();
        $("#add_button").click(function () {
            populateNotes();
        });

        notes.forEach(ele => {
            noteList.append($('<div class="note">'+ele+'</div>'));
        });

        $('#open_help').click(function () {
            $('#help').is(":visible") ? $('#help').hide() : $('#help').show();
        });
    }

    function loadData(data) {
       notes = data;
    }
    let NoteApi = {
        init: init,
        loadData: loadData
    }
    return NoteApi;
})();

// assume this data came from the database
NotesManager.loadData(
    [
        "This is the first note I've taken!",
        "Now is the time for all good men to come to the aid of their country.",
        "The quick brown fox jumped over the moon."
    ]
);

$(document).ready(function () {
  NotesManager.init()
})


