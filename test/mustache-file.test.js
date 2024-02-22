import Mustache from "mustache";
import fs from "fs/promises";

test("Menggunakan mustache file", async () => {
    const helloTemplate = await fs
        .readFile(__dirname + "/../views/hello.mustache")
        .then((data) => data.toString());

    const data = Mustache.render(helloTemplate, {
        title: "Udemy PZN",
    });

    expect(data).toContain("Udemy PZN");
});
