'use strict'
const Cita = use('App/Models/Cita')
class CitaController {
    async create({ request, response }) {
        const cita = new Cita()
        const { doctor, paciente, consultorio, fecha_programada } = request.all()
        cita.id_doctor = doctor
        cita.id_paciente = paciente
        cita.id_consultorio = consultorio
        cita.fecha_programada = fecha_programada
        await cita.save()

        return response.status(201).send('Cita insertada exitosamente')
    }

    async update({ request, response }) {
        const { id, doctor, paciente, consultorio, fecha_programada } = request.all()
        const cita = await Cita.findOrFail(id)
        cita.id_doctor = doctor
        cita.id_paciente = paciente
        cita.id_consultorio = consultorio
        cita.fecha_programada = fecha_programada
        await cita.save()

        return response.status(201).send('Cita actualizada correctamente')
    }

    async delete({ request, response }) {
        const { id } = request.all()
        const cita = await Cita.findOrFail(id)

        await cita.delete()

        return response.status(201).send('Cita eliminada exitosamente')
    }
}

module.exports = CitaController
