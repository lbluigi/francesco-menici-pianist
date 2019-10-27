export default {
  breakpoints: ['27em'],
  fonts: {
    body: '\'Chivo\', sans-serif',
    heading: '\'Raleway\', sans-serif',
  },
  fontWeights: {
    body: 300,
    heading: 200,
    semibold: 400,
    bold: 700,
  },
  colors: {
    black: '#000',
    white: '#fff',
    primary: '#4DB6AC',
    secondary: '#1a1a1a',
  },
  langList: {
    justifyContent: 'center',
    '@media screen and (min-width: 40em)': {
      justifyContent: 'flex-end',
    },
    'a': {
      textDecoration: 'none',
      color: 'black'
    }
  },
  navbar: {
    '&.navbar-enter': {
      opacity: 0,
      height: 0,
      transition: 'all 0.35s ease-out'
    },
    '&.navbar-enter-active': {
      opacity: 1,
      height: 196,
    },
    '&.navbar-leave': {
      opacity: 1,
      height: 196,
      transition: 'all 0.35s ease-out'
    },
    '&.navbar-leave-active': {
      opacity: 0,
      height: 0,
    }
  },
  navLink: {
    color: 'black',
    backgroundColor: 'white',
    '&:hover': {
      color: 'white',
      backgroundColor: 'primary',
    }
  },
}
