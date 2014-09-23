var texturePath = require('programmerart-textures')('');
var createGame = require('voxel-engine');
var container = document.body;

    var game = createGame({
        texturePath: texturePath,
        generateChunks: false,
        materials: [
            ['blocks/grass_top', 'blocks/dirt', 'blocks/grass_side'],
            'blocks/stone',
            'blocks/dirt']
        
        });
game.appendTo(container);
var createLand = require('voxel-land');
var land = createLand(game);
var createRegistry = require('voxel-registry');
var registry = createRegistry(game);
land.enable();
var createPlayer = require('voxel-player')(game);
var test = createPlayer();
test.possess();
test.yaw.position(0, 10 , 0);