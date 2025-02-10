let score = 0;
let score_label;

// Game Config
const config = {
	type: Phaser.AUTO,
	width: game_width,
	height: game_height,
	scene: Main,
	parent: game_container,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: world_gravity },
		},
	},

	scale: {
		mode: Phaser.Scale.NONE,
	},
};

// Launch Game
const game = new Phaser.Game(config);
