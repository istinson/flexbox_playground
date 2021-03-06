$( document ).ready(function() {

  var flex = {
    status: false,
    value: '',
  };
  var order = {
    status: false,
    value: '',
  };
  var alignSelf = {
    status: false,
    value: ''
  };
  var flexWrap = {
    status: false,
    value: '',
  };
  var flexFlow = {
    status: false,
    value: '',
  };

  $('#flex-one').on('click', function(){
    flex['status'] = true;
    flex['value'] = '-one';
    $('#wrap-one').css('flex', '1');
    $('#flex-one').css('background-color', '#9b59b6');
  });

  $('#flex-three').on('click', function(){
    flex['status'] = true;
    flex['value'] = '-three';
    $('#wrap-three').css('flex', '1');
    $('#flex-three').css('background-color', '#9b59b6');
  });

  $('#flex-six').on('click', function(){
    flex['status'] = true;
    flex['value'] = '-six';
    $('#wrap-six').css('flex', '1');
    $('#flex-six').css('background-color', '#9b59b6');
  });

  $('#flex-nine').on('click', function(){
    flex['status'] = true;
    flex['value'] = '-nine';
    $('#wrap-nine').css('flex', '1');
    $('#flex-nine').css('background-color', '#9b59b6');
  });



  $('#flex-wrap-wrap').on('click', function(){
    if(flexWrap['status']){
      $('#flex-wrap' + flexWrap['value']).css('background-color', '#ffffff');
    }
    flexWrap['status'] = true;
    flexWrap['value'] = '-wrap';
    $('#container-three').css('flex-wrap', 'wrap');
    $('#flex-wrap-wrap').css('background-color', '#3498db');
  });

  $('#flex-wrap-nowrap').on('click', function(){
    if(flexWrap['status']){
      $('#flex-wrap' + flexWrap['value']).css('background-color', '#ffffff');
    }
    flexWrap['status'] = true;
    flexWrap['value'] = '-nowrap';
    $('#container-three').css('flex-wrap', 'nowrap');
    $('#flex-wrap-nowrap').css('background-color', '#3498db');
  });

  $('#flex-wrap-wrap-reverse').on('click', function(){
    if(flexWrap['status']){
      $('#flex-wrap' + flexWrap['value']).css('background-color', '#ffffff');
    }
    flexWrap['status'] = true;
    flexWrap['value'] = '-wrap-reverse';
    $('#container-three').css('flex-wrap', 'wrap-reverse');
    $('#flex-wrap-wrap-reverse').css('background-color', '#3498db');
  });

  $('#align-self-auto').on('click', function(){
    if(alignSelf['status']){
      $('#align-self' + alignSelf['value']).css('background-color', '#ffffff');
    }
    alignSelf['status'] = true;
    alignSelf['value'] = '-auto';
    $('#wrap-five').css('align-self', 'auto');
    $('#align-self-auto').css('background-color', '#e74c3c');
  });

  $('#align-self-flex-start').on('click', function(){
    if(alignSelf['status']){
      $('#align-self' + alignSelf['value']).css('background-color', '#ffffff');
    }
    alignSelf['status'] = true;
    alignSelf['value'] = '-flex-start';
    $('#wrap-five').css('align-self', 'flex-start');
    $('#align-self-flex-start').css('background-color', '#e74c3c');
  });

  $('#align-self-flex-end').on('click', function(){
    if(alignSelf['status']){
      $('#align-self' + alignSelf['value']).css('background-color', '#ffffff');
    }
    alignSelf['status'] = true;
    alignSelf['value'] = '-flex-end';
    $('#wrap-five').css('align-self', 'flex-end');
    $('#align-self-flex-end').css('background-color', '#e74c3c');
  });

  $('#align-self-center').on('click', function(){
    if(alignSelf['status']){
      $('#align-self' + alignSelf['value']).css('background-color', '#ffffff');
    }
    alignSelf['status'] = true;
    alignSelf['value'] = '-center';
    $('#wrap-five').css('align-self', 'center');
    $('#align-self-center').css('background-color', '#e74c3c');
  });

  $('#align-self-baseline').on('click', function(){
    if(alignSelf['status']){
      $('#align-self' + alignSelf['value']).css('background-color', '#ffffff');
    }
    alignSelf['status'] = true;
    alignSelf['value'] = '-baseline';
    $('#wrap-five').css('align-self', 'baseline');
    $('#align-self-baseline').css('background-color', '#e74c3c');
  });

  $('#align-self-stretch').on('click', function(){
    if(alignSelf['status']){
      $('#align-self' + alignSelf['value']).css('background-color', '#ffffff');
    }
    alignSelf['status'] = true;
    alignSelf['value'] = '-stretch';
    $('#wrap-five').css('align-self', 'stretch');
    $('#align-self-stretch').css('background-color', '#e74c3c');
  });

  $('#order-three').on('click', function(){
    order['status'] = true;
    order['value'] = '-three';
    $('#wrap-three').css('order', '2');
    $('#order-three').css('background-color', '#9b59b6');
  });

  $('#order-four').on('click', function(){
    order['status'] = true;
    order['value'] = '-four';
    $('#wrap-four').css('order', '2');
    $('#order-four').css('background-color', '#9b59b6');
  });

  $('#order-six').on('click', function(){
    order['status'] = true;
    order['value'] = '-six';
    $('#wrap-six').css('order', '1');
    $('#order-six').css('background-color', '#9b59b6');
  });

  $('#order-seven').on('click', function(){
    order['status'] = true;
    order['value'] = '-seven';
    $('#wrap-seven').css('order', '1');
    $('#order-seven').css('background-color', '#9b59b6');
  });

  $('#flex-flow-column-wrap').on('click', function(){
    if(flexFlow['status']){
      $('#flex-flow' + flexFlow['value']).css('background-color', '#ffffff');
    }
    flexFlow['status'] = true;
    flexFlow['value'] = '-column-wrap';
    $('#container-three').css('flex-flow', 'column wrap');
    $('#flex-flow-column-wrap').css('background-color', '#3498db');
  });

  $('#flex-flow-row-wrap').on('click', function(){
    if(flexFlow['status']){
      $('#flex-flow' + flexFlow['value']).css('background-color', '#ffffff');
    }
    flexFlow['status'] = true;
    flexFlow['value'] = '-row-wrap';
    $('#container-three').css('flex-flow', 'row wrap');
    $('#flex-flow-row-wrap').css('background-color', '#3498db');
  });

  $('#flex-flow-row-reverse-wrap-reverse').on('click', function(){
    if(flexFlow['status']){
      $('#flex-flow' + flexFlow['value']).css('background-color', '#ffffff');
    }
    flexFlow['status'] = true;
    flexFlow['value'] = '-row-reverse-wrap-reverse';
    $('#container-three').css('flex-flow', 'row-reverse wrap-reverse');
    $('#flex-flow-row-reverse-wrap-reverse').css('background-color', '#3498db');
  });

});