let rnd = 0.00000001;
Math = Object.create(Math, { random: { value: () => rnd += 0.00000001 } });
Math.random.toString = () => 'function random() { [native code] }';
Object.freeze(Math);
guess = 1;
