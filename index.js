'use strict'

/**
 * Resourceful controller for interacting with resources
 */
class ResourceController {
  /**
   * Show a list of all resources.
   * GET resources
   */
  async index({ request, response, params, Model, auth }) {
    const query = JSON.parse(request.input('query', '{}'))
    const data = Model.query(query).paginate(query.page || 1, query.perPage || 10)
    return data
  }

  /**
   * Create/save a new resource.
   * POST resources
   */
  async store({ request, response, Model }) {
    const model = await Model.create(request.all())
    return response.status(200).json(model)
  }

  /**
   * Display a single resource.
   * GET resources/:id
   */
  async show({ params, request, response, Model, model }) {
    return response.status(200).json(model)
  }

  /**
   * Update resource details.
   * PUT or PATCH resources/:id
   */
  async update({ params, request, response, Model, model }) {
    model.merge(request.all())
    await model.save()
    return response.status(200).json(model)
  }

  /**
   * Delete a resource with id.
   * DELETE resources/:id
   */
  async destroy({ params, request, response, Model, model }) {
    await model.delete()
    return {}
  }

}

module.exports = ResourceController
