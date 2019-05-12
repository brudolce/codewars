const complexFunction = function(arg1, arg2) { return arg1+arg2; };

function cache(func) {
  let cache = {};
  return (...args) => {
    let arg1 = args[0];
    let arg2 = args[1];

    // Use JSON.stringify on the arguments to create a cache key
    let cache_key = JSON.stringify(args);;

    // If cache key is present in cache, retrieve the value of the cache key
    if (cache_key in cache) {
      return cache[cache_key];
    }
    // Otherwise, calculate the result of the complex function by calling it
    else {
      cache[cache_key] = func(arg1,arg2);
      return cache[cache_key];
    }
  }
}


//this one I used a lot of help from google and stack overflow. To me was not quite clear how to do what was asked.
