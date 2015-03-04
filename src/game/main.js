var initGame = function () {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'test-hot-loading');
    // Game States
    game.state.add('boot', require('./states/boot'));
    game.state.add('play', require('./states/play'));
    game.state.add('preload', require('./states/preload'));

    game.state.start('boot');
};

module.exports = initGame;


