function displayTime() {
    var time = moment().format(' dddd, MMMM Do')
    $('.clock').html(time);
}
displayTime();

// add ability to edit task info
$(".task-text").on("click", function() {
    // get current value of textarea
    var text = $(this)
    .text()
    .trim();

  // replace div element with a new textarea
  var textInput = $("<textarea>").val(text)
  .addClass("col-10 past task-text ");
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
});
$(".task-text").on("blur", function() {
    var text = $(this)
    .val()
    .trim();
    var taskDiv = $("<div>")
    .text(text)
    .addClass("col-10 past task-text");
    // replace textarea with p element
$(".task-text").replaceWith(taskDiv);
});


// update time-block style based on time