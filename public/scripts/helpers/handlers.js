function add_rectangle(scene, x, y, width, height, fillColor, alpha) {
	const graphics = scene.add.graphics();
	graphics.fillStyle(fillColor, alpha);
	graphics.fillRect(x, y, width, height);
	return graphics;
}

function bounce_off(player, trampoline) {
	if (player.body.touching.down && player.body.y < trampoline.body.y) {
		player.body.velocity.y += 1.4 * player_jump_velocity;
		trampoline.anims.play('trampoline_jump');
	}
}

function collect_fruit(_player, fruit) {
	fruit.disableBody(true, true);
}

function detect_fan(player, fans) {
	fans.getChildren().forEach((fan) => {
		const ax = Math.abs(player.body.x - fan.x);
		const ay = Math.abs(player.body.y - fan.y);

		const c1 = ax < 24;
		const c2 = fan.y > player.body.y;
		const c3 = ay < 200;

		if (c1 && c2 && c3) {
			if (ay < 100) {
				player.body.velocity.y = -800;
			} else {
				player.body.velocity.y -= (200 - ay) / 4;
			}
		}
	});
}

function get_hit(player, _spike) {
	player.ishurting = true;
	player.damagedat = this.time.now;
	this.hurtsound.play();
}

function move_along(player, mover) {
	if (player.body.touching.down) {
		if (mover.type === 'horizontal') player.setX(player.x + mover.dir);
		if (mover.type === 'vertical') player.setY(player.y - mover.dir);
	}
}

function move_camera(camera) {
	camera.setScroll(player.x - game_width / 2, player.y - game_height * (3 / 4));
}

function move_platforms(movers) {
	movers.getChildren().forEach((mover) => {
		if (mover.type === 'horizontal') {
			mover.x += mover.dir;
			if (mover.x > mover.end || mover.x < mover.start) mover.dir *= -1;
		} else if (mover.type === 'vertical') {
			mover.y -= mover.dir;
			if (mover.y < mover.end || mover.y > mover.start) mover.dir *= -1;
		}

		mover.setPosition(mover.x, mover.y);
		mover.body.updateFromGameObject();
	});
}

function blink_rocks(rocks) {
	rocks.getChildren().forEach((rock) => {
		rock.on('animationcomplete-rock_blink', () => {
			console.log('Blink animation finished');
			rock.anims.play('rock_idle');
		});

		console.log('dryness = ', rock.dryeyes);
		if (rock.dryeyes >= 300) {
			rock.anims.play('rock_blink');
			rock.dryeyes = 0;
		} else {
			rock.dryeyes += 1;
		}
	});
}
