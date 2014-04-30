// ==UserScript==
// @name          AntiLinkedInPulse
// @namespace     http://yformagg.io
// @description   This script removes annoying Linkedin Pulse news.
// @include       https://www.linkedin.com/*
// @include       https://*.linkedin.com/*
// @include       http://linkedin.com/*
// @include       http://*.linkedin.com/*
// @version       1.0
// @grant         GM_addStyle
// ==/UserScript==

GM_addStyle('#today-news-wrapper { display: none !important; }');
