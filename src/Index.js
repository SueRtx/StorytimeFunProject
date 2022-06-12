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

  $('#again').click(function(){
    $('#tinyDragonPic').hide();
    $('#page1').show();
  });

  
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





});