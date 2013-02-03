/**
 * documentready.js 1.0
 */

window.documentReady = function (onReady, document) {
    'use strict';

    if (document == null) {
        document = window.document;
    }

    if (document.readyState === 'complete') {
        setTimeout(onReady);

        return;
    }

    var onReadyListener = function () {
        document.removeEventListener('DOMContentLoaded', onReadyListener, false);

        window.removeEventListener('load', onReadyListener, false);

        onReady();
    };

    document.addEventListener('DOMContentLoaded', onReadyListener, false);

    window.addEventListener('load', onReadyListener, false);
};
