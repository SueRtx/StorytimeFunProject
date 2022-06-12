import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$(document).ready(function() {
  $('#poxyPicnic').hide();

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

  $('#end1').click(function(){
    $('#poxyDragonPic').hide();
    $('#page1').show();
  });
  
  /* Poxy Beach/Dragon Path Starts*/
  
  $('#poxy').click(function(){
    $('#page1').hide();
    $('#poxyPath').show();
  });

  $('#poxySwim1').click(function(){
    $('#poxyPath').hide();
    $('#poxySwim').show();
  });

  $('#dragon1').click(function(){
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

  $('#unicorn1').click(function(){
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

  $('#dragon1').click(function(){
    $('#tinySwim').hide();
    $('#tinyDragonSwim').show();
  });

  $('#end5').click(function(){
    $('#tinyDragonSwim').hide();
    $('#page1').show();
  });
});