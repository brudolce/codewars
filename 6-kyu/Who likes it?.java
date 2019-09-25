import java.util.Arrays;
import java.util.List;

class Solution {
 public static String whoLikesIt(String... names) {
        if (names == null || names.equals(""));
        List<String> strings = Arrays.asList(names);
        if ((strings.size() == 1) && (strings.get(0).length() > 0)) {
            return strings.get(0) + " likes this";
        } else if (strings.size() == 2) {
            return strings.get(0) + " and " + strings.get(1) + " like this";
        } else if (strings.size() == 3) {
            return strings.get(0) + ", " + strings.get(1) + " and " + strings.get(2) +" like this";
        } else if (strings.size() > 3) {
            return strings.get(0) + ", " + strings.get(1) + " and " + (strings.size()-2) + " others like this";
        }
        return "no one likes this";
    }
}
