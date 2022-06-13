'use strict';

/**
 * strapi-plugin-documentation.js controller
 *
 * @description: A set of functions called "actions" of the `strapi-plugin-documentation` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  }
};
