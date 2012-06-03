window.onload = function(){
  enchant();
  
  var game = new Game(320,320);
  game.preload('./resources/images/player.png');
  game.onload = function(){
    var player = new Sprite(32,32);
    player.image = game.assets['./resources/images/player.png'];
    player.frame = [0,0,1,1,2,2,3,3];
    player.rotation = 33;
    game.rootScene.addChild(player);
  };
  game.start();
}
