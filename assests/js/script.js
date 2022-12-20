
function getCurrentTime() {
  const currentTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  return currentTime;
}

setInterval(function() {
  const currentTime = getCurrentTime();
  $('#time-display').text(currentTime);
}, 1000);

