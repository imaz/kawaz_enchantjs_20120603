window.onload = function(){
  enchant();
  
  var game = new Game(320,320);
  game.preload('./resources/images/player.png');
  game.onload = function(){
    //enchant.Sprite
    var player = new Sprite(32,32);
    player.image = game.assets['./resources/images/player.png'];
    player.frame = [0,0,1,1,2,2,3,3];
    player.rotate(-5);
    player.scale(1,1);
    //enchant.Entity
    player.backgroundColor = 'red';
    //enchant.Node
    player.moveBy(30,59);

    //event
    player.addEventListener('enterframe',function(){
      this.speedX = 0;
      this.speedY = 0;
      if(game.input.left){
        this.scaleX = 1;
        this.speedX = -5;
      }else if(game.input.right){
        this.scaleX = -1;
        this.speedX = 5;
      }else if(game.input.down){
        this.speedY = 5;
      }else if(game.input.up){
        this.speedY = -5;
      }
      this.x += this.speedX;
      this.y += this.speedY;
    });

    game.rootScene.addChild(player);
  };
  game.start();
}
