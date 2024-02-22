import Mustache from "mustache";
import fs from "fs/promises";

test("Menggunakan mustache list object", async () => {
    const helloTemplate = await fs
        .readFile(__dirname + "/../views/students.mustache")
        .then((data) => data.toString());

    const data = Mustache.render(helloTemplate, {
        title: "Menampilkan List Object",
        students: [
            {
                name: "Otong",
                value: 100,
            },
            {
                name: "Asep",
                value: 200,
            },
        ],
    });

    console.info(data);
    expect(data).toContain("Otong");
    expect(data).toContain("Asep");
    expect(data).toContain("100");
});
