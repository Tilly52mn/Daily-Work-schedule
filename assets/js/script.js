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
        .addClass("col-10 task-text ");
    $(this).replaceWith(textInput);

    // auto focus new element
    textInput.trigger("focus");
    $(".task-text").each(function () {
        auditTask(this);
    });
});
$(".task-text").on("blur", function () {
    var text = $(this)
        .val()
        .trim();
    var taskDiv = $("<div>")
        .text(text)
        .addClass("col-10 task-text");
    // replace textarea with p element
    $(".task-text").replaceWith(taskDiv);
});

var auditTask = function (taskEl) {

    // // remove any old classes from element
    $(taskEl).removeClass("past present future");
    // get tme from task element
    var timeBlock = $(taskEl).closest('.row').attr('id');

    // convert to moment object at current hour
    var time = moment().format("H");
// apply new class if task is past/current/or future time
    if (time > timeBlock) {
        $(taskEl).addClass("past");
    }
    else if (time == timeBlock) {
        $(taskEl).addClass("present");
    }
    else if (time < timeBlock) {
        $(taskEl).addClass("future");
    }
};

//save task
$(".saveBtn").on("click", function(){
    var id = $(this).closest('.row').attr('id');
    var text =$(this).siblings('.task-text').val();
   var task = localStorage.setItem(id,text);
})

//load all tasks at refresh
 function loadPast() {
     //get info from local storage
  var task9am =   localStorage.getItem(9);
  var task10am =   localStorage.getItem(10);
  var task11am =   localStorage.getItem(11);
  var task12pm =   localStorage.getItem(12);
  var task1pm =   localStorage.getItem(13);
  var task2pm =   localStorage.getItem(14);
  var task3pm =   localStorage.getItem(15);
  var task4pm =   localStorage.getItem(16);
  var task5pm =   localStorage.getItem(17);

//put text into correct spots
$("#9").children('.task-text').val(task9am);
$("#10").children('.task-text').val(task10am);
$("#11").children('.task-text').val(task11am);
$("#12").children('.task-text').val(task12pm);
$("#13").children('.task-text').val(task1pm);
$("#14").children('.task-text').val(task2pm);
$("#15").children('.task-text').val(task3pm);
$("#16").children('.task-text').val(task4pm);
$("#17").children('.task-text').val(task5pm);
}

// update time-block style based on time at first opening
setTimeout(function () {
    $(".task-text").each(function () {
        auditTask(this);
    });
    loadPast()
}, (1))

// update time-block style based on time every minuet
setTimeout(function () {
    $(".task-text").each(function () {
        auditTask(this);
    });
}, (1000 * 60))
