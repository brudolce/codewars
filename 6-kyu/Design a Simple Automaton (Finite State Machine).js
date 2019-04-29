function Automaton(){}

Automaton.prototype.readCommands = function(commands) {
  return /^0*1(1|00|01)*$/.test(commands.join(''));
}

let myAutomaton = new Automaton();
