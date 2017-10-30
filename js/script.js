// Business Logic
function Tasks(name, category, notes, dueDate) {
  this.name = name;
  this.category = category;
  this.notes = notes;
  this.dueDate = dueDate;
}

// User Interface Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var taskName = $("#name").val();
    var taskCategory = $("#category").val();
    var taskNotes = $("#notes").val();
    var taskDue = $("#due").val();

    var todoItem = new Tasks(taskName, taskCategory, taskNotes, taskDue);

    $("#output-task-name").append('<li class="list-group-item">' + '<span class="clickable float-left">' + todoItem.name + '</span>' + '<div class="form-check form-check-inline clickable-remove float-right"><label class="form-check-label"><input class="form-check-input" type="checkbox">Done</label></div>' + '</li>');

    $(".clickable").last().click(function() {
      $(".results").show();

      $("#selectName").text(todoItem.name);
      $("#selectCategory").text(todoItem.category);
      $("#selectNotes").text(todoItem.notes);
      $("#selectDue").text(todoItem.dueDate);
    });

    $(".clickable-remove").click(function() {
      $(".results").hide();
      $(this).parent().remove();
    })
  });
});
