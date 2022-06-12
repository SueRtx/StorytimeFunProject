import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import WeatherService from './weather-service.js';

$(document).ready(function() {

  $('#tP1').click(function(){
    $('#page1').hide();
    $('#tinyPath').show();
  });

  $('#pP1').click(function(){
    $('#page1').hide();
    $('#poxyPath').show();
  });
});
