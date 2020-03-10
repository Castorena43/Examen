'use strict'
const Doctor = use('App/Models/Doctor')
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

        return response.status(201).send('Doctor insertado exitosamente')
    }

    async update({ request, response }) {
        const {
            id,
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

        return response.status(201).send('Doctor actualizado exitosamente')
    }

    async delete({ request, response }) {
        const { id } = request.all()
        const doctor = await Doctor.findOrFail(id)

        await doctor.delete()

        return response.status(201).send('Doctor eliminado exitosamente')
    }

    async all({ response, request }) {
        const doctores = await Doctor.all();
        return response.status(200).json(doctores);
    }
}

module.exports = DoctorController
