//short solution
function Compiler() {};

Compiler.prototype.compile = function(program) {
  return this.pass3(this.pass2(this.pass1(program)));
};

Compiler.prototype.pass1 = function(program) {
  var tokens = program.match(/[-+*/\(\)\[\]]|[A-Za-z]+|[0-9]+/g);
  var args = {};

  accept('[');
  for (var v, i = 0; v = accept(/[a-z]+/); args[v] = i++);
  accept(']');
  return expression();
  
  function accept(sym)  { return (sym instanceof RegExp ? sym.test(tokens[0]) : sym == tokens[0]) && tokens.shift(); }
  function expression() { for (var o, e = term(); o = accept(/\+|-/); e = { op: o, a: e, b: term() }); return e; }
  function term()       { for (var o, t = factor(); o = accept(/\*|\//); t = { op: o, a: t, b: factor() }); return t; }
  function factor(e)    { return accept('(') ? (e = expression(), accept(')'), e) : number() || variable(); }
  function number(n)    { return (n = accept(/\d+/)) && { op: 'imm', n: +n }; }
  function variable(v)  { return (v = accept(/[a-z]+/)) && { op: 'arg', n: args[v] }; }
};

Compiler.prototype.pass2 = function optimize(ast) {
  if ('n' in ast)
    return ast;
  var a = optimize(ast.a), b = optimize(ast.b);
  if (a.op == 'imm' && b.op == 'imm')
    return { op: 'imm', n: eval(a.n + ast.op + b.n) };
  return { op: ast.op, a: a, b: b };
};

Compiler.prototype.pass3 = function translate(ast) {
  if (ast.op == 'imm')
    return [ 'IM ' + ast.n ];
  else if (ast.op == 'arg')
    return [ 'AR ' + ast.n ];
  else
    return Array.prototype.concat.call([],
      translate(ast.a), 'PU',
      translate(ast.b), 'SW', 'PO',
      [ 'SU', 'DI', 'MU', 'AD' ]['-/*+'.indexOf(ast.op)]);
};




//long solution
function Compiler () {};

Compiler.prototype.compile = function (program) {
  return this.pass3(this.pass2(this.pass1(program)));
};

var operators = {'+': 2, '-': 2, '*': 1, '/': 1};

Compiler.prototype.eval = function (a, b, op) {
    if (op == '+')
        return a + b;
    else if (op == '-')
        return a - b;
    else if (op == '*')
        return a * b;
    else
        return a / b;
}

Compiler.prototype.tokenize = function (program) {
  // Turn a program string into an array of tokens.  Each token
  // is either '[', ']', '(', ')', '+', '-', '*', '/', a variable
  // name or a number (as a string)
  var regex = /\s*([-+*/\(\)\[\]]|[A-Za-z]+|[0-9]+)\s*/g;
  return program.replace(regex, ":$1").substring(1).split(':').map( function (tok) {
    return isNaN(tok) ? tok : tok|0;
  });
};

Compiler.prototype.pass1 = function (program) {
    let tokens = this.tokenize(program), index = tokens.indexOf(']'), args = {}, next, dstack = [], ostack = [];
    for (let i = 1; i < index; i++)
        args[tokens[i]] = i - 1;
    tokens = tokens.slice(index + 1);
    tokens.unshift('(');
    tokens.push(')');
    while ((next = tokens.pop()) !== void 0)
    {
        if (operators[next])
        {
            while (true)
            {
                if (!ostack.length)
                {
                    ostack.push(next);
                    break;
                }
                else if (ostack[ostack.length - 1] === ')')
                {
                    ostack.push(next);
                    break;
                }
                else if (operators[ostack[ostack.length - 1]] >= operators[next])
                {
                    ostack.push(next);
                    break;
                }
                else
                    dstack.push({op: ostack.pop(), a: dstack.pop(), b: dstack.pop()});
            }
        }
        else if (next === '(')
        {
            while ((next = ostack.pop()) !== ')')
            {
                if (next === void 0)
                    break;
                dstack.push({op: next, a: dstack.pop(), b: dstack.pop()});
            }
        }
        else if (next === ')')
            ostack.push(next);
        else
        {
            if (args[next] !== void 0)
                dstack.push({op: 'arg', n: args[next]});
            else
                dstack.push({op: 'imm', n: Number(next)});
        }
    }
    return dstack[0];
};

Compiler.prototype.pass2 = function (x) {
    if ((x.op !== 'arg') && (x.op !== 'imm'))
    {
        x.a = this.pass2(x.a);
        x.b = this.pass2(x.b);
        if ((x.a.op === 'imm') && (x.b.op === 'imm'))
            return {op: 'imm', n: this.eval(x.a.n, x.b.n, x.op)}
    }
    return x;
};

Compiler.prototype.pass3 = function (x) {
    if (x.op == 'imm')
        return ["IM " + x.n, "PU"];
    else if (x.op == 'arg')
        return ["AR " + x.n, "PU"];
    else if (x.op == '+')
        return this.pass3(x.a).concat(this.pass3(x.b)).concat(["PO", "SW", "PO", "AD", "PU"]);
    else if (x.op == '-')
        return this.pass3(x.a).concat(this.pass3(x.b)).concat(["PO", "SW", "PO", "SU", "PU"]);
    else if (x.op == '*')
        return this.pass3(x.a).concat(this.pass3(x.b)).concat(["PO", "SW", "PO", "MU", "PU"]);
    else
        return this.pass3(x.a).concat(this.pass3(x.b)).concat(["PO", "SW", "PO", "DI", "PU"]);
};
