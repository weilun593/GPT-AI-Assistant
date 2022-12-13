import {
  PARTICIPANT_AI,
} from '../services/openai.js';
import {
  OPENAI_COMPLETION_INIT_LANG,
} from '../config/index.js';

const LANGUAGES = {
  zh: '哈囉！',
  en: 'Hello!',
};

const MAX_LINE_COUNT = 10;

class Prompt {
  lines = [];

  constructor() {
    this.write(`${PARTICIPANT_AI}: ${LANGUAGES[OPENAI_COMPLETION_INIT_LANG]}`);
  }

  write(text) {
    if (this.lines.length >= MAX_LINE_COUNT) {
      this.lines.shift();
    }
    this.lines.push(text);
  }

  toString() {
    return this.lines.map((line) => `${line}\n`).join('');
  }
}

export default Prompt;
