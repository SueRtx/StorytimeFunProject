import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';




$(document).ready(function() {

/*Unicorn Party Starts*/
$('#party').click(function(){
  $('#page1').hide();
  $('#unicornParty').show();
});

$('#end32').click(function(){
  $('#unicornParty').hide();
  $('#page1').show();
});

/*Picnic Friends Starts*/
$('#basket').click(function(){
  $('#page1').hide();
  $('#picnicFriends').show();
});

$('#end30').click(function(){
  $('#picnicFriends').hide();
  $('#page1').show();
});

/*Swim FriendstStarts*/
$('#swim').click(function(){
  $('#page1').hide();
  $('#swimFriends').show();
});

$('#end31').click(function(){
  $('#swimFriends').hide();
  $('#page1').show();
});


/* Sunny Unicorn/Picnic Starts*/
$('#sun').click(function(){
  $('#page1').hide();
  $('#sunPicnic').show();
});

$('#unicornPicnic2').click(function(){
  $('#sunPicnic').hide();
  $('#sunUnicornPicnic').show();
});

$('#end10').click(function(){
  $('#sunUnicornPicnic').hide();
  $('#page1').show();
});

/* Sunny Spike/Picnic Starts*/
$('#dragonPicnic2').click(function(){
  $('#sunPicnic').hide();
  $('#sunDragonPicnic').show();
});

$('#end15').click(function(){
  $('#sunDragonPicnic').hide();
  $('#page1').show();
});

/* Sunny Poxy/Picnic Starts*/
$('#poxyPicnic2').click(function(){
  $('#sunPicnic').hide();
  $('#sunPoxyPicnic').show();
});

$('#end13').click(function(){
  $('#sunPoxyPicnic').hide();
  $('#page1').show();
});

// Spike Unicorn/ball Path Starts
$('#spike').click(function(){
  $('#page1').hide();
  $('#dragonBall').show();
});

$('#unicornBall').click(function(){
  $('#dragonBall').hide();
  $('#dragonUnicornBall').show();
});

$('#end8').click(function(){
  $('#dragonUnicornBall').hide();
  $('#page1').show();
});

// Spike Tiny/ball Path Starts
$('#tinyBall').click(function(){
  $('#dragonBall').hide();
  $('#dragonTinyBall').show();
});

$('#end9').click(function(){
  $('#dragonTinyBall').hide();
  $('#page1').show();
});

// Spike Poxy/ball Path Starts
$('#poxyBall').click(function(){
  $('#dragonBall').hide();
  $('#dragonPoxyBall').show();
});

$('#end14').click(function(){
  $('#dragonPoxyBall').hide();
  $('#page1').show();
});




  /* Tiny Picnic/Dragon Path Starts*/
  $('#tiny').click(function(){
    $('#page1').hide();
    $('#tinyPath').show();
  });

  $('#tinyPicnic1').click(function(){
    $('#tinyPath').hide();
    $('#tinyPicnic').show();
  });

  $('#tinyDragon1').click(function(){
    $('#tinyPicnic').hide();
    $('#tinyDragonPic').show();
  });

  $('#end').click(function(){
    $('#tinyDragonPic').hide();
    $('#page1').show();
  });
  
  /* Poxy Picnic/Dragon Path Starts*/
  $('#poxy').click(function(){
    $('#page1').hide();
    $('#poxyPath').show();
  });

  $('#poxyPicnic1').click(function(){
    $('#poxyPath').hide();
    $('#poxyPicnic').show();
  });

  $('#poxyDragon1').click(function(){
    $('#poxyPicnic').hide();
    $('#poxyDragonPic').show();
  });

  $('#end6').click(function(){
    $('#poxyDragonPic').hide();
    $('#page1').show();
  });

  /*tiny picnic/unicorn path */
  $('#tiny').click(function(){
    $('#page1').hide();
    $('#tinyPath').show();
  });

  $('#tinyPicnic1').click(function(){
    $('#tinyPath').hide();
    $('#tinyPicnic').show();
  });

  $('#tinyUnicorn1').click(function(){
    $('#tinyPicnic').hide();
    $('#tinyUnicornPic').show();
  });

  $('#end1').click(function(){
    $('#tinyUnicornPic').hide();
    $('#page1').show();
  });

  /* Poxy Picnic/Unicorn Path Starts*/
  $('#poxy').click(function(){
    $('#page1').hide();
    $('#poxyPath').show();
  });

  $('#poxyPicnic1').click(function(){
    $('#poxyPath').hide();
    $('#poxyPicnic').show();
  });

  $('#poxyUnicorn1').click(function(){
    $('#poxyPicnic').hide();
    $('#poxyUnicornPic').show();
  });

  $('#end7').click(function(){
    $('#poxyUnicornPic').hide();
    $('#page1').show();
  });
  
  /* Poxy Swim/Dragon Path Starts*/
  $('#poxy').click(function(){
    $('#page1').hide();
    $('#poxyPath').show();
  });

  $('#poxySwim1').click(function(){
    $('#poxyPath').hide();
    $('#poxySwim').show();
  });

  $('#poxyDragon').click(function(){
    $('#poxySwim').hide();
    $('#poxyDragonSwim').show();
  });

  $('#end5').click(function(){
    $('#poxyDragonSwim').hide();
    $('#page1').show();
  });

  /* Poxy Beach/Unicorn Path Starts*/
  $('#poxy').click(function(){
    $('#page1').hide();
    $('#poxyPath').show();
  });

  $('#poxySwim1').click(function(){
    $('#poxyPath').hide();
    $('#poxySwim').show();
  });

  $('#poxyUnicorn').click(function(){
    $('#poxySwim').hide();
    $('#poxyUnicornSwim').show();
  });

  $('#end4').click(function(){
    $('#poxyUnicornSwim').hide();
    $('#page1').show();
  });

  /* Tiny Beach/Dragon Path Starts*/
  $('#tiny').click(function(){
    $('#page1').hide();
    $('#tinyPath').show();
  });

  $('#tinySwim1').click(function(){
    $('#tinyPath').hide();
    $('#tinySwim').show();
  });

  $('#tinyDragon2').click(function(){
    $('#tinySwim').hide();
    $('#tinyDragonSwim').show();
  });

  $('#end3').click(function(){
    $('#tinyDragonSwim').hide();
    $('#page1').show();
  });

  /* Tiny Beach/Unicorn Path Starts*/
  $('#tiny').click(function(){
    $('#page1').hide();
    $('#tinyPath').show();
  });
  
  $('#tinySwim1').click(function(){
    $('#tinyPath').hide();
    $('#tinySwim').show();
  });
  
  $('#tinyUnicorn2').click(function(){
    $('#tinySwim').hide();
    $('#tinyUnicornSwim').show();
  });
  
  $('#end2').click(function(){
    $('#tinyUnicornSwim').hide();
    $('#page1').show();
  });
  
});