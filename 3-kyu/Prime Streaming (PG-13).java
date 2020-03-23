import java.util.*;
import java.util.stream.*;

public class Primes 
{
    private static BitSet bitset = new PrimeBitSet().bitset;
    
    public static IntStream stream() 
    {
        return IntStream.iterate(2, i -> bitset.nextSetBit(i+1));
    }
}

class PrimeBitSet 
{
    BitSet bitset;
    
    PrimeBitSet() 
    {
        int mx = 16000000;
        int mn = 4000; 
        bitset = new BitSet(mx);
        bitset.set(2, mx-1);
        
        int i = 1;
        while (i < mn) 
        {
            i = bitset.nextSetBit(i+1);
            for (int j = i * i; j < mx; j += i)
            {
                bitset.clear(j);
            }
        }
    }
}
