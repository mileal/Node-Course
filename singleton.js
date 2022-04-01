let logInstance
class log{
    constructor (data){
        if (!logInstance){
            logInstance = this
            this._data = data 
            
        }else{
            return logInstance
        }
    }
    get data(){
        return this._data
    }
}

console.log(new log("hola")._data);
console.log(new log("hola2")._data);
