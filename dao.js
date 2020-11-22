import {
    createPool, sql
}from 'slonik'

const pool = createPool('postgres://scott:1234@localhost:5432/testdb')

export class Dao {
    constructor() {
    }
    addMember(member){
        pool.connect(async (connection) => {
            await connection.query(sql`INSERT INTO member VALUES(${member.name}, ${member.age})`)
        })
    }
    async getMembers(){
        return await pool.connect(async (connection) => {
            return await connection.any(sql`SELECT * FROM member`)
        })
    }
}


test ()
function test() {
    const dao = new Dao()
    dao.getMembers().then(data => {
        console.log(data)
    })
}
