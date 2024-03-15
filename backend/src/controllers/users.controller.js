import { pool } from "../database/conexion.js"

export const getUsers = async (req, res) => {
    try {
        const [ result ] = await pool.query("SELECT * FROM users")

        if (result.length > 0) {
            res.status(200).json(result)
        } else {
            req.status(404).json({
                "mensaje": "No se encontraron usuarios"
            })
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}

export const setUser = async (req, res) => {
    try {
        const { nombre, email, password, telefono } = req.body

        const [ result ] = await pool.query("INSERT INTO users(nombre, email, password, telefono) VALUE (?, ?, ?, ?)", [ nombre, email, password, telefono])

        if (result.affectedRows > 0) {
            return res.status(200).json({
                "mensaje": "Usuario creado con exito"
            })
        } else {
            return res.status(404).json({
                "mensaje": "No se pudo crear el usuario"
            })
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}