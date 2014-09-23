var texturePath = require('programmerart-textures')('');
var createGame = require('voxel-engine');
var container = document.body;
game.appendTo(container);
    var game = createGame({
        texturePath: texturePath,
        materials: [
            ['blocks/grass_top', 'blocks/dirt', 'blocks/grass_side'],
            'blocks/stone',
            'blocks/dirt']
        });
var createPlayer = require('voxel-player');
var test = createplayer()(game);
test.possess();