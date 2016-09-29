$( document ).ready(init);

function init() {
  $('.topicList').click('topic', clickTopic);
}

function clickTopic() {
  console.log(event.target.offsetTop);
  let top = event.target.offsetTop;
  let $div = $('.info').clone();
  $div.removeClass('info');
  $(event.target).append('<div class="selected" style=`top:${top}px;`>&#9664;</div>');
  // $(event.target).addClass('selected');

  $('.detail').empty().append($div);
}
