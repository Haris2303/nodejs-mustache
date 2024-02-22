import Mustache from "mustache";
import fs from "fs/promises";

test("Menggunakan mustache sections data", async () => {
    const helloTemplate = await fs
        .readFile(__dirname + "/../views/person.mustache")
        .then((data) => data.toString());

    const data = Mustache.render(helloTemplate, {
        title: "Mustache Sections",
        person: {
            name: "Otong",
        },
    });

    expect(data).toContain("Hello Person Otong!");
});
