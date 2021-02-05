# React Programa

FAKE APIS: https://apilist.fun/

## TOOLS:
- [NODE JS](https://nodejs.org/en/)
- [VSCode](https://code.visualstudio.com/) 
- [Code Sandbox](https://codesandbox.io/)
- [CRA - Create React App](https://reactjs.org/docs/create-a-new-react-app.html)

## 2021 01 15

- Supažindinimas su React 
- Oficiali dokumentacija [DOCS](https://reactjs.org/docs/getting-started.html)
- JSX - https://reactjs.org/docs/introducing-jsx.html   
https://reactjs.org/docs/rendering-elements.html

- Komponentai ir Propsai https://reactjs.org/docs/components-and-props.html
- State valdymas ir gyvavimo ciklai lifecycles, PureComponent, shouldComponentUpdate, componentDdidMount, componentDidUpdate. componentWillUnmount, constructor https://reactjs.org/docs/state-and-lifecycle.html CLASS BASED
su React hook funkciniu komponentu: https://reactjs.org/docs/hooks-state.html
- Conditional rendering Lists and keys - >
https://reactjs.org/docs/conditional-rendering.html
https://reactjs.org/docs/lists-and-keys.html


#### Bonus: 

- Funkcinis progravimo pavyzdziai: https://github.com/js-functional/js-funcional
- Memo https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19
- Modern Javascript https://javascript.info/

**SVARBIAUSIA SUPRASTI: State, Props, Jsx, map, filter - array funkcijas**

## 2021 01 22
- MORE PRACTICE
- Lifecycle valdymas su useEffect ir kiti hooksai, custom hooks rasymas https://reactjs.org/docs/hooks-intro.html
Custom hooks pvz.: https://usehooks.com/
- componentDidCatch nera papkeiciamas hooksais
- Aplikacijos - DONT OVERTHINK - https://reactjs.org/docs/faq-structure.html 
// papildomi patternas -> Atomic design https://github.com/danilowoz/react-atomic-design pagal: https://bradfrost.com/blog/post/atomic-web-design/

- [COUNTDOWN - setInterval - useEffect example](https://github.com/juozasm/react-mokymai/blob/master/Countdown.js)

**Skaldyti skaldyti ir dar karta skaldyti!**

https://reactjs.org/docs/thinking-in-react.html

## 2021 01 29
- Setup json server - https://github.com/typicode/json-server - for fake data + auth
- Refs - https://reactjs.org/docs/refs-and-the-dom.html
- Try inputs without state
- Connect with axios 
- Routing - default router [https://reactrouter.com/web/guides/quick-start](react-router-dom)
- Try Auth / public routes
- Global state - React Context https://reactjs.org/docs/context.html

## 2021 02 05

- Styling react app: https://en.bem.info/methodology/
Styling solutions: 
Nr 1. [Styled components](https://styled-components.com) Most HOT/HIPSTA approach: [Styled Components + Tailwind with Babel macro and other s**t](https://dev.to/devsmranjan/styling-react-components-styled-components-twin-macro-tailwind-css-2-0-3cnk)
Nr 2. [SASS Modules](https://github.com/css-modules/css-modules)

Other mentions: Tailwind, Pure CSS, Inline Styles

What is theming and how to achieve? - Context api vs CSS vars?

*Lets do a modal*

- Portals - https://reactjs.org/docs/portals.html

--- OUT OF SCOPE
- Global state PART 2 - Redux
- HOC Pattern - https://reactjs.org/docs/higher-order-components.html
- Render function pattern - https://reactjs.org/docs/render-props.html
- Bonus webpack config starter
