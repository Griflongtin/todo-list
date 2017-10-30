// Business Logic
function Tasks(name, notes, dueDate) {
  this.name = name;
  // this.category = "";
  this.notes = notes;
  this.dueDate = dueDate;
}

// User Interface Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
      debugger;
    var taskName = $("#name").val();
    var taskNotes = $("#notes").val();
    var taskDue = $("#due").val();

    var todoItem = new Tasks(taskName, taskNotes, taskDue);

    $("#output-task-name").append('<li class="list-group-item clickable">' + todoItem.name + '</li>');

    $(".clickable").last().click(function() {
      $(".results").show();

      $("#selectName").text(todoItem.name);
      // $("#selectCategory").text(todoItem.category);
      $("#selectNotes").text(todoItem.notes);
      $("#selectDue").text(todoItem.dueDate);
    });
  });
});
