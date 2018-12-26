//ENEMY
var Enemy = function(posicaoInimigoX, posicaoInimigoY, velocidadeBug)
{
	this.posicaoInimigoX = posicaoInimigoX;
	this.posicaoInimigoY = posicaoInimigoY;
	this.velocidadeBug = velocidadeBug;
  this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {

	this.posicaoInimigoX += this.velocidadeBug * dt;
//checkCollisions: function(){
	if (this.posicaoInimigoX > 465) {
        this.posicaoInimigoX = -50;
        this.velocidadeBug = 100 + Math.floor(250 * Math.random());
    };

// colide: function(){

	while (player.posicaoJogadorX < this.posicaoInimigoX + 80 && player.posicaoJogadorX + 80 > this.posicaoInimigoX && player.posicaoJogadorY < this.posicaoInimigoY + 60 && 60 + player.posicaoJogadorY > this.posicaoInimigoY) {
        player.posicaoJogadorX = 184;
        player.posicaoJogadorY = 405;
			// },
    };
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.posicaoInimigoX, this.posicaoInimigoY);
};

//PLAYER
var Player = function (posicaoJogadorX, posicaoJogadorY) {

		this.posicaoJogadorX = posicaoJogadorX;
    this.posicaoJogadorY = posicaoJogadorY;
    this.player = 'images/red-char-horn-girl.png';
};

 Player.prototype.update = function (dt) {
 };

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.posicaoJogadorX, this.posicaoJogadorY);
};

Player.prototype.handleInput = function (keyPress) {
	 if (keyPress == 'left' && this.posicaoJogadorX > 0) {
        this.posicaoJogadorX -= 92;
    };

	 if (keyPress == 'right' && this.posicaoJogadorX < 405) {
        this.posicaoJogadorX += 92;
    };
	 if (keyPress == 'up' && this.posicaoJogadorY > 0) {
		 this.posicaoJogadorY -= 83;
    };

	 if (keyPress == 'down' && this.posicaoJogadorY < 405) {
        this.posicaoJogadorY += 83;
    };

	  if (this.posicaoJogadorY < 0) {
        setTimeout(() => {
            this.posicaoJogadorX = 184;
            this.posicaoJogadorY = 405;
        }, 800);
    };
};

var allEnemies = [];

var enemyLocation = [63, 147, 230];

enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 250);
    allEnemies.push(enemy);
});

var player = new Player(184	, 405);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
