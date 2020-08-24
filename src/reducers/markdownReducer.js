import { PARSE_MARKDOWN } from '../actions/types';

const placeholder = `# a header

## a sub header

[a link](https://www.google.com)

\`inline code\`

\`\`\`
a 
code 
block
\`\`\`

* a list item

> a blockquote

![an image](https://upload.wikimedia.org/wikipedia/commons/1/1b/Creative-Tail-Animal-dog.svg)

**bolded text**`;

const initialState = {
  markdown: placeholder,
  html: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PARSE_MARKDOWN:
      return {
        ...state,
       html: action.html
      };
    default:
      return state;
  }
}