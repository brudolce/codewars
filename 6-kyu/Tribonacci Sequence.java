    public static double[] tribonacci(double[] s, int n) {
        double[] fib = new double[n];

        if (n == 0) {
            return new double[]{};

        } else if (n == 1) {
            fib[0] = s[0];
            return fib;
        } else if (n == 2) {
            fib[0] = s[0];
            fib[1] = s[1];
            return fib;
        } else
            fib[0] = s[0];
            fib[1] = s[1];
            fib[2] = s[2];
        for (int i = 3; i < n; i++) {
            double fibnext = fib[i] = fib[i - 1] + fib[i - 2] + fib[i - 3];
            fib[i] = fibnext;
        }
        return fib;
    }
