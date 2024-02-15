function add_rectangle(scene, x, y, width, height, fillColor, alpha) {
  const graphics = scene.add.graphics();
  graphics.fillStyle(fillColor, alpha);
  graphics.fillRect(x, y, width, height);
  return graphics;
}

function detect_fan(player, fans) {
  fans.getChildren().forEach((fan) => {
    const ax = Math.abs(player.body.x - fan.x);
    const ay = Math.abs(player.body.y - fan.y);

    const c1 = ax < 24;
    const c2 = fan.y > player.body.y;
    const c3 = ay < 200;

    if (c1 && c2 && c3) {
      console.log("fan detected!");
      console.log(player.body.velocity.y);

      player.body.velocity.y -= (200 - ay) / 10;
    }
  });
}
