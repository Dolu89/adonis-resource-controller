# adonis-resource-controller
Restful resource controller for AdonisJs

## Usage
1. Requirements
  Please install [adonis-resource-middleware](https://github.com/dolu89/adonis-resource-middleware) first, and setup the routes with `resource` middleware. After that, your `/start/routes.js` should looks like this:
  ```javascript
  const Route = use('Route')

  Route.resource('/api/:resource', 'ResourceController').middleware(['resource'])
  ```
1. Install 
    ```bash
    npm i -S @dolu/adonis-resource-controller
    ```
1. Make a controller: `/app/Controllers/Http/ResourceController.js`
    ```javascript
    const BaseController = require('adonis-resource-controller')

    module.exports = class ResourceController extends BaseController {

    }
    ```
#### Now, you can play CRUD with your APIs. All [CRUD Routes](https://www.adonisjs.com/docs/4.1/routing#_route_resources).
