$( document ).ready(init);

function init() {
  $('.topicList').click(clickTopic);
}

function clickTopic() {
  console.log('click');
  let $div = $('.info').clone();
  $div.removeClass('info');
  $(this).addClass('clicked');
  $('.detail').empty().append($div);
}
