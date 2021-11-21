import { parserCsv } from "../parser";

class Authors {
  constructor() {
    this.data = parserCsv("authors");
  }

  getData() {
    return this.data;
  }
}

export default Authors;
