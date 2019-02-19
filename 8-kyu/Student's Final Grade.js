const finalGrade = (exam, projects) => exam > 90 || projects > 10 ? 100 : exam >= 75 && projects >= 5 ? 90 : exam >= 50 && projects >= 2 ? 75 : 0 
