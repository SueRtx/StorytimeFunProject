import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import WeatherService from './weather-service.js';




 $(document).ready(function() {
    $('#pP1').click(function() {
      $("#page1").hide();
      $("#poxyPath1").show();
   });
   $('#tP1').click(function(){
     $('#page1').hide();
     $('#tinyPath1').show();
   });
   $('#tinyPicnic2').click(function(){
     $('#tinyPath1').hide();
     $('#').show();
   });
});