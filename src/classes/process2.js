export class ProcessManager{
    constructor(max_number = 100) {
        this._bufferQueue = createQueue();
        this._fullQueue = createQueue();
        this._emptyQueue = createQueue();
        this._number = 0;   // available buffer number
        this.MAX_NUMBER = max_number;
        this._nextIndex = 1;

        this._bufferEmpty = max_number;
        this._bufferFull = 0;
    }
    getNum(){
        return this._number;
    }

    getBufferQueue(p){
        return this._bufferQueue.getQueue();
    }

    getFullQueue(p){
        return this._fullQueue.getQueue();
    }

    getEmptyQueue(p){
        return this._emptyQueue.getQueue();
    }

    // V_full(){
    //     if(++(this._bufferFull) <= 0){
    //         this._emptyQueue.deQueue();
    //         this._bufferQueue.deQueue();
    //         this._number--;
    //         this._bufferEmpty--;
    //         this.V_empty();
    //     }
    // }
    //
    // V_empty(){
    //     if(++(this._bufferEmpty) <= 0){
    //         let tmp = this._fullQueue.getQueue()[0];
    //         this._fullQueue.deQueue();
    //         this._bufferQueue.enQueue(tmp);
    //         this._number++;
    //         this._bufferFull--;
    //         this.V_full();
    //     }
    // }

    V_full(){
        if(++(this._bufferFull) <= 0){
            this._emptyQueue.deQueue();
            this._bufferQueue.deQueue();
            this._number--;
            // this._bufferEmpty--;
            this.V_empty();
        }
    }

    V_empty(){
        if(++(this._bufferEmpty) <= 0){
            let tmp = this._fullQueue.getQueue()[0];
            this._fullQueue.deQueue();
            this._bufferQueue.enQueue(tmp);
            this._number++;
            // this._bufferFull--;
            this.V_full();
        }
    }

    produce(){
        let newProcess = new Process(this._nextIndex++);
        if(--(this._bufferEmpty) < 0){
            this._fullQueue.enQueue(newProcess);
        }else{
            this._bufferQueue.enQueue(newProcess);
            this._number++;
            // this._bufferFull++;
            this.V_full();
        }
    }

    consume(){
        let newProcess = new Process(this._nextIndex++);
        if(--(this._bufferFull) < 0){
            this._emptyQueue.enQueue(newProcess);
        }else{
            this._bufferQueue.deQueue();
            this._number--;
            // this._bufferEmpty++;
            this.V_empty();
        }
    }

    re0(){
        this._number = 0;
        this._bufferQueue = createQueue();
        this._fullQueue = createQueue();
        this._emptyQueue = createQueue();
    }
}

export class Process{
    constructor(index){
        this.index = index;
    }
    getIndex(){
        return this.index;
    }
}

function createQueue() {
    // 队列
    let queue = []
    // 入队
    const enQueue = (data) => {
        if(data == null) return
        queue.push(data)
    }
    // 出队
    const deQueue = () => {
        if(queue.length === 0) return
        const data = queue.shift()
        return data
    }
    // 获取列表
    const getQueue = () => {
        // 返回一个克隆的数组，避免外界直接操作
        return Array.from(queue)
    }
    return {
        enQueue,
        deQueue,
        getQueue
    }
}