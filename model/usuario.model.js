const UsuarioDB = require('../db/usuario');

module.exports = class Usuario {
    constructor(nombres, apellidos, telefono) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }

    static listarUsuario = async (id) => {
        try {
            let usuario = await UsuarioDB.findOne({
                where: {
                    id: id
                }
            });
            return usuario;
        } catch (error) {
            throw error
        }
    }

    static listarUsuarios = async () => {
        try {
            let usuarios = await UsuarioDB.findAll();
            return usuarios;
        } catch (error) {
            throw error
        }
    }

    registrarUsuario = async () => {
        try {
            await UsuarioDB.create({
                nombres: this.nombres,
                apellidos: this.apellidos,
                telefono: this.telefono
            });
            return 'Usuario creado'
        } catch (error) {
            throw error;
        }
    }
}