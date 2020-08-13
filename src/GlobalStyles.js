import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    
 * {
        box-sizing: border-box;
    }

 body {
  font-family: sans-serif;
  font-size: 1.5em;
  max-width: 500px;
  display: grid;
  justify-items: center;
  gap: 20px;
  grid-template-rows: auto auto;
  padding: 20px;
}
`