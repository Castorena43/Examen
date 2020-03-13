'use strict'
const Consultorio = use('App/Models/Consultorio')
class ConsultorioController {
    async create({ request, response }) {
        const consultorio = new Consultorio()
        const { nombre, descripcion } = request.all()
        consultorio.nombre = nombre
        consultorio.descripcion = descripcion
        await consultorio.save()

        return response.status(201).json({ 'respuesta': 'Consultorio insertado exitosamente' })
    }

    async update({ request, response, params }) {
        const id = params.id
        const { nombre, descripcion } = request.all()
        const consultorio = await Consultorio.findOrFail(id)
        consultorio.nombre = nombre
        consultorio.descripcion = descripcion
        await consultorio.save()

        return response.status(201).json({ 'respuesta': 'Consultorio actualizado exitosamente' })
    }

    async delete({ params, response }) {
        const id = params.id
        const consultorio = await Consultorio.findOrFail(id)

        await consultorio.delete()

        return response.status(201).json({ 'respuesta': 'Consultorio eliminado exitosamente' })
    }

    async all({ response }) {
        const consultorios = await Consultorio.all();
        return response.status(200).json(consultorios);
    }
}

module.exports = ConsultorioController
