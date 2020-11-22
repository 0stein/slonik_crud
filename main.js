// const makeService = require('./service')
import { service } from './service.js'
init();

function init() {
    const member = {
        name: "kisa",
        age: 22
    }
    const ss = new service()
    // ss.addMember(member)
    console.log(ss.getMembers())
}