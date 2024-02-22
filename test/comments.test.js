import Mustache from "mustache";
import fs from "fs/promises";

test("Menggunakan mustache komentar", async () => {
    const helloTemplate = await fs
        .readFile(__dirname + "/../views/comments.mustache")
        .then((data) => data.toString());

    const data = Mustache.render(helloTemplate, {
        title: "Mustache Comment",
        name: "Otong",
    });

    expect(data).not.toContain("Komentar");
    expect(data).toContain("Hello Otong");
});
