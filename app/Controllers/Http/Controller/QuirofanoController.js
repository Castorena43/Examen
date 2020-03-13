'use strict'
const Quirofano = use('App/Models/Quirofano')
class QuirofanoController {
    async create({ request, response }) {
        const quirofano = new Quirofano()
        const { nombre, descripcion } = request.all()
        quirofano.nombre = nombre
        quirofano.descripcion = descripcion
        await quirofano.save()

        return response.status(201).json({ 'respuesta': 'Quirofano insertado exitosamente' })
    }

    async update({ request, response, params }) {
        const id = params.id
        const { nombre, descripcion } = request.all()
        const quirofano = await Quirofano.findOrFail(id)
        quirofano.nombre = nombre
        quirofano.descripcion = descripcion
        await quirofano.save()

        return response.status(201).json({ 'respuesta': 'Quirofano actualizado exitosamente' })
    }

    async delete({ params, response }) {
        const id = params.id
        const quirofano = await Quirofano.findOrFail(id)

        await quirofano.delete()

        return response.status(201).json({ 'respuesta': 'Quirofano eliminado exitosamente' })
    }

    async all({ response }) {
        const quirofanos = await Quirofano.all();
        return response.status(200).json(quirofanos);
    }
}

module.exports = QuirofanoController
