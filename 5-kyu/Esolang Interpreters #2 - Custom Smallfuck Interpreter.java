import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;
import java.util.stream.Collectors;


public class Smallfuck {
    public static String interpreter(String code, String tape) {
        int[] points = Arrays.stream(tape.split("")).mapToInt(Integer::parseInt).toArray();
        List<Integer> pres = new ArrayList<>();
        Stack<Boolean> braces = new Stack<>();
        braces.push(true);
        int currP = 0;
        for (int i = 0; i < code.length(); i++) {
            if (currP >= points.length || currP < 0) {
                return Arrays.stream(points).mapToObj(String::valueOf).collect(Collectors.joining());
            } else if (code.charAt(i) == ']' || code.charAt(i) == '[') {
                if (code.charAt(i) == ']') {
                    braces.pop();
                    i = points[currP] == 1 ? pres.remove(braces.size() - 1) : i;
                } else {
                    braces.push(points[currP] != 0);
                    pres.add(i - 1);
                }
            } else if (braces.peek()) {
                if (code.charAt(i) == '>') ++currP;
                else if (code.charAt(i) == '<') --currP;
                else if (code.charAt(i) == '*') points[currP] ^= 1;
            }
        }
        return Arrays.stream(points).mapToObj(String::valueOf).collect(Collectors.joining());
    }
}
