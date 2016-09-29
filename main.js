$( document ).ready(init);

function init() {
  $('.topicList').click('topic', clickTopic);
}

function clickTopic() {
  console.log(this);
  let $div = $('.info').clone();
  $div.removeClass('info');
  $(this).addClass('clicked');
  $('.detail').empty().append($div);
}
