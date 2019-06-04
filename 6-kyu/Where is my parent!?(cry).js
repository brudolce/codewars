function findChildren(d){
    return d.split('').sort((a,b)=> {
      if (a.toLowerCase()===b.toLowerCase() && a !== b) return a.charCodeAt() - b.charCodeAt();
      return a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt()
    }).join('')
    
};

//with locale compare stuff
function findChildren(dancingBrigade){

  return dancingBrigade.split("")
                       .sort((a,b)=>a.localeCompare(b,"kf",{caseFirst:"upper"}))
                       .join("");
  
};
