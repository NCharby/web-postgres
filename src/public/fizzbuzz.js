// @flow

// 3 Fizz
// 5 Buzz
// 15 FizzBuzz

type $Options = {
    start: number,
    stop: number,
    items?: number
}

type $OutputFormat = Array<number | string>

type $ColDat = {
    isFizz: boolean,
    isBuzz: boolean,
    num: number
}

class FizzData {
    collection: Array<$ColDat>
    constructor(){
        this.clear()
    }
    
    add = (item: $ColDat): Array<$ColDat> => {
        this.collection.push(item)
        return this.collection
    }

    clear = () => {
        this.collection = []
        return this.collection
    }
}


export class FizzBuzz {
    _opts: $Options
    model: FizzData
    constructor(options: $Options){
        //todo: add safety
        const items = options.stop - options.start
        this._opts = { ...options, items}

        this.model = new FizzData()
    }

    loop = () => {
        const {items = 0, start, stop} = this._opts
        this.model.clear()
        for (let i = 0; i <= items; i++) {
            const num = start + i
            this.model.add({
                num,
                isFizz: this.isFizz(num),
                isBuzz: this.isBuzz(num)
            })
        }
        this._render()
    }

    //todo: Allow user defined triggers and text
    isFizz(item: number) {
        return item % 3 === 0
    }

    isBuzz(item: number) {
        return item % 5 === 0
    }

    _render = (): void => {
        this.model.collection.forEach(item => {
            const dat = this._format(item)
            this.renderer(dat)
        }, this)
    }

    _format(item: $ColDat): string {
        let output = `${item.num}: `
        if(item.isFizz) {
            output += 'Fizz'
        }
        if(item.isBuzz) {
            output += 'Buzz'
        }
        return output
    }

    renderer(data: string): void {
        console.log(data)
    }
}


// const inst = new FizzBuzz({
//     start: 0,
//     stop: 50
// })

// inst.loop()