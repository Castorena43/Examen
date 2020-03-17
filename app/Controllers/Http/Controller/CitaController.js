'use strict'
const Cita = use('App/Models/Cita')
const Database = use('Database')
var Client = require('node-rest-client').Client
const jsPDF = require('jspdf').jsPDF

class CitaController {
    async create({ request, response }) {
        const cita = new Cita()
        const { doctor, paciente, consultorio, fecha_programada } = request.all()
        cita.id_doctor = doctor
        cita.id_paciente = paciente
        cita.id_consultorio = consultorio
        cita.fecha_programada = fecha_programada
        await cita.save()

        return response.status(201).json({ 'respuesta': 'Cita insertada exitosamente' })
    }

    async update({ request, response, params }) {
        const id = params.id
        const { doctor, paciente, consultorio, fecha_programada } = request.all()
        const cita = await Cita.findOrFail(id)
        cita.id_doctor = doctor
        cita.id_paciente = paciente
        cita.id_consultorio = consultorio
        cita.fecha_programada = fecha_programada
        await cita.save()

        return response.status(201).json({ 'respuesta': 'Cita actualizada exitosamente' })
    }

    async delete({ params, response }) {
        const id = params.id
        const cita = await Cita.findOrFail(id)

        await cita.delete()

        return response.status(201).json({ 'respuesta': 'Cita eliminada exitosamente' })
    }

    async all(response) {
        return await Database.select('citas.id as id',
                                     'doctors.nombre as doctor',
                                     'doctors.id as id_doctor',
                                     'pacientes.nombre as paciente',
                                     'pacientes.id as id_paciente',
                                     'consultorios.nombre as consultorio',
                                     'consultorios.id as id_consultorio',
                                     'citas.fecha_programada')
            .from('citas')
            .innerJoin('doctors', 'doctors.id', 'citas.id_doctor')
            .innerJoin('pacientes', 'pacientes.id', 'citas.id_paciente')
            .innerJoin('consultorios', 'consultorios.id', 'citas.id_consultorio')
            //.groupBy('citas.id')
    }
}

module.exports = CitaController
