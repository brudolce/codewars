class Arge {
    
    public static int nbYear(int p0, double percent, int aug, int p) {
        // your code
        int newPop = 0;
        //Calculate the new population
        newPop = p0 + new Double( (p0*percent)/100 ).intValue() + aug;
        
        //Call the function with the new population
        if(newPop < p){
          return nbYear(newPop, percent, aug ,p) + 1;
        }
        return 1;
    }
    

}
