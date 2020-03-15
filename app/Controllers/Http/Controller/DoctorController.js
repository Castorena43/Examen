'use strict'
const Doctor = use('App/Models/Doctor')
const Database = use('Database')
class DoctorController {
    async create({ request, response }) {
        const doctor = new Doctor()
        const {
            nombre,
            apellido_paterno,
            apellido_materno,
            id_especialidad,
            direccion,
            telefono
        } = request.all()
        doctor.id_especialidad = id_especialidad
        doctor.nombre = nombre
        doctor.apellido_paterno = apellido_paterno
        doctor.apellido_materno = apellido_materno
        doctor.direccion = direccion
        doctor.telefono = telefono
        await doctor.save()

        return response.status(201).json({ 'respuesta': 'Doctor insertado exitosamente' })
    }

    async update({ request, response, params }) {
        const id = params.id
        const {
            nombre,
            apellido_paterno,
            apellido_materno,
            id_especialidad,
            direccion,
            telefono
        } = request.all()
        const doctor = await Doctor.findOrFail(id)
        doctor.nombre = nombre
        doctor.apellido_paterno = apellido_paterno
        doctor.apellido_materno = apellido_materno
        doctor.id_especialidad = id_especialidad
        doctor.direccion = direccion
        doctor.telefono = telefono
        await doctor.save()

        return response.status(201).json({ 'respuesta': 'Doctor actualizado exitosamente' })
    }

    async delete({ params, response }) {
        const id = params.id
        const doctor = await Doctor.findOrFail(id)

        await doctor.delete()

        return response.status(201).json({ 'respuesta': 'Doctor eliminado exitosamente' })
    }

    async all({ response }) {
        const doctores = await Database.select('doctors.id',
                                              'doctors.nombre',
                                              'doctors.apellido_materno',
                                              'doctors.apellido_paterno',
                                              'doctors.telefono',
                                              'doctors.direccion',
                                              'doctors.id_especialidad',
                                              'especialidads.nombre as especialidad')
          .from('doctors')
          .innerJoin('especialidads','especialidads.id','doctors.id_especialidad')

        return response.status(200).json(doctores);
    }
}

module.exports = DoctorController
