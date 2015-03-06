'use strict';

function Play() {}

Play.prototype = {
    preload: function() {
    },
    create: function() {
        var logo = this.game.add.sprite(this.game.width/2, this.game.height/2, 'logo');
        logo.inputEnabled = true;
        logo.anchor.x = .5;
        logo.anchor.y = .5;
        var self = this;
        logo.events.onInputDown.add(function(){
            loadjs(['./src/game/extra/settings'], function(settings) {
                self.settings = new settings(self.game);
            });
        });

    },
    update: function() {
    },
    onLoadComplete: function() {
    }
};

module.exports = Play;
