// 完成计算： （4 + 0） * 2 + 4 * 2

const Flock = function (n) {
    this.seagulls = n;
}

Flock.prototype.add = function (other) {
    this.seagulls += other.seagulls;
    return this;
}

Flock.prototype.multiply = function (other) {
    this.seagulls = this.seagulls * other.seagulls;
    return this;
}

const flock_a = new Flock(4)
const flock_b = new Flock(2)
const flock_c = new Flock(0)

// 在计算过程中，flock_a被改变
const result = flock_a.add(flock_c).multiply(flock_b).add(flock_a.multiply(flock_b)).seagulls;
console.log(result); // => 32
