function move_player(player) {
  // Sideways
  if (controls.left.isDown || controls.a.isDown) {
    player.setVelocityX(-160);
    player.flipX = true;
    player.anims.play("left", true);
  } else if (controls.right.isDown || controls.d.isDown) {
    player.setVelocityX(160);
    player.flipX = false;
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("idle", true);
  }

  // Upwards
  if ((controls.up.isDown || controls.w.isDown) && player.body.touching.down) {
    player.setVelocityY(player_jump_velocity);
  }

  if (!player.body.touching.down) {
    if (player.body.velocity.y < 0) {
      player.anims.play("jump", true);
    } else {
      player.anims.play("fall", true);
    }
  }
}

function move_camera(cam) {
  cam.setScroll(player.x - game_width / 2, player.y - game_height * (3 / 4));
}
