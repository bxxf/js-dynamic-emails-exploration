/* All this would ideally get fetched from some database */

export const users = {
    "breberaf@gmail.com": {
      activationKey: "ABC123EN",
      locale: "en",
      version: "v1"
    },
    "jane@example.com": {
      activationKey: "DEF456ES",
      locale: "es",
      version: "v2"
    }
  };
  
  export const content = {
    en: {
      hello: {
        v1: "Hello <%= versionNew %>, here's your activation key:",
        v2: "Hello <%= versionNew %>, here's your activation key:"
      },
      subject: "Important email for you"
    },
    es: {
      hello: {
        v1: "Hola <%= versionNew %>, aquí tienes tu clave de activación:",
        v2: "Hola <%= versionNew %>, aquí tienes tu clave de activación:"
      },
      subject: "Correo importante para ti"
    }
  };
  