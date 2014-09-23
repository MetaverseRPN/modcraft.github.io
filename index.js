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
var createPlugins = require('voxel-plugins');
var plugins = createPlugins(game, {require:require});
game.appendTo(container);
var registry = plugins.get('voxel-registry');
var createPlayer = require('voxel-player')(game);
var test = createPlayer("test.png");
test.possess();
test.yaw.position(0, 10 , 0);