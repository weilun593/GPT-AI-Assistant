import Prompt from './prompt.js';

class Storage {
  prompts = new Map();

  /**
   * @param {string} id
   * @returns {Prompt}
   */
  getPrompt(id) {
    return this.prompts.get(id) || new Prompt();
  }

  /**
   * @param {string} id
   * @param {Prompt} prompt
   */
  setPrompt(id, prompt) {
    this.prompts.set(id, prompt);
  }

  toString() {
    return Array.from(this.prompts)
      .map(([id, prompt]) => `=== ${id.slice(0, 6)} ===\n\n${prompt.toString()}`)
      .join('\n');
  }
}

export default Storage;
