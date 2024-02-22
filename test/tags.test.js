import Mustache from "mustache";

test("Tags", () => {
    const data = Mustache.render("Hello {{name}}, my hobby is {{{hobby}}}", {
        name: "Otong",
        hobby: "<strong>Coding</strong>",
    });
    expect(data).toBe("Hello Otong, my hobby is <strong>Coding</strong>");
});
