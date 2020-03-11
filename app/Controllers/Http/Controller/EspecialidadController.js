'use strict'
const Especialidad = use('App/Models/Especialidad')
class EspecialidadController {

<<<<<<< HEAD
  async create({request, response}){
    const esp = new Especialidad()
    const {nombre,descripcion} = request.all()
    esp.nombre = nombre
    esp.descripcion = descripcion
    await esp.save()

    return response.status(201).send('Exitoso')
  }

  async update({request,response}){
    const { id, nombre, descripcion } = request.all()
    const esp = await Especialidad.findOrFail(id)
    esp.nombre = nombre
    esp.descripcion = descripcion
    await esp.save()

    return response.status(201).send('Actualizacion exitosa')
  }

  async delete({request, response}){
    const { id } = request.all()
    const esp = await Especialidad.findOrFail(id)

    await esp.delete()

    return response.status(201).send('Eliminacion exitosa')

  }

  async data({response}){
    const esp = await Especialidad.all()
    return response.status(200).send(esp)
  }
=======
    async create({ request, response }) {
        const esp = new Especialidad()
        const { nombre, descripcion } = request.all()
        esp.nombre = nombre
        esp.descripcion = descripcion
        await esp.save()

        return response.status(201).send('Especialidad insertada exitosamente')
    }

    async update({ request, response }) {
        const { id, nombre, descripcion } = request.all()
        const esp = await Especialidad.findOrFail(id)
        esp.nombre = nombre
        esp.descripcion = descripcion
        await esp.save()

        return response.status(201).send('Especialidad actualizada correctamente')
    }

    async delete({ request, response }) {
        const { id } = request.all()
        const esp = await Especialidad.findOrFail(id)

        await esp.delete()

        return response.status(201).send('Especialidad eliminada exitosamente')
    }

    async all({ response, request }) {
        const especialidades = await Especialidad.all();
        return response.status(200).json(especialidades);
    }
>>>>>>> 31985429764e285c0e7b7fdaa882434bfe7e6890
}

module.exports = EspecialidadController
