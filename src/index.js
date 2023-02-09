module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++)
        if (!str.includes(bracketsConfig[i].join(''))) {
          return i;
        } else {
          str = str.replace(bracketsConfig[i].join(''), '');
        }

        
    if (str.length === 0) {
      return true;
    } else {
      return false;
  }
}
