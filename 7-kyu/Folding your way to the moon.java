public class PaperFolder {
    public static Long fold(Double distance) {
        Long folds=0L;
        double thickness=0.0001;
        if (distance<0) return null;
        while (thickness<distance){
            thickness=thickness*2;
            folds++;
        }
        return Long.valueOf(folds);
    }
}
