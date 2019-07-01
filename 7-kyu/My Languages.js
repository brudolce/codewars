function myLanguages(results) {
    return Object.keys(results).filter(v=>results[v]>=60).sort((a,b)=>results[b]-results[a])
}
