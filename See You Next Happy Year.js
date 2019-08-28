const nextHappyYear = year => (/(.).*\1/.test(year + 1) ? nextHappyYear(year + 1) : year + 1)
