'use strict'
const Especialidad = use('App/Models/Especialidad')
class EspecialidadController {

    async create({ request, response }) {
        const especialidad = new Especialidad()
        const { nombre, descripcion } = request.all()
        especialidad.nombre = nombre
        especialidad.descripcion = descripcion
        await especialidad.save()

        return response.status(201).json({ 'respuesta': 'Especialidad insertada exitosamente' })
    }

    async update({ request, response, params }) {
        const id = params.id
        const { nombre, descripcion } = request.all()
        const especialidad = await Especialidad.findOrFail(id)
        especialidad.nombre = nombre
        especialidad.descripcion = descripcion
        await especialidad.save()

        return response.status(201).json({ 'respuesta': 'Especialidad actualizada exitosamente' })
    }

    async delete({ response, params }) {
        const id = params.id
        const especialidad = await Especialidad.findOrFail(id)

        await especialidad.delete()

        return response.status(201).json({ 'respuesta': 'Especialidad eliminada exitosamente' })
    }

    async all({ response }) {
        const especialidades = await Especialidad.all()
        return response.status(200).send(especialidades)
    }
}

module.exports = EspecialidadController
