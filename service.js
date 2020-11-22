import { Dao } from './dao.js'
// import * as dao from './dao.js'

export class service {
    constructor() {
        this.dao = new Dao()
    }
    addMember(member){
        this.dao.addMember(member)   
    }
    getMembers(){
        return this.dao.getMembers()
    }
}

// init ()

function init () {
    const ss = new service();
    ss.addMember({
        name: "zxvb",
        age: 32
    })   
}