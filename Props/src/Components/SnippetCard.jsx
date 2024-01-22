import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function SnippetCard(){
    const data = 
        `<div>
            <h1>hello</h1>
        </div>`
    return(
        <SyntaxHighlighter language="javascript" style={dark}>
           {data}
            
    </SyntaxHighlighter>
    );
}