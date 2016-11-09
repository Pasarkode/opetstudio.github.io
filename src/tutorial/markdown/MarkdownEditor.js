var Remarkable = require('remarkable');
import React, {Component} from 'react';

class MarkdownEditor extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 'Type some *markdown* here!'};
  }
  handleChange() {
    this.setState({value: this.refs.textarea.value});
  }

  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }
  render() {
    return (
      <div className="MarkdownEditor">
        <h4>Input markdown editor</h4>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h4>Output</h4>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}
export default MarkdownEditor;
