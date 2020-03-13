'use strict'
const User = use('App/Models/User')
class UserController {

    async register({ request }) {
        const { username, email, password } = request.all()
        const user = User.create({
            username,
            email,
            password
        })
        return user
    }

    async login({ request, auth }) {
        try {
            const { email, password } = request.all();
            const token = await auth.attempt(email, password);

            if (token) {
                return token
            }
        } catch (error) {
            return response.status(400).json({ msj: 'Error al iniciar sesion', error })
        }
    }

    async logout({ request, response, auth }) {

        let user = auth.user;
        let token = await auth.authenticator('api').revokeTokensForUser(user);

        return response.status(202).json({ "Mensaje:": "Has cerrado sesion." });
    }

    async all({ response }) {
        const users = await User.all();
        return response.status(200).json(users);
    }

    async delete({ params, response }) {
        const id = params.id
        const user = await User.findOrFail(id)

        await user.delete()

        return response.status(201).json({ 'respuesta': 'Usuario eliminado exitosamente' })
    }

    async update({ request, response, params }) {
        const id = params.id
        const { username, email, password } = request.all()
        const user = await User.findOrFail(id)
        user.username = username
        user.email = email
        user.password = password
        await user.save()

        return response.status(201).json({ 'respuesta': 'Usuario actualizado exitosamente' })
    }
}
module.exports = UserController
