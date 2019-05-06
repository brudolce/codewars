class Ship {
  constructor(draft,crew){
   this.draft = draft;
   this.crew = crew;
  }
   
   isWorthIt(){
     return this.draft - 1.5 * this.crew > 20;
   }
}
