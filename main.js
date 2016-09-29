$( document ).ready(init);

function init() {
  $('.topicList').click('topic', clickTopic);
}

function clickTopic() {
  console.log(event.target.offsetTop);
  // let selected = event.target.id;
  let $div = $('.info').clone();
  $div.removeClass('info');
  // $(event.target).css('background-color', 'red');
  // $(event.target).addClass('selected');
  $(event.target).append('<div class="selected">&#9664;</div>');

  $('.detail').empty().append($div);
}
