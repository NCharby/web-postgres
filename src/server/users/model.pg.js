// @flow
import pool from '../pg/index'


export default class UserPgModel {

    getUsers = async () => {
        const { rows } = await pool.query('SELECT * FROM users ORDER BY id ASC')
        return rows;
    }

    getUsersById = async (id: number) => {
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id])
        return rows
    }

    createUser() {

    }

    updateUser() {

    }

    deleteUser() {

    }
 
}