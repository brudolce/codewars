public class Solution {

  public static String camelCase(String str) {
        if (str == "") return "";
        String word = str.replaceAll("^\\s+", "");
        String[] words = word.split("\\s+");
        String camelWord = "";
        for (String s : words) {
            if (s != null && s.length() > 0) {
                camelWord += s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase();
            }
        } return camelWord;
    }
}
