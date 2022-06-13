import logo from './logo.svg';
import './App.css';

import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import ButtonGroup from "@material-ui/core/ButtonGroup"

import Checkbox from "@material-ui/core/Checkbox"
import React from "react"

import { FormControlLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';

import "fontsource-roboto";
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

import { borderRadius } from '@mui/system';
import { withThemeCreator } from '@material-ui/styles';
import { green, orange, red, blue } from '@material-ui/core/colors';

// Theming
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #F00, #00F)",
    border: 0,
    borderRadius: 30,
    color: "white",
    padding: "15px 15px",
    marginBottom: 15
  }
})

const theme = createTheme({
  palette:{
    primary:{
      main: red[500]
    },
    secondary:{
      main: blue[500]
    }
    // default:{
    //   main: brown[500]
    // }
  },
  typography:{
    body2:{
      fontSize: 30
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function ChEx() {
  const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel
      control={<Checkbox 
        checked={checked} 
        icon = {<DeleteIcon color="secondary"/>}
        checkedIcon = {<SaveIcon color="primary"/>}
        onChange = {(e)=>setChecked(e.target.checked)} 
        color = "default"
        inputProps={{
          "aria-label":"secondary checkbox"
          }}
        />}
    />
  )
} // Creates a new button with a red delete button and a blue save button

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Typography variant="h3">Whalecome</Typography>
          <Typography variant="body2" component="div">to Using MUI</Typography> {/* div with h2 styling applied */}
          <Typography variant="subtitle1">Here are some examples</Typography>
          <ButtonStyled />
          <ButtonGroup 
            variant="contained">
            <Button 
              OnClick={()=>alert("DLROW OLLEH")}
              href="H3110_W0R1D" 
              startIcon={<SaveIcon />}
              color="primary">
              HELLO WORLD
            </Button>
            <Button 
              OnClick={()=>alert("ECAPS EYBDOOG")}
              href="600D8Y3_5P4C3" 
              endIcon={<DeleteIcon />}
              color="secondary">
              GOODBYE SPACE
            </Button>
          </ButtonGroup>
          <TextField 
            variant="filled"
            type="date"
            color="secondary"
          />
          <TextField 
            variant="outlined"
            type="text"
            color="primary"
            label="Label"
            placeholder="Text"
          />
          <TextField 
            variant="outlined"
            type="color"
            color="secondary"
          />
          {/* </Checkbox> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <body>
          <div>
            <FormControlLabel
            control={
              <ChEx />
            }
            label="You'll pay for your insulin"
            /> 
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App; 
