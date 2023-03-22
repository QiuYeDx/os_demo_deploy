export class ProcessManager{
    constructor(max_memory = 100) {
        this._newQueue = createQueue();
        this._readyQueue = createQueue();
        this._runningQueue = createQueue();
        this._blockQueue = createQueue();
        this._memory = 0;   // Memory Occupied
        this.MAX_MEMORY = max_memory;
        this._nextIndex = 0;
    }
    getMemory(){
        return this._memory;
    }

    getNewProcess(p){
        return this._newQueue.getQueue();
    }

    getReadyProcess(p){
        return this._readyQueue.getQueue();
    }

    getRunningProcess(p){
        return this._runningQueue.getQueue();
    }

    getBlockProcess(p){
        return this._blockQueue.getQueue();
    }

    checkToRunning(){
        if(this._readyQueue.getQueue().length === 0){
            while(
                !(this._newQueue.getQueue().length === 0)
                &&
                this._memory + this._newQueue.getQueue()[0].size <= this.MAX_MEMORY
                ){
                if(
                    !(this._newQueue.getQueue().length === 0)
                    &&
                    this._memory + this._newQueue.getQueue()[0].size <= this.MAX_MEMORY
                ){
                    let tmpProcess = this._newQueue.getQueue()[0];
                    this._newQueue.deQueue();
                    this._readyQueue.enQueue(tmpProcess); // new => ready
                    this._memory += tmpProcess.size;
                    if(this._runningQueue.getQueue().length === 0){
                        let tmpProcess = this._readyQueue.getQueue()[0];
                        this._readyQueue.deQueue();
                        this._runningQueue.enQueue(tmpProcess); // ready => running
                    }
                }else{
                    if(this._newQueue.getQueue().length === 0){
                        return false;   // no new process to running
                    }else{
                        return false;   // new process's size is too big to running
                    }
                }
            }
        }else{
            while(!(this._newQueue.getQueue().length === 0)
                &&
                this._memory + this._newQueue.getQueue()[0].size <= this.MAX_MEMORY
            ){
                let tmpProcess = this._newQueue.getQueue()[0];
                this._newQueue.deQueue();
                this._readyQueue.enQueue(tmpProcess); // new => ready
                this._memory += tmpProcess.size;
            }
            let tmpProcess = this._readyQueue.getQueue()[0];
            this._readyQueue.deQueue();
            this._runningQueue.enQueue(tmpProcess); // ready => running
        }
        return true;
    }

    createProcess(size){
        let newProcess = new Process(this._nextIndex++, size);
        if(this._newQueue.getQueue().length === 0 && this._memory + size <= this.MAX_MEMORY){
            if(this._readyQueue.getQueue().length === 0){
                if(this._runningQueue.getQueue().length === 0){
                    this._runningQueue.enQueue(newProcess); // => runnning list
                    this._memory += size;
                }else{
                    this._readyQueue.enQueue(newProcess); // => ready list
                    this._memory += size;
                }
            }else{
                this._readyQueue.enQueue(newProcess); // => ready list
                this._memory += size;
            }
        }else{
            this._newQueue.enQueue(newProcess); // => new list
        }
    }

    timeoutProcess(){
        if(this._runningQueue.getQueue().length === 0){
            return false;
        }else{
            if(this._readyQueue.getQueue().length === 0)
                return false; // running => running (no need to update)
            let tmpProcess = this._runningQueue.getQueue()[0];
            this._runningQueue.deQueue();
            this._readyQueue.enQueue(tmpProcess); // running => ready
            return this.checkToRunning(); // something to running?
        }
    }

    eventWaitProcess(){
        if(this._runningQueue.getQueue().length === 0){
            return false;
        }else{
            let tmpProcess = this._runningQueue.getQueue()[0];
            this._runningQueue.deQueue();
            this._blockQueue.enQueue(tmpProcess); // running => block
            this.checkToRunning(); // something to running?
            return true;
        }
    }

    eventOccurProcess(){
        if(this._blockQueue.getQueue().length === 0){
            return false;
        }else{
            let tmpProcess = this._blockQueue.getQueue()[0];
            this._blockQueue.deQueue();
            this._readyQueue.enQueue(tmpProcess); // block => ready
            if(this._runningQueue.getQueue().length === 0)
                this.checkToRunning(); // something to running?
            return true;
        }
    }

    releaseProcess(){
        if(this._runningQueue.getQueue().length === 0){
            return false;
        }else{
            this._memory -= this._runningQueue.getQueue()[0].size;
            this._runningQueue.deQueue(); // running => ---
            this.checkToRunning(); // something to running?
            // something to memory?
            // {
            //     if(!(this._newQueue.getQueue().length === 0)){
            //         let tmpProcess = this._newQueue.getQueue()[0];
            //         if(this._readyQueue.getQueue().length === 0){
            //             if()
            //         }else{
            //
            //         }
            //     }
            // }
            return true;
        }
    }

    re0(){
        this._newQueue = createQueue();
        this._readyQueue = createQueue();
        this._runningQueue = createQueue();
        this._blockQueue = createQueue();
        this._memory = 0;
    }
}

export class Process{
    constructor(index, size){
        this.index = index;
        this.size = size;
    }
    getIndex(){
        return this.index;
    }
    getSize(){
        return this.size;
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