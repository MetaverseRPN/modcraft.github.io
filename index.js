var texturePath = require('programmerart-textures')('');
var createGame = require('voxel-engine');
var container = document.body;

    var game = createGame({
        texturePath: texturePath,
        materials: [
            ['blocks/grass_top', 'blocks/dirt', 'blocks/grass_side'],
            'blocks/stone',
            'blocks/dirt']
        });
game.appendTo(container);
var createPlayer = require('voxel-player');
var test = createplayer()(game);
test.possess();
test.yaw.position(0, 10 , 0);