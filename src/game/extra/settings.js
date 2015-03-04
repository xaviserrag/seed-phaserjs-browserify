'use strict';

function Settings(game) {
    Phaser.Sprite.call(this, game, game.width/2, game.height/2 - 50, 'bombo');
}

Settings.prototype = Object.create(Phaser.Sprite.prototype);
Settings.prototype.constructor = Settings;

Settings.prototype.preload = function preload () {
    this.load.image('logo', 'assets/power-bombo.png');
};

module.exports = Settings;
