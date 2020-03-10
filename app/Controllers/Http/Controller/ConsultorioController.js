'use strict'
const Consultorio = use('App/Models/Consultorio')
class ConsultorioController {
    async create({ request, response }) {
        const consultorio = new Consultorio()
        const { nombre, descripcion } = request.all()
        consultorio.nombre = nombre
        consultorio.descripcion = descripcion
        await consultorio.save()

        return response.status(201).send('Consultorio insertado exitosamente')
    }

    async update({ request, response }) {
        const { id, nombre, descripcion } = request.all()
        const consultorio = await Consultorio.findOrFail(id)
        consultorio.nombre = nombre
        consultorio.descripcion = descripcion
        await consultorio.save()

        return response.status(201).send('Consultorio actualizado correctamente')
    }

    async delete({ request, response }) {
        const { id } = request.all()
        const consultorio = await Consultorio.findOrFail(id)

        await consultorio.delete()

        return response.status(201).send('Consultorio eliminado exitosamente')
    }

    async all({ response, request }) {
        const consultorios = await Consultorio.all();
        return response.status(200).json(consultorios);
    }
}

module.exports = ConsultorioController
