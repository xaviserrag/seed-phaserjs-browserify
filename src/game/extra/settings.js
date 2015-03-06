'use strict';

function Settings(game) {
    var loader = new Phaser.Loader(game);
    var self = this;

    var onLoaded = function onLoaded () {
        Phaser.Sprite.call(self, game, game.width/2, game.height/2, 'settings');
        game.add.existing(self);
        self.anchor.x = 0.5;
        self.anchor.y = 0.5;
    };

    loader.image('settings', 'assets/settings.png');
    loader.onLoadComplete.addOnce(onLoaded);
    loader.start();
}

Settings.prototype = Object.create(Phaser.Sprite.prototype);
Settings.prototype.constructor = Settings;

module.exports = Settings;
