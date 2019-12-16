// 复习一下数学

add(add(x, y), z) == add(x, add(y, z))

add(x, y) == add(y, x)

add(x, 0) == x

multiply(x, add(y, z)) === add(multiply(x, y), multiply(x, z))

result = add(multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b));

result = add(multiply(flock_b, flock_a), multiply(flock_a, flock_b))

result = multiply(flock_b, add(flock_a, flock_a))


/*

函数式编程希望去践行每一部分都能完美结合的理论，以一种通用的、可组合的组件来表示我们的问题，解决我们的问题
相较于命令式编程，函数式编程拥有更多的约束
这些数学性的约束可以带来更好的回报

*/