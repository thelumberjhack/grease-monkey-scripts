// ==UserScript==
// @name          AntiFeedlyProTips
// @namespace     http://yformagg.io
// @description   This script removes annoying Feedly pro tips block.
// @include       http://feedly.com/*
// @include       https://feedly.com/*
// @include       http://*.feedly.com/*
// @include       https://*.feedly.com/*
// @version       1.0
// @grant         GM_addStyle
// ==/UserScript==

GM_addStyle('#tipsModule_part { display: none !important; }');
