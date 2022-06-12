import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



$(document).ready(function() {

  $('#tP1').click(function(){
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






});