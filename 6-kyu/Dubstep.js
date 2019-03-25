function songDecoder(song){
    return song.replace(/(?:WUB)*WUB/g,' ').replace(/^\s*(.*\S)\s*$/,'$1');
}
