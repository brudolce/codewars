function convertQueryToMap(query) {

  if (query == null || typeof query === 'undefined' || query === '') {
    return {};
  }

let result = query.split('&').reduce( (acc, pair) => {

    let [key, value] = pair.split('=');
    let parts = key.split('.');
    let lastPart = parts.splice(parts.length - 1, 1)[0];
    let leftObj = parts.reduce((objMap, part) => {
        if (!objMap[part]) { objMap[part] = {}; }
        return objMap[part];
    }, acc);
    leftObj[lastPart] = decodeURIComponent(value);
    return acc;
  }, {});
  return result;
}
