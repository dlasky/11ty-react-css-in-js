class CSSManager {
  constructor() {
    this.reset();
  }

  reset() {
    this.cssStorage = new Set();
  }

  addCSS(css) {
    if (css && css.trim()) {
      this.cssStorage.add(css.trim());
    }
  }

  getAllCSS() {
    return Array.from(this.cssStorage).join('\n');
  }

  hasCSS() {
    return this.cssStorage.size > 0;
  }
}

// Create a global instance
const cssManager = new CSSManager();

export { cssManager };