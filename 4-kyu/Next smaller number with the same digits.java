import java.util.*;
public class Kata
{
public static long nextSmaller(long n){
    if(n<10) {return -1;}
    char a[] = Long.toString(n).toCharArray();
    int j;
    for(int i = a.length-2;i>=0;i--)
    {
        for (j = a.length-1; j>=i; j--) 
        {
            if(a[j]<a[i])
            {
                if(i==0&&a[j]=='0') {continue;}
                char aux;
                aux=a[i];
                a[i]=a[j];
                a[j]=aux;
                break;
            }
        }
        char[]b;
        if(i<j)
        {
        Arrays.sort(b=Arrays.copyOfRange(a,i+1,a.length));
        for (int h = 0; h < b.length; a[a.length-h-1]=b[h++]);
        return Long.parseLong(new String(a));
        }}
        return -1;
    }
}
