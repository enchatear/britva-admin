/**
 * `home-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
      content: {
        on: {
          'blocks.header': {
            populate: {
              logo: {
                fields: ['id', 'name', 'alternativeText', 'url']
              },
              navLink: {
                populate: '*',
              }
            }
          },
          'blocks.hero': {
            populate: {
              backgroundImg: {
                fields: ['id', 'name', 'alternativeText', 'url']
              }
            }
          },
          'blocks.barbers': {
            populate: {
              barbers: {
                populate: {
                  image: {
                    fields: ['id', 'name', 'alternativeText', 'url']
                  }
                }
              }
            }
          },
          'blocks.services': {
            populate: {
              service: {
                populate: {
                  icon: {
                    fields: ['id', 'name', 'alternativeText', 'url']
                  }
                }
              },
              backgroundImg: {
                fields: ['id', 'name', 'alternativeText', 'url']
              }
            }
          },
          'blocks.salons': {
            populate: {
              backgroundImg: {
                fields: ['id', 'name', 'alternativeText', 'url']
              }
            }
          },
          'blocks.franchise': {
            populate: {
              button: {
                populate: '*'
              },
              backgroundImg: {
                fields: ['id', 'name', 'alternativeText', 'url']
              }
            }
          }
        }
      }
    };

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In home-page-populate middleware.');

    ctx.query = {
      populate,
      ...ctx.query
    }

    await next();
  };
};
