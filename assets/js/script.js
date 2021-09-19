function displayTime() {
    var time = moment().format(' dddd, MMMM Do')
    $('.clock').html(time);
}
displayTime();

// add ability to edit task info
$(".task-text").on("click", function () {
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
$(".task-text").on("blur", function () {
    var text = $(this)
        .val()
        .trim();
    var taskDiv = $("<div>")
        .text(text)
        .addClass("col-10 past task-text");
    // replace textarea with p element
    $(".task-text").replaceWith(taskDiv);
});

var auditTask = function (taskEl) {

    // // remove any old classes from element
    $(taskEl).removeClass("past present future");
    // get tme from task element
    console.log("id of closest row = " + $(taskEl).closest('.row').attr('id'));
    var timeBlock = $(taskEl).attr("id");
    // // ensure it worked
    console.log("timeBlock id = " + timeBlock);

    // convert to moment object at 5:00pm
    var time = moment().format("H");
    console.log(time)
    //       // apply new class if task is near/over due date
    if (time > timeBlock) {
        $(taskEl).addClass("past");
    }
    else if (time === timeBlock) {
        $(taskEl).addClass("present");
    }
    else if (time < timeBlock) {
        $(taskEl).addClass("future");
    }
};
// update time-block style based on time
setTimeout(function () {
    $(".task-text").each(function () {
        auditTask(this);
    });
}, (1000 * 1))