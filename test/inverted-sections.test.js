import Mustache from "mustache";
import fs from "fs/promises";

test("Menggunakan mustache sections data", async () => {
    const helloTemplate = await fs
        .readFile(__dirname + "/../views/person.mustache")
        .then((data) => data.toString());

    const data = Mustache.render(helloTemplate, {});

    expect(data).toContain("Hello Guest");
});
