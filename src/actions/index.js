import { PARSE_MARKDOWN } from './types';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

export const parseMarkdown = markdown => ({
  type: PARSE_MARKDOWN,
  html: marked(markdown)
});