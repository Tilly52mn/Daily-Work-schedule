function displayTime() {
    var time = moment().format(' dddd, MMMM Do')
    $('.clock').html(time);
}
displayTime();
