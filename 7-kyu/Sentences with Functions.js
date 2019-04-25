function funcToString(args) {
if (args.length==0) return arguments.callee.caller.name + '.' ;
   return `${arguments.callee.caller.name} ${args[0]}`;
};

function Adam() {return funcToString(arguments)}
function has() {return funcToString(arguments)}
function a() {return funcToString(arguments)}
function dog() {return funcToString(arguments)}
function The() {return funcToString(arguments)}
function name() {return funcToString(arguments)}
function of() {return funcToString(arguments)}
function the() {return funcToString(arguments)}
function is() {return funcToString(arguments)}
function also() {return funcToString(arguments)}
