// this is es6 javascript, this'll make sense once you start googling things

// NPM Information
// npm is a package manager. It lets you install react and javascript libraries
// yarn is very similar and almost interchangeable
// npm install // this installs all the libraries listed in the dependencies section of the package.json file
// npm start   // starts the server
// npm install --save library_name // this installs library_name and it gets added to the package.json file

// here are some useful libraries, though it is hard to use them right away
// react-helmet // https://github.com/nfl/react-helmet // made by devs that work for the NFL and it is used to affect the <head> elements in html // I'll give you some examples when you're ready
// react-router // https://github.com/ReactTraining/react-router // used to control the address bar url
// react-bootstrap // this is like bootstrap but with using react components // it doesn't have everything and you can just use regular bootstrap if you want

// the easiest way to start a fresh project is the following:
// npm install -g create-react-app // this installs the tool create-react-app globablly meaning you can call it from the command line
// create-react-app name_of_app    // this creates the folder name_of_app
// cd name_of_app
// npm start                       // this starts the server.  When you change and save a .js file in the src directory your website will refresh automatically

// REACT file.js structure information
// There are 5 main sections to a React .js file

// 1. imports     -  just like in Java
//    if you are importing a component you made it looks like this:     import SomeName from './Path/to/file';
//    if you are importing a component from a library, generally it is: import Something from 'library_name';
// 2. constructor - here you can create class variables (this.var = 'hello') that hold data
// 3. class methods - there are a lot of different ways of writing a class method in reactjs
// 4. render() - here you can create variables and stuff for the html that is returned
// 5. return - this is the html that you return to the dom of the browser.  It has to have a single outer element (like everything wrapped in a div)

// REACT in general

// a. JSX HTML
// this is the basic html element that appears in the browser and is mostly in the return method
// <div> </div> or <p> </p> or <a> </a> // any normal html tag, remember to always close your tags eg. <input/>
// <div className='col-s6' style={{marginBottom: '16px'}}> </div> // these are props or arguments that you are passing into the <div></div> element
//    // you can make a key, value pair object in render() and pass that to style:
//        // var containerStyle = {width: '70%', height: '100%', paddingBottom: '16px'}; // and used in the return()
//        // <div style={constainerStyle}> </div>
// these elements also have all the regular javascript functions
// <button onClick={this.handleClick} onMouseOver={this.handleMouseOver}> Click or Hover! </button>
// in your class method you would have a mouseOver and click methods like this:
// handleMouseOver = () => {
//   console.log("Mouse Over");
// }
// handleClick = () => {
//   console.log("Button Clicked");
// }

// b. PROPS
// props are how data and information is passed to other components/classes.  They are like parameters/arguments in other languages
//  - props are passed into react components (<SomeComponent passedProps="a string"/>) and are retrieved by that component (this.props.passedProps)
//  - you can pass functions through props, so that a subcomponent can affect the parent component (this can get complicated)
//    - the increaseCounter() function is passed into the <Button/> through the someFunction prop in the code below

// c. STATE
// state is how the page can refresh some information without reloading the entire page.  It is a series of key, value pairs
//    this.state.someValue; // this is how you use/access that value
//    this.setState({key: "value" })   // this is how you change a value and how it knows to look for a changed value and refresh that portion of the page
// you can update multiple values with the same setState call:
//    this.setState({
//      key: "value",
//      intKey: 0,
//      color: 'red'
//    });
// you use the state to show/hide an html element with the following
//    // only shows the text if the color is 'red'    else show nothing
//    { this.state.color === 'red' ? <p>It's red!</p> : ''}
//    // later if you change the color, the html paragraph will disappear
//    this.setState({color: 'blue'});



// 1. imports
import React from 'react';

// This is from Button.js that I made - you don't need to include the file extension
import Button from './Button';

export default class Stuff extends React.Component {
  // 2. constructor
  // props are always passed into the constructor immediately followed by super(props) // I'm not sure exactly about this magic
  constructor(props) {
    super(props);
    this.state = {
      isBlueButton: false,
      counter: 0
    }

    this.classVar = 'This is is a class variable';
  }

  // 3. class methods
  showHideButton = () => {
    // this changes the state and runs everything below render again to see what changed
    this.setState({ isBlueButton: !this.state.isBlueButton });
  }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  htmlFromFunction = () => {
    return (
      <div>
        <p>This is returned html from a method </p>
        <br/>
      </div>
    );
  }

  getHideOrShowText = () => {
    // returns "Hide" or "Show" based on the current state value
    return this.state.isBlueButton ? "Hide" : "Show";
  }

  // 4. render
  render() {

    var renderVar = 'This is a string from the render function';

    // 5. return
    return (

      <div>
        <p>{this.classVar}</p>
        <p>{renderVar}</p>
        {this.htmlFromFunction()}

        <button onClick={this.showHideButton}>{this.getHideOrShowText()} Blue Button</button>

        { this.state.isBlueButton ?
          <Button color="blue" label="Hide Me!" someFunction={this.showHideButton}/> : ''
        }
        <br/>
        <br/>
        <Button color="green" bgColor="white" label="Increase Counter" someFunction={this.increaseCounter} />
        <p>Counter: {this.state.counter}</p>
      </div>

    );
  }
}
