"use strict";
exports.__esModule = true;
exports.Node = exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    function LinkedList(array) {
        this.size = 0;
        this.first = null;
        this.last = null;
        this[Symbol.iterator] = this.iterator;
        if (array)
            this.addAll(array, this.size);
    }
    LinkedList.prototype.iterator = function () {
        var n = this.first;
        var next = function () {
            if (n) {
                var res = {
                    value: n.item,
                    done: false
                };
                n = n.next;
                return res;
            }
            else {
                return { done: true };
            }
        };
        return { next: next };
    };
    LinkedList.prototype.linkFirst = function (value) {
        var f = this.first;
        var n = new Node(null, value, f);
        this.first = n;
        if (f === null) {
            this.last = n;
        }
        else {
            f.prev = n;
        }
        return ++this.size;
    };
    LinkedList.prototype.linkLast = function (value) {
        var l = this.last;
        var n = new Node(l, value, null);
        this.last = n;
        if (l === null) {
            this.first = n;
        }
        else {
            l.next = n;
        }
        return ++this.size;
    };
    LinkedList.prototype.unlinkFirst = function () {
        if (this.first === null)
            return null;
        var item = this.first.item;
        var next = this.first.next;
        this.first = next;
        if (next === null) {
            this.last = null;
        }
        else {
            next.prev = null;
        }
        this.size--;
        return item;
    };
    LinkedList.prototype.unlinkLast = function () {
        if (this.last === null)
            return null;
        var item = this.last.item;
        var prev = this.last.prev;
        this.last = prev;
        if (prev === null) {
            this.first = null;
        }
        else {
            prev.next = null;
        }
        this.size--;
        return item;
    };
    LinkedList.prototype.unlink = function (node) {
        var item = node.item;
        var next = node.next;
        var prev = node.prev;
        if (prev === null) {
            this.first = next;
        }
        else {
            prev.next = next;
            node.prev = null;
        }
        if (next === null) {
            this.last = prev;
        }
        else {
            next.prev = prev;
            node.next = null;
        }
        node.item = null;
        this.size--;
        return item;
    };
    LinkedList.prototype.getFirst = function () {
        var _a;
        return (_a = this.first) === null || _a === void 0 ? void 0 : _a.item;
    };
    LinkedList.prototype.getLast = function () {
        var _a;
        return (_a = this.last) === null || _a === void 0 ? void 0 : _a.item;
    };
    LinkedList.prototype.shift = function () {
        var f = this.first;
        if (f !== null) {
            this.unlinkFirst();
        }
        return this.size;
    };
    LinkedList.prototype.pop = function () {
        var l = this.last;
        if (l !== null) {
            this.unlinkLast();
        }
        return this.size;
    };
    LinkedList.prototype.unshift = function (value) {
        this.linkFirst(value);
        return this.size;
    };
    LinkedList.prototype.push = function () {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        if (value.length === 1) {
            this.linkLast(value[0]);
        }
        else {
            this.addAll(value);
        }
        return this.size;
    };
    LinkedList.prototype.includes = function (value) {
        return this.indexOf(value) !== -1;
    };
    LinkedList.prototype.indexOf = function (value) {
        var index = 0;
        for (var x = this.first; x !== null; x = x.next) {
            if (x.item === value)
                return index;
            index++;
        }
        return -1;
    };
    LinkedList.prototype.add = function (value, index) {
        if (index && +index > 0 && +index < this.size) {
            this.addBefore(value, this.node(index));
        }
        else {
            this.push(value);
        }
    };
    LinkedList.prototype.remove = function (value) {
        if (arguments.length === 0) {
            throw new TypeError("The \"value\" argument cannot be empty");
        }
        for (var x = this.first; x !== null; x = x.next) {
            if (x.item === value) {
                this.unlink(x);
                return true;
            }
        }
        return false;
    };
    LinkedList.prototype.clear = function () {
        for (var x = this.first; x !== null;) {
            var next = x.next;
            x.item = null;
            x.next = null;
            x.prev = null;
            x = next;
        }
        this.first = this.last = null;
        this.size = 0;
    };
    LinkedList.prototype.get = function (index) {
        if (!Number.isInteger(index) || (index < 0 && index > this.size))
            return undefined;
        return this.node(index).item;
    };
    LinkedList.prototype.set = function (value, index) {
        if (!Number.isInteger(index))
            throw new TypeError("The \"index\" argument must be of type integer");
        if (index < 0 && index > this.size)
            throw new TypeError("The \"index\" argument must be a valid index");
        var x = this.node(index);
        var oldVal = x.item;
        x.item = value;
        return oldVal;
    };
    LinkedList.prototype.addAll = function (array, index) {
        if (!Number.isInteger(index) || index > this.size || index < 0)
            index = this.size;
        var numNew = array.length;
        if (numNew === 0)
            return false;
        var pred;
        var succ;
        if (this.size === index) {
            succ = null;
            pred = this.last;
        }
        else {
            succ = this.node(index);
            pred = succ === null || succ === void 0 ? void 0 : succ.prev;
        }
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var val = array_1[_i];
            var newNode = new Node(pred, val, null);
            if (pred == null) {
                this.first = newNode;
            }
            else {
                pred.next = newNode;
            }
            pred = newNode;
        }
        if (succ == null) {
            this.last = pred;
        }
        else {
            pred.next = succ;
            succ.prev = pred;
        }
        this.size += numNew;
        return true;
    };
    LinkedList.prototype.addBefore = function (value, succ) {
        var pred = succ.prev;
        var newNode = new Node(pred, value, succ);
        succ.prev = newNode;
        if (pred == null) {
            this.first = newNode;
        }
        else {
            pred.next = newNode;
        }
        this.size++;
    };
    LinkedList.prototype.node = function (index) {
        if (index < this.size >> 1) {
            var x = this.first;
            for (var i = 0; i < index; i++) {
                x = x.next;
            }
            return x;
        }
        else {
            var x = this.last;
            for (var i = this.size - 1; i > index; i--) {
                x = x.prev;
            }
            return x;
        }
    };
    LinkedList.prototype.toArray = function () {
        var result = [];
        for (var x = this.first; x != null; x = x.next) {
            result.push(x.item);
        }
        return result;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var Node = /** @class */ (function () {
    function Node(prev, item, next) {
        this.item = item;
        this.next = next;
        this.prev = prev;
    }
    return Node;
}());
exports.Node = Node;
