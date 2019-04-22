function stripUrlParams(url, paramsToStrip){
  return url.replace(/&?([^?=]+)=.+?/g, (m, p1, qPos) => {
    return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
   });
}
