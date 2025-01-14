function solution(a, b) {
    let sol1 = 0;
    let sol2 = 0;

    sol1 = Number(String(a) + String(b));
    sol2 = 2 * a * b;

    if (sol1 < sol2) {
        return sol2;
    } else {
        return sol1;
    }
}