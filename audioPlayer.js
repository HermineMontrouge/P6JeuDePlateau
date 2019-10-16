 class AudioPlayer {

     setAudio() {
    $('.openingAudio').prop('volume', 0.05);
    $('.openingAudio').trigger('load');

    function playOpening() {
      $('.openingAudio').trigger('play');
    }

    function stopOpening() {
      $('.openingAudio').trigger('pause');
    }
    $('#audioOn').click(function () {
      playOpening();
      $('#audioOn').hide();
      $('#audioOff').show();
    })
    $('#audioOff').click(function () {
      stopOpening();
      $('#audioOff').hide();
      $('#audioOn').show();
    })
  }
 }
 
