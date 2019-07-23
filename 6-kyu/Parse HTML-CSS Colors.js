function parseHTMLColor(c) {
  if (!c.match("#")) c = PRESET_COLORS[c.toLowerCase()];

  c = c.replace('#', '');

  if (c.length < 6) c = c.replace(/(.)/g, "$1$1");

  return {
    r: parseInt(c.substring(0, 2), 16),
    g: parseInt(c.substring(2, 4), 16),
    b: parseInt(c.substring(4, 6), 16)
  };
}
