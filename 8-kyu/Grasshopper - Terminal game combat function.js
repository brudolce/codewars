function combat(health, damage) {
  return damage > health ? 0 : health-damage
}
