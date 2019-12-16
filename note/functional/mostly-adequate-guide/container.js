const Container = function (x) {
    this._value = x;
}

Container.of = function (x) {
    return new Container(x)
}

Container.prototype.map = function (f) {
    return Container.of(f(this._value))
}