export default class LinkedList {
    private size: number = 0
    private first: Node = null
    private last: Node = null
    public [Symbol.iterator]: any = this.iterator

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

    private linkBefore(value: any, succ: Node) {
        const pred = succ.prev
        const n = new Node(pred, value, succ)
        succ.prev = n
        if (pred === null) {
            this.first = n
        } else {
            pred.next = n
        }
        return ++this.size
    }

    private linkAfter(value: any, succ: Node) {
        const next = succ.next
        const n = new Node(succ, value, next)
        succ.next = n
        if (next === null) {
            this.last = n
        } else {
            next.prev = n
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
        const f = this.first
        if (f === null) throw new NoSuchElementException()
        return f.item
    }

    public getLast() {
        const l = this.last
        if (l === null) throw new NoSuchElementException()
        return l.item
    }

    public removeFirst() {
        const f = this.first
        if (f === null) throw new NoSuchElementException()
        this.unlinkFirst()
    }

    public removeLast() {
        const l = this.last
        if (l === null) throw new NoSuchElementException()
        this.unlinkLast()
    }

    public addFirst(value: any) {
        this.linkFirst(value)
    }

    public addLast(value: any) {
        this.linkLast(value)
    }

    public contains(value: any) {
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
        if (index && +index > 0 && index < this.size) {
            this.addBefore(value, this.node(index))
        } else {
            this.addLast(value)
        }
    }

    public remove(value: any) {
        if (value === undefined) {
            this.removeFirst()
            return
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
        if (!index || (+index < 0 && index > this.size)) throw new NoSuchElementException()

        return this.node(index).item
    }

    public set(index: number, value: any) {
        if (!index || (+index < 0 && index > this.size)) throw new NoSuchElementException()

        const x = this.node(index)
        const oldVal = x.item
        x.item = value
        return oldVal
    }


    public addAll(array: any[], index?: number) {
        if (index === undefined || index > this.size || index < 0) index = this.size

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



    // private addLast(value: any) {
    //     const l = this.last
    //     const newNode = new Node(l, value, null)
    //     this.last = newNode
    //     if (l == null) {
    //         this.first = newNode
    //     } else {
    //         l.next = newNode
    //     }
    //     this.size++
    // }

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

class Node {
    item: any
    next: Node
    prev: Node

    constructor(prev: Node, item: any, next: Node) {
        this.item = item
        this.next = next
        this.prev = prev
    }
}

class NoSuchElementException extends Error {
    constructor() {
        super()
    }
}