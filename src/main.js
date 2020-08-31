import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './journal.js';
//import project function here!
$(document).ready(function() { 
  $("#form").submit(function(event) {
    event.preventDefault();

    const title = $("#user-title").val();
    const userEntry = $("#user-entry").val();
    let entry = new Entry(title, userEntry);
    let wordCount = entry.words();
    let teaser = entry.getTeaser();
    let vowelConsArray = entry.countVowels();
    

    $("#entry-teaser").text(teaser);
    $("#vowels-cons").text("Your entry contains " + wordCount + " words, " + vowelConsArray[0] + " vowels, and " + vowelConsArray[1] + " consonants.");
  });
});