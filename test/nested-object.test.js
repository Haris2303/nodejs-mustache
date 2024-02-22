import Mustache from "mustache";

test("Menggunakan Nested Object", () => {
    const data = Mustache.render("Hello {{person.name}}", {
        person: {
            name: "Otong",
        },
    });
    expect(data).toBe("Hello Otong");
});
