const navbar = {
  display: 'flex',
  backgroundColor: 'white',
  padding: '1rem',
  flexDirection: 'row',
  justifyContent: 'space-between',
  // alignItems: 'space-between',
}

const navBarLeft = {
  display: 'flex',
  // backgroundColor: 'aquamarine',
  flexDirection: 'row',
  // justifyContent: 'flex-end',
  paddingLeft: '8px',
  alignItems: 'center',
  boxShadow: '1px 2px 2px #435c81',
  borderRadius: '15px',
  width: '6rem',
}
const navBarRight = {
  display: 'flex',
  alignItems: 'center',
  boxShadow: '1px 2px 2px #435c81',
  borderRadius: '15px',
  // width: '4em',
  // height: '4em',
  // display: 'flex',
  // backgroundColor: 'aquamarine',
  // flexDirection: 'row',
  // justifyContent: 'flex-end',
  // alignItems: 'space-between',
}
const outerDiv = {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'white',
  // justifyContent: 'space-between',
  // alignItems: 'space-between',
  width: '100%',
}
const leftBody = {
  // display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  // justifyContent: 'space-between',
  // alignItems: 'space-between',
  borderRadius: '15px',

  // borderRightStyle: 'solid',
  borderWidth: '2px',
  width: '33%',
}
const rightBody = {
  // display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'white',
  borderWidth: '2px',
  borderStyle: 'solid',
  boxShadow: '1px 2px 2px #435c81',
  marginBottom: '-10px',
  marginTop: '20px',
  marginRight: '10px',
  // justifyContent: 'space-between',
  // alignItems: 'space-between',
  width: '53%',
  borderRadius: '10px',
}

const button = {
  width: '50%',
  marginTop: '20%',
  marginLeft: '20%',
  paddingTop: '5%',
  backgroundColor: 'white',
  boxShadow: '1px 2px 2px #435c81',
  borderRadius: '15px',
}

const titleStyle = {
  borderLeftStyle: 'solid',
  borderWidth: '1px',
  padding: '3px',
  // textShadow: '1px 1px 1px #435c81',
}

const songDiv = {
  // marginLeft: '10%',
  // paddingLeft: '5%',
}

const songTitle = {
  display: 'flex',
  flexDirection: 'row',
  // justifyContent: 'flex-end',
  // backgroundColor: 'lightgrey',
  marginTop: '10px',
}
// const songInfo = {
// display: 'flex',
// flexDirection: 'row',
// justifyContent: 'flex-end',
// backgroundColor: 'lightgrey',
// }

const outerSong = {
  display: 'flex',
  flexDirection: 'row',
  borderStyle: 'solid',
  borderWidth: '1px',
  // backgroundColor: 'lightgrey',
  borderRadius: '5px 5px 5px ',
  marginTop: '-1px',
}

const linkStyles = {
  textDecoration: 'none',
  color: 'black',
  paddingLeft: '10px',
}
const linkStylesEnter = {
  textDecoration: 'none',
  color: 'red',
  fontWeight: 'bold',
}

export {
  navbar,
  navBarLeft,
  navBarRight,
  outerDiv,
  leftBody,
  rightBody,
  button,
  titleStyle,
  songDiv,
  songTitle,
  outerSong,
  linkStyles,
  linkStylesEnter,
}
