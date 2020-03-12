'use strict'
const Cirugia = use('App/Models/Cirugia')
const Database = use('Database')
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

    async all(request, response) {
        return await Database.select('cirugias.id as id', 'doctors.nombre as doctor', 'pacientes.nombre as paciente', 'quirofanos.nombre as quirofano', 'cirugias.fecha_programada')
            .from('cirugias')
            .innerJoin('doctors', 'doctors.id', 'cirugias.id_doctor')
            .innerJoin('pacientes', 'pacientes.id', 'cirugias.id_paciente')
            .innerJoin('quirofanos', 'quirofanos.id', 'cirugias.id_quirofano')
            //.groupBy('cirugias.id')
    }
}

module.exports = CirugiaController
