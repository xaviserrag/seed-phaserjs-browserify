'use strict';

function Play() {}

Play.prototype = {
    preload: function() {
    },
    create: function() {
        var logo = this.game.add.sprite(this.game.width/2, this.game.height/2, 'logo');
        logo.inputEnabled = true;
        logo.events.onInputDown.add(function(){console.log("sup")});
        logo.anchor.x = .5;
        logo.anchor.y = .5;
    },
    update: function() {
    },
    onLoadComplete: function() {
    }
};

module.exports = Play;
