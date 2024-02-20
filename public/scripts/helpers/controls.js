function move_player_left(player) {
  player.setVelocityX(-160);
  player.flipX = true;
  player.anims.play("left", true);
}

function move_player_right(player) {
  player.setVelocityX(160);
  player.flipX = false;
  player.anims.play("right", true);
}

function move_player_idle(player) {
  player.setVelocityX(0);
  player.anims.play("idle", true);
}

function move_player_drop(player) {
  if (player.body.velocity.y < 0) {
    player.anims.play("jump", true);
  } else {
    player.anims.play("fall", true);
  }
}

function move_player_hit(player) {
  player.setVelocityX(-120);
  if (player.body.touching.down) {
    console.log("here");
    player.setVelocityY(player_jump_velocity * (3 / 4));
  }
  player.anims.play("hit", true);
}

function move_player(player) {
  if (controls.space.isDown) {
    move_player_hit(player);
  } else {
    if (controls.left.isDown || controls.a.isDown) {
      move_player_left(player);
    } else if (controls.right.isDown || controls.d.isDown) {
      move_player_right(player);
    } else {
      move_player_idle(player);
    }

    if (player.body.touching.down) {
      if (controls.up.isDown || controls.w.isDown) {
        player.setVelocityY(player_jump_velocity);
      }
    } else {
      move_player_drop(player);
    }
  }
}

function move_camera(cam) {
  cam.setScroll(player.x - game_width / 2, player.y - game_height * (3 / 4));
}
