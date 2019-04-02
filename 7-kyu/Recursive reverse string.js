function reverse(str) {
    return str.length > 1 ? reverse(str.slice(1)) + str[0] : str;
}
