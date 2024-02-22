import Mustache from "mustache";
import fs from "fs/promises";

test("Menggunakan mustache sections not show", async () => {
    const helloTemplate = await fs
        .readFile(__dirname + "/../views/person.mustache")
        .then((data) => data.toString());

    const data = Mustache.render(helloTemplate, {});

    expect(data).not.toContain("Person");
});

test("Menggunakan mustache sections show", async () => {
    const helloTemplate = await fs
        .readFile(__dirname + "/../views/person.mustache")
        .then((data) => data.toString());

    const data = Mustache.render(helloTemplate, {
        title: "Mustache Sections",
        person: {
            name: "Otong",
        },
    });

    expect(data).toContain("Hello Person");
});
