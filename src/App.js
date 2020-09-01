import React from 'react';
import './App.css';
import marked from 'marked';

marked.setOptions({
  breaks: true
})

let defaultMD = `# Header 1
## Header 2

Link Example: [This is a Link!](http://freecodecamp.org)

Just some sameple text
So sampley!
Look at them linebreaks!

Inline Code: \`Inline Code\` Is here!

\`\`\`
Code Block here!
\`\`\`

* List Item 1
* List Item 2
* List Item 3

> Blockquote Example

**Bold Text**  

Image:
![](https://picsum.photos/200/300)
`;

class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      content: defaultMD,
      markdown_content: marked(defaultMD)
    }
    
    this.textarea_keyup = this.textarea_keyup.bind(this)
    this.getMarkdownText = this.getMarkdownText.bind(this)
  }
  
  textarea_keyup(e) {
    this.setState({
        content: e.target.value,
        markdown_content: marked(e.target.value) 
    });
  }
  
  getMarkdownText() {
    return { __html: this.state.markdown_content}
  }
  
  render() {
    return (
        [ <h1 style={{"textAlign": "center"}}>Free Code Camp - Markdown Previewer Project</h1>,
        <div id="container">          
          <div className="column">
            <h2>Markdown</h2>
            <textarea id="editor" onChange={this.textarea_keyup} value={this.state.content} />
          </div>

        <div className="column">
          <h2>Preview</h2>
          <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />
        </div>
      </div> ]
    );
  }
  
}

export default App;
