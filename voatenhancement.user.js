// ==UserScript==
// @name         Voat enhancement
// @namespace    xor.kevin
// @version      0.1
// @description  my custom enhancement script for voat
// @author       xorkevin
// @match        *://*.voat.co/*
// @grant        none
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

//open all voat links (both submission and comments) in a new tab
$(document).ready(function() {
  $('div.submission > entry').children('p.title > a.title, p.tagline > a.author, p.tagline > a.subverse, ul.buttons > li.first > a.comments').attr('target', '_blank');
});
