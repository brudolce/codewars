function validate(username, password){
  if (password.includes('||') || password.includes('//'))
    return 'Wrong username or password!'
  var database = new Database();
  return database.login(username, password);
}
