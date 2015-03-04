'use strict';

function Preload() {
    this.ready = false;
}

Preload.prototype = {
    preload: function() {
        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.image('logo', 'assets/logo.png');

    },
    create: function() {
    },
    update: function() {
        if(!!this.ready) {
            this.game.state.start('play');
        }
    },
    onLoadComplete: function() {
        this.ready = true;
    }
};

module.exports = Preload;
