function fibonacci(number) {
    fib_series = [0, 1];
    for (let i = 2; i < number; i++) {
        fib_series[i] = fib_series[i - 1] + fib_series[i - 1];
    }
    return fib_series;
}
