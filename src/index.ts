import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';

import ejs from 'ejs';

import { preProcessVariables } from './utils/parsers';
import { loadDataExtension, loadLogic, loadTemplate } from './utils/loaders';

const app = new Elysia()
  .use(html())
  .get('/preview-email', async ({ query }) => {
    const { targetEmail, templateName } = query;

    if (!targetEmail || !templateName) {
      return 'Missing target email or template name';
    }

    /* This represents target attributes that would be fetched from a database or via request */
    const userData = loadDataExtension(templateName)?.users[targetEmail];

    /* This represents localized content that would be fetched from a database or via request */
    const contentData = loadDataExtension(templateName)?.content[userData.locale];

    if (!userData || !contentData) {
      return 'Data extension not found for the given template';
    }

    /* This represents logic that would be fetched from a database or via request - it is used to modify variables */
    const logic = loadLogic(templateName);

    if (!logic) {
      return 'Logic not found for the given template';
    }

    const variables = preProcessVariables(userData, contentData, logic);

    const template = await loadTemplate(templateName);

    if (!template) {
      return 'Template not found';
    }

    const emailContent = ejs.render(template, variables);

    return emailContent;
  })
  .listen(8080);

console.log(`Server is running at ${app.server?.hostname}:${app.server?.port}`);
