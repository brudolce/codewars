const encryption = message => [...message].map(v => CHAR_TO_MORSE[v] || v).join(' ');
