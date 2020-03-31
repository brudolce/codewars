import java.util.*;
import java.lang.*;

class Dinglemouse {
  
  private static final String ALPHABET = Preloaded.ALPHABET;
  
public static String[] flapDisplay(final String[] lines, final int[][] rotors) {
        ArrayList<String> result = new ArrayList<>();

        for(int i = 0; i < lines.length; i++){
            char[] beforeChars = lines[i].toCharArray();
            int[] steps = rotors[i];
            int tempStep = 0;
            StringBuilder temporary = new StringBuilder();

            for(int j = 0; j < beforeChars.length;j++){

                int beforeCharIndex = ALPHABET.indexOf(beforeChars[j]);
                int afterCharIndex = (beforeCharIndex + steps[j] + tempStep) % ALPHABET.length();

                char afterCharValue = ALPHABET.charAt(afterCharIndex);
                temporary.append(afterCharValue);
                tempStep = (tempStep + steps[j])% ALPHABET.length();
            }
            result.add(temporary.toString());

        }
        return result.toArray(new String[]{});
    }
  
} 
