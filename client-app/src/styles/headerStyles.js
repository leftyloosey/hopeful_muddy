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
  boxShadow: '1px 2px 2px black',
  borderRadius: '15px',
  width: '6rem',
}
const navBarRight = {
  display: 'flex',
  alignItems: 'center',
  boxShadow: '1px 2px 2px black',
  borderRadius: '15px',
  padding: '5px',
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
  boxShadow: '1px 2px 2px black',
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
  // boxShadow: '1px 2px 2px #435c81',
  boxShadow: '1px 2px 2px black',
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

const songModal = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  width: '10%',
}

const songModal2 = {
  display: 'flex',
  padding: '5px',
  // margin: '1px',
  flexDirection: 'column',
  alignItems: 'flex-end',
}

const setModal = {
  display: 'flex',
}

const loginStyles = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '10px',
}

const songPage = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '2rem',
}
const songPage1 = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '2rem',
}
const songPage2 = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '67%',
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
  songModal,
  songModal2,
  setModal,
  loginStyles,
  songPage,
  songPage1,
  songPage2,
}
