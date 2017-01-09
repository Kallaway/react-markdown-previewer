import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var marked = require('marked');


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Markdown Previewer</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<MainFrame />
      </div>
    );
  }
}

class MainFrame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentText: "Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading",
			currentMarkdown: ""
		}
	}

	handleChange(changedText) {
		// return changedText;
		// received the changed text and updated the info. after changing the state - should the other component also be updated?
		console.log("Handle change function gets called");
		console.log("The text given to the function is: " + changedText);
		var currentMarkdown = marked(changedText);
		this.setState({
			currentText: changedText,
			currentMarkdown: currentMarkdown,
		})
	}

	render() {
		return (
			<div className="Main-frame">
				<Editor text={this.state.currentText} onChange={(changedText) => this.handleChange(this.state.changedText)}/>
				<Preview markdown={this.state.currentMarkdown}/>
			</div>
		);
	}
}

class Editor extends Component {
	constructor(props) {
		super(props);
		// this.test = "something";
		this.state = {
			text: "Testing this"
		}
		// this.state = {
		// 	defaultText:
		// 	`Heading
		// 	=======
		//
		// 	Sub-heading
		// 	-----------
		//
		// 	### Another deeper heading
		//
		// 	Paragraphs are separated
		// 	by a blank line.
		//
		// 	Leave 2 spaces at the end of a line to do a
		// 	line break
		//
		// 	Text attributes *italic*, **bold**,
		// 	\`monospace\`, ~~strikethrough~~ .
		// 	`
		// }
	}

	onTextareaChange = () => {
		console.log("text changed");
		// Load the
		// based on the content of this table,
		var string = this.state.text; //how to get the current text of a text area?
		console.log(string);
		// use the library Marked to parse Markdown
		// marked(string)
		console.log(marked(string));
		// we need to somehow push the change of state into the preview component

		// send it up to the parent and then push down to Preview?
	}

	render() {
		return (
			<div className="Editor">
				<p>This is Editor</p>
				<textarea defaultValue={this.state.text} onChange={this.props.onChange}></textarea>
			</div>

		);
	}
}

class Preview extends Component {
	changeBackgroundOnClick = () => {
		alert("test has run successfully");
	}

	render() {
		return (
			<div className="Preview">
				<div>{this.props.currentMarkdown}</div>
				<p>This is Preview</p>
				<button>Test</button>
			</div>

		);
	}

}

export default App;
