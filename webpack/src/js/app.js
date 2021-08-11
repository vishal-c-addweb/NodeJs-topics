import '../css/main.css';
import '../css/input-elements.css';

import $ from 'jquery';

import { secretButton,secretParagraph } from './dom-loader';

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide the Secret';
    } else {
        secretButton.textContent = 'Show the Secret';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}

$(function(){
    $('body').append('<h1>jay ho</h1>');
})

"use strict";

var add = function (x, y) {
  return x + y;
};

var result = add(1, 2);

console.log(result);