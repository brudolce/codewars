import java.util.List;
import java.util.stream.Collectors;

public class CountingDuplicates {
  
    public static int duplicateCount(String text) {
        int count = 0;
        int same = 0;
        List<Character> distinct = text.chars().distinct().sorted().mapToObj(i -> (char) i).collect(Collectors.toList());
        List<Character> all = text.chars().sorted().mapToObj(i -> (char) i).collect(Collectors.toList());
        for (int i = 0; i < distinct.size(); i++) {
            for (int j = 0; j < all.size(); j++) {
                if (distinct.get(i) == all.get(j) || distinct.get(i) == all.get(j)+32) {
                    same++;
                }
            }
            if (same > 1) {
                count++;
            }
            same = 0;
        }
        return count;
    }
}
