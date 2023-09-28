import path from 'path';

export async function loadTemplate(templateName: string) {
    const templatePath = path.join(import.meta.dir, `../templates/${templateName}.ejs`);
    const template = Bun.file(templatePath)
    if (template) {
        return await template.text();
    }
    return null;
}

export function loadDataExtension(templateName: string) {
    try {
        const dataExtension = require(`../dataExtensions/${templateName}`);
        return dataExtension;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export function loadLogic(templateName: string) {
    try {
        const { logic } = require(`../logics/${templateName}`);
        return logic;
    } catch (e) {
        console.error(e);
        return null;
    }
}