fn high_and_low(numbers: &str) -> String {
    format!(
        "{} {}",
        numbers
            .split_whitespace()
            .map(|s| s.parse::<i64>().unwrap())
            .max()
            .unwrap(),
        numbers
            .split_whitespace()
            .map(|s| s.parse::<i64>().unwrap())
            .min()
            .unwrap()
    )
}
