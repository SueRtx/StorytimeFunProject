import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GoogleFont from './story.js';

$(document).ready(function() {
  $('#btn').click(function(){
    
    $('#myStyle').remove();
    let fonts = $("input[name='font']:checked").val();
    let promise = GoogleFont.getFont(fonts);
    promise.then(function(response){
      
      const body = response.toString().split('*/')[1];
      $('head').append(`<style id="myStyle">
      ${body} </style>`);
      let $x = $('body');
      $x.css(`font-family`, `'${fonts}'`);
      //$x.css(`font-size`, `38px`);

      let $y = $('.title');
      $y.css(`font-family`, `'${fonts}'`);
      //$y.css(`font-size`, `38px`);

      let $z = $('.scrolling h6');
      $z.css(`font-family`, `'${fonts}'`);
      //$z.css(`font-size`, `38px`);

    }, function(error){
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  
  });
/*Unicorn Party Starts*/
  $('#party').click(function(){
    $('#page1').hide();
    $('#unicornParty').show();
  });

  $('#overParty').click(function(){
    $('#unicornParty').hide();
    $('#page1').show();
  });

  /*Picnic Friends Starts*/
  $('#basket').click(function(){
    $('#page1').hide();
    $('#picnicFriends').show();
  });

  $('#overPicnic').click(function(){
    $('#picnicFriends').hide();
    $('#page1').show();
  });

  /*Swim FriendstStarts*/
  $('#swim').click(function(){
    $('#page1').hide();
    $('#swimFriends').show();
  });

  $('#overSwim').click(function(){
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

  $('#overSunPicnic').click(function(){
    $('#sunUnicornPicnic').hide();
    $('#page1').show();
  });

  /* Sunny Spike/Picnic Starts*/
  $('#dragonPicnic2').click(function(){
    $('#sunPicnic').hide();
    $('#sunDragonPicnic').show();
  });

  $('#overSunPicnic2').click(function(){
    $('#sunDragonPicnic').hide();
    $('#page1').show();
  });

  /* Sunny Poxy/Picnic Starts*/
  $('#poxyPicnic2').click(function(){
    $('#sunPicnic').hide();
    $('#sunPoxyPicnic').show();
  });

  $('#overSunPicnic3').click(function(){
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

  $('#end10').click(function(){
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