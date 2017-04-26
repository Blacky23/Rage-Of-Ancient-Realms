//var GameMenu = function () {};

GameMenu.prototype = {   
menuConfig: {
    startY: 260,
    startx: 30
},
    
//innit: function () {
    this.titletext = game.make.text(game.world.centerx, 100, "Game Title", {
        font: 'bold 60pt TheMinion',
        fill: '#FDFFB5',
        align: 'center'  } ),
        
    
};

//create: function () {
    
    game.stage.DisableVisibilityChange = true;
    game.add.sprite(0,0, 'menu-bg');
    game.add.existing(this.titletext);
    
    this.addMenuOption('Start', function () {
        game.add.start("Game");
    });
    this.addMenuOption('Options', function () {
        game.add.start("Options")
    } );
    this.addMenuOption('Credits', function () {
     game.state.start("Credits");   
    });
                       
                      
                      
                      )
}