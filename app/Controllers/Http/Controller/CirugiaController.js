'use strict'
const Cirugia = use('App/Models/Cirugia')
const Database = use('Database')
class CirugiaController {
    async create({ request, response }) {
        const cirugia = new Cirugia()
        const {
            doctor,
            paciente,
            quirofano,
            fecha_programada
        } = request.all()
        cirugia.id_doctor = doctor
        cirugia.id_paciente = paciente
        cirugia.id_quirofano = quirofano
        cirugia.fecha_programada = fecha_programada
        await cirugia.save()

        return response.status(201).json({ 'respuesta': 'Cirugia insertada exitosamente' })
    }

    async update({ request, response, params }) {
        const id = params.id
        const {
            doctor,
            paciente,
            quirofano,
            fecha_programada
        } = request.all()
        const cirugia = await Cirugia.findOrFail(id)
        cirugia.id_doctor = doctor
        cirugia.id_paciente = paciente
        cirugia.id_quirofano = quirofano
        cirugia.fecha_programada = fecha_programada
        await cirugia.save()

        return response.status(201).json({ 'respuesta': 'Cirugia actualizada exitosamente' })
    }

    async delete({ params, response }) {
        const id = params.id
        const cirugia = await Cirugia.findOrFail(id)

        await cirugia.delete()

        return response.status(201).json({ 'respuesta': 'Cirugia eliminada exitosamente' })
    }

    async all(response) {
        return await Database.select('cirugias.id as id',
                                     'doctors.nombre as doctor',
                                     'doctors.id as id_doctor',
                                     'pacientes.nombre as paciente',
                                     'pacientes.id as id_paciente',
                                     'quirofanos.nombre as quirofano',
                                     'quirofanos.id as id_quirofano',
                                     'cirugias.fecha_programada')
            .from('cirugias')
            .innerJoin('doctors', 'doctors.id', 'cirugias.id_doctor')
            .innerJoin('pacientes', 'pacientes.id', 'cirugias.id_paciente')
            .innerJoin('quirofanos', 'quirofanos.id', 'cirugias.id_quirofano')
            //.groupBy('cirugias.id')
    }
}

module.exports = CirugiaController
