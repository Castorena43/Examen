'use strict'
const Paciente = use('App/Models/Paciente')
class PacienteController {
    async create({ request, response }) {
        const paciente = new Paciente()
        const {
            nombre,
            apellido_paterno,
            apellido_materno,
            nss,
            direccion,
            telefono
        } = request.all()
        paciente.nombre = nombre
        paciente.apellido_paterno = apellido_paterno
        paciente.apellido_materno = apellido_materno
        paciente.nss = nss
        paciente.direccion = direccion
        paciente.telefono = telefono
        await paciente.save()

<<<<<<< HEAD
        return response.status(201).json({ 'respuesta': 'Paciente insertado exitosamente' })
    }

    async update({ request, response, params }) {
        const id = params.id
        const {
=======
        return response.status(201).json({'respuesta':'Paciente insertado exitosamente'})
    }

    async update({ request, response, params }) {
      const id = params.id
      const {
>>>>>>> e42c20d4244d50761313d098d816c094b38e20e4
            nombre,
            apellido_paterno,
            apellido_materno,
            nss,
            direccion,
            telefono
        } = request.all()
        const paciente = await Paciente.findOrFail(id)
        paciente.nombre = nombre
        paciente.apellido_paterno = apellido_paterno
        paciente.apellido_materno = apellido_materno
        paciente.nss = nss
        paciente.direccion = direccion
        paciente.telefono = telefono
        await paciente.save()

<<<<<<< HEAD
        return response.status(201).json({ 'respuesta': 'Paciente actualizado exitosamente' })
=======
        return response.status(201).json({'respuesta':'Paciente actualizado exitosamente'})
>>>>>>> e42c20d4244d50761313d098d816c094b38e20e4
    }

    async delete({ params, response }) {
        const id = params.id
        const paciente = await Paciente.findOrFail(id)

        await paciente.delete()

<<<<<<< HEAD
        return response.status(201).json({ 'respuesta': 'Paciente eliminado exitosamente' })
=======
        return response.status(201).json({'respuesta':'Paciente eliminado exitosamente'})
>>>>>>> e42c20d4244d50761313d098d816c094b38e20e4
    }

    async all({ response }) {
        const pacientes = await Paciente.all();
        return response.status(200).json(pacientes)
    }
}

module.exports = PacienteController
