function spread_fruits(fruits) {
  spread_fruits_row(fruits, "strawberry", 2, 32, 400, -180);
  spread_fruits_row(fruits, "strawberry", 4, 32, 100, -320);
  spread_fruits_row(fruits, "strawberry", 4, 32, 400, -460);
  spread_fruits_row(fruits, "strawberry", 4, 32, 100, -600);
}

function collect_fruit(player, fruit) {
  fruit.disableBody(true, true);
}

function spread_fruits_row(fruits, fruit_type, length, gap, x, y) {
  for (i = 0; i < length; i++) {
    const item = fruits.create(x + gap * i, y, fruit_type);
    item.anims.play(fruit_type, true);
  }
}
