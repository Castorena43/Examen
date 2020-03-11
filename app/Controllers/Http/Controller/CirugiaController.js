'use strict'
const Cirugia = use('App/Models/Cirugia')
class CirugiaController {
    async create({ request, response }) {
        const cirugia = new Cirugia()
        const { doctor, paciente, quirofano, fecha_programada } = request.all()
        cirugia.id_doctor = doctor
        cirugia.id_paciente = paciente
        cirugia.id_quirofano = quirofano
        cirugia.fecha_programada = fecha_programada
        await cirugia.save()

        return response.status(201).send('Cirugia insertada exitosamente')
    }

    async update({ request, response }) {
        const { id, doctor, paciente, quirofano, fecha_programada } = request.all()
        const cirugia = await Cirugia.findOrFail(id)
        cirugia.id_doctor = doctor
        cirugia.id_paciente = paciente
        cirugia.id_quirofano = quirofano
        cirugia.fecha_programada = fecha_programada
        await cirugia.save()

        return response.status(201).send('Cirugia actualizada correctamente')
    }

    async delete({ request, response }) {
        const { id } = request.all()
        const cirugia = await Cirugia.findOrFail(id)

        await cirugia.delete()

        return response.status(201).send('Cirugia eliminada exitosamente')
    }
}

module.exports = CirugiaController
