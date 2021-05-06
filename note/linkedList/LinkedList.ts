
/**
 * 仿造java Linkedlist
 */
export class LinkedList {
    private size: number = 0
    private first: Node = null;
    private last: Node = null;
    [Symbol.iterator]: any = this.iterator

    constructor(array?: any[]) {
        if (array) this.addAll(array, this.size)
    }

    private iterator() {
        let n = this.first
        const next = () => {
            if (n) {
                const res = {
                    value: n.item,
                    done: false
                }
                n = n.next
                return res
            } else {
                return { done: true }
            }
        }
        return { next }
    }

    private linkFirst(value: any) {
        const f = this.first
        const n = new Node(null, value, f)
        this.first = n
        if (f === null) {
            this.last = n
        } else {
            f.prev = n
        }
        return ++this.size
    }

    private linkLast(value: any) {
        const l = this.last
        const n = new Node(l, value, null)
        this.last = n
        if (l === null) {
            this.first = n
        } else {
            l.next = n
        }
        return ++this.size
    }

    private unlinkFirst() {
        if (this.first === null) return null
        const item = this.first.item
        const next = this.first.next
        this.first = next
        if (next === null) {
            this.last = null
        } else {
            next.prev = null
        }
        this.size--
        return item
    }

    private unlinkLast() {
        if (this.last === null) return null
        const item = this.last.item
        const prev = this.last.prev
        this.last = prev
        if (prev === null) {
            this.first = null
        } else {
            prev.next = null
        }
        this.size--
        return item
    }

    private unlink(node: Node) {
        const item = node.item
        const next = node.next
        const prev = node.prev

        if (prev === null) {
            this.first = next
        } else {
            prev.next = next
            node.prev = null
        }

        if (next === null) {
            this.last = prev
        } else {
            next.prev = prev
            node.next = null
        }

        node.item = null
        this.size--
        return item
    }

    public getFirst() {
        return this.first?.item
    }

    public getLast() {
        return this.last?.item
    }

    public shift() {
        const f = this.first
        if (f !== null) {
            this.unlinkFirst()
        }
        return this.size
    }

    public pop() {
        const l = this.last
        if (l !== null) {
            this.unlinkLast()
        }
        return this.size
    }

    public unshift(value: any) {
        this.linkFirst(value)
        return this.size
    }

    public push(...value) {
        if (value.length === 1) {
            this.linkLast(value[0])
        } else {
            this.addAll(value)
        }
        return this.size
    }

    public includes(value: any) {
        return this.indexOf(value) !== -1
    }

    public indexOf(value: any) {
        let index = 0
        for (let x = this.first; x !== null; x = x.next) {
            if (x.item === value)
                return index
            index++
        }
        return -1
    }

    public add(value: any, index?: number) {
        if (index && +index > 0 && +index < this.size) {
            this.addBefore(value, this.node(index))
        } else {
            this.push(value)
        }
    }

    public remove(value: any) {
        if (arguments.length === 0) {
            throw new TypeError(`The "value" argument cannot be empty`)
        }

        for (let x = this.first; x !== null; x = x.next) {
            if (x.item === value) {
                this.unlink(x)
                return true
            }
        }
        return false
    }

    public clear() {
        for (let x = this.first; x !== null;) {
            const next = x.next
            x.item = null
            x.next = null
            x.prev = null
            x = next
        }
        this.first = this.last = null
        this.size = 0
    }

    public get(index: number) {
        if (!Number.isInteger(index) || (index < 0 && index > this.size)) return undefined

        return this.node(index).item
    }

    public set(value: any, index: number) {
        if (!Number.isInteger(index)) throw new TypeError(`The "index" argument must be of type integer`)
        if (index < 0 && index > this.size) throw new TypeError(`The "index" argument must be a valid index`)
        const x = this.node(index)
        const oldVal = x.item
        x.item = value
        return oldVal
    }

    public addAll(array: any[], index?: number) {
        if (!Number.isInteger(index) || index > this.size || index < 0) index = this.size

        const numNew = array.length
        if (numNew === 0) return false

        let pred: Node
        let succ: Node

        if (this.size === index) {
            succ = null
            pred = this.last
        } else {
            succ = this.node(index)
            pred = succ?.prev
        }

        for (let val of array) {
            const newNode = new Node(pred, val, null)
            if (pred == null) {
                this.first = newNode
            } else {
                pred.next = newNode
            }
            pred = newNode
        }

        if (succ == null) {
            this.last = pred
        } else {
            pred.next = succ
            succ.prev = pred
        }

        this.size += numNew
        return true
    }

    private addBefore(value: any, succ: Node) {
        const pred = succ.prev
        const newNode = new Node(pred, value, succ)
        succ.prev = newNode
        if (pred == null) {
            this.first = newNode
        } else {
            pred.next = newNode
        }
        this.size++
    }

    private node(index: number): Node {
        if (index < this.size >> 1) {
            let x = this.first
            for (let i = 0; i < index; i++) {
                x = x.next
            }
            return x
        } else {
            let x = this.last
            for (let i = this.size - 1; i > index; i--) {
                x = x.prev
            }
            return x
        }
    }

    public toArray() {
        const result = []
        for (let x = this.first; x != null; x = x.next) {
            result.push(x.item)
        }
        return result
    }
}

export class Node {
    item: any
    next: Node
    prev: Node

    constructor(prev: Node, item: any, next: Node) {
        this.item = item
        this.next = next
        this.prev = prev
    }
}