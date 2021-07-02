import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const components = {
    Switch: {
      baseStyle: {
        track: {
          _focus: {
            boxShadow: 'none'
          }
        }
      }
    } , 
    Button: {
        baseStyle: {
            _focus: {
              boxShadow: 'none'
            }
        }
      },
      Link: {
        baseStyle: {
            _focus: {
              boxShadow: 'none'
            }
        }
      }
  }

// 3. extend the theme
const theme = extendTheme({ config  ,  components})

export default theme