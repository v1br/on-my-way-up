function spread_fruits(fruits) {
  // On ground
  spread_fruits_row(fruits, "strawberry", 4, 36, 444, -180);
  spread_fruits_row(fruits, "strawberry", 4, 36, 164, -320);
  spread_fruits_row(fruits, "strawberry", 4, 36, 444, -460);
  spread_fruits_row(fruits, "strawberry", 3, 36, 196, -600);
  spread_fruits_row(fruits, "strawberry", 2, 36, 216, -880);
  spread_fruits_row(fruits, "strawberry", 2, 36, 360, -1020);
  spread_fruits_row(fruits, "strawberry", 5, 36, 312, -1160);
  spread_fruits_row(fruits, "strawberry", 2, 36, 216, -1300);
  spread_fruits_row(fruits, "strawberry", 3, 36, 64, -1440);
  spread_fruits_row(fruits, "strawberry", 5, 36, 70, -1820);
  spread_fruits_row(fruits, "strawberry", 4, 36, 404, -2060);

  // In air
}

function spread_fruits_row(fruits, fruit_type, length, gap, x, y) {
  for (i = 0; i < length; i++) {
    const item = fruits.create(x + gap * i, y, fruit_type).setSize(8, 8);
    item.anims.play(fruit_type, true);
  }
}
