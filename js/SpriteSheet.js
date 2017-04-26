var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load

    game.load.spritesheet('mummy', 'assets/sprite/mummy.png', 37, 45, 18);
    
    game.load.spritesheet('girl', 'assets/sprite/girl.png', 304, 255, 190);




}


function create() {
    
    var walk = mummy.animations.add('walk');
    
     mummy.animations.play('walk', 10, true);
    
    
    var walk = girl.animations.add('walk');
    
    girl.animations.play('walk', 10, true);
    

}