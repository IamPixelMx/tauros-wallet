[![Framework](https://img.shields.io/badge/Framework-Next.js-important?style=plastic)](https://github.com/zeit/next.js/)
[![server](https://img.shields.io/badge/server-express-yellow?style=plastic)](https://expressjs.com/)
[![styled with bulma](https://img.shields.io/badge/styled-Emotion-pink?style=plastic)](https://emotion.sh/)
[![formatter with prettier and eslint](https://img.shields.io/badge/formatter-prettier&eslint-blueviolet?style=plastic)](https://github.com/eslint/eslint)
[![styled guide](https://img.shields.io/badge/style_guide-Airbnb-violet?style=plastic)](https://github.com/airbnb/javascript)
[![deploy](https://img.shields.io/:deploy-Now-blue.svg?style=plastic)](http://badges.isc-license.org)

---

<br />
<p align="center">
  <a href="https://tauros-wallet.vercel.app">
    <img src="public/tauros.png" alt="Logo" width="155">
  </a>

  <h3 align="center">Tauros-Wallet</h3>

  <p align="center">
Tauros Wallet la herramienta que te brinda toda la informacion necesaria para llevar el tracking de todos tus activos digitales, realizar traiding y monitorear el comportamiento del mercado en tiempo real.   <br />
    <a href="https://github.com/eriika19/tauros-wallet/tree/master/components"><strong>Explorar proyecto »</strong></a>
    <br />
    <br />
    <a href="https://tauros-wallet.vercel.app">Ir a Sitio</a>
    ·
    <a href="https://github.com/eriika19/tauros-wallet/issues">Reportar Problema</a>
    ·
  </p>
  <br />
</p>
 
 <h3 align="center"> Next. js, Redux-Saga, Emotion, Axios, Express, Eslint, Lint-staged</h3>
 
 <br />

---

# Contenido

- [Acerca del Proyecto](#acerca-del-proyecto)
  - [Herramientas](#_herramientas_)
  - [Próximos alcances](#próximos-alcances)
- [Setup](#setup)
- [Contacto](#contacto)

 <br />

## Acerca del proyecto 🚀

Esta aplicación se desarrollo como app web que permite visualizar, en un solo sitio, todos tus
activos crypto, comprar y vender criptomonedas(trading) de manera fácil y rápida mientras te brinda
una visualización en tiempo real del valor de Bitcoin en el mercado.

Se consumió varias APIs implementando solicitudes Axios y se construyó gráfico interactivo que
muestra el valor de Bitcoin en tiempo real.

 <br />

### _*Herramientas*_ 🛠️

- [Next.js](https://github.com/zeit/next.js/)
- [Redux-Saga](https://github.com/bmealhouse/next-redux-saga)
- [Axios](https://github.com/axios/axios)
- [Express](https://expressjs.com/)
- [Emotion](https://emotion.sh/)
- [Hooks](https://es.reactjs.org/docs/hooks-intro.html)
- [Git](https://git-scm.com/)
- [Eslint](https://eslint.org/)
- [Lint-staged](https://openbase.io/js/lint-staged)
- [Husky](https://github.com/typicode/husky)
- [Now de Vercel](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Prettier](https://github.com/prettier/prettier)
- [Airbnb Style Guide](https://github.com/airbnb/javascript)

### Próximos alcances

- [ ] Añadir tests en todos los componentes y páginas

---

## Correr proyecto localmente

Este proyecto puede ser corrido locamente clonando e instalando localmente las dependencias
requeridas.

### Clonar repositorio

Clonar repositorio corriendo

```
$ git clone https://github.com/eriika19/tauros-wallet.git
```

### Instalar dependencias

Una vez clonado se debe ir al directorio raíz del proyecto. Una vez en la raiz del proyecto hay que
ejcutar el siguiente comando para instalar todas las dependencias listadas en el package.json:

```
$ yarn
```

### Variables de ambiente

Se deben definir las variables de ambiente para poder realizar las llamadas a la API_URL, ya que el
repositorio no las incluye. Es posible correr `cp .env.example .env` para definir las propias
variables de ambiente en archivo `.env`.

For example, to point the app to an especific API endpoint, add this to your local `.env` file:

```shell
API_URL=https://api.staging.tauros.io/api
```

## Correr proyecto

- Para correr Tauros Wallet en un ambiente de producción ejecutar:

```
$ yarn build
```

```
$ yarn start
```

- Para correr Tauros Wallet en un ambiente de desarrollo ejecutar:

```
$ yarn dev
```

Una vez corriendo estará listo en `http://localhost:3000/`

## Prettier and Eslint

Prettier and Eslint se ejecutarán automáticamente al realizar un _commit_.

Sin embargo, tambipueden ser ejecutados independentemente con los siguientes comandos:

**Prettier**

```
$ yarn prettier:write
```

**Eslint**

```
$ yarn lint:js
```

---

> ## _Contacto_

Creado con ❤️ por [Itzel Enciso](https://github.com/eriika19)

Sitio Web - [itzelenciso.com](https://itzelenciso.com/)

LinkedIn - [@itzelenciso](https://www.linkedin.com/in/itzelenciso/)

Correo Gmail -
[enciso.iq@gmail.com](<mailto:enciso.iq@gmail.com?subject=Reclutamiento&body=¡Buen día! el motivo de contacto es:>)

¡Gracias por visitar! 😊
