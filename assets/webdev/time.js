function getTime(id, timezone) {
    var now = new Date();
    var localTime = now.getTime();
    var localOffset = now.getTimezoneOffset() * 60000; 
    var utcTime = localTime + localOffset;
    var targetTime = utcTime + (timezone * 3600000); 
    var targetDate = new Date(targetTime);

    var hours = targetDate.getHours();
    var minutes = targetDate.getMinutes();
    var seconds = targetDate.getSeconds();

    var timeString = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById(id).innerText = timeString;
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

document.addEventListener("DOMContentLoaded", function() {
    var clocks = document.querySelectorAll('.clock');
    clocks.forEach(function(clock) {
        var timezone = parseFloat(clock.getAttribute('data-timezone'));
        clock.addEventListener('mouseenter', function() {
            getTime(clock.id, timezone);
        });
    });
});

