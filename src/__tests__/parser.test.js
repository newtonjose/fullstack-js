import { parserCsv } from "../parser";

it("test read file authors", async () => {
  const data = await parserCsv("authors");
  expect(data).toBeInstanceOf(Array);
});


it("test read file books", async () => {
  const data = await parserCsv("books");
  expect(data).toBeInstanceOf(Array);
});

it("test read file magazines", async () => {
  const data = await parserCsv("magazines");
  expect(data).toBeInstanceOf(Array);
});
