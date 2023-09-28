import ejs from 'ejs';

function customParser(userData: Record<string, unknown>, logic: string) {
    let ud = { ...userData };
    const functionLogic = new Function('userData', `
    with(userData) {
      ${logic};
    }
    return userData;
  `);

    return functionLogic(ud);
}

export function preProcessVariables(userData: Record<string, unknown>, content: Record<string, any>, logic: string) {
    let ud = customParser(userData, logic);

    console.log(ud)
    for (const key in content) {
        if (typeof content[key] === 'object') {
          for (const subKey in content[key]) {
            content[key][subKey] = ejs.render(content[key][subKey], ud);
          }
        }
      }

    return {
        ...ud,
        content
    };
}
