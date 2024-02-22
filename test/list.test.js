import Mustache from "mustache";
import fs from "fs/promises";

test("Menggunakan mustache list array", async () => {
    const helloTemplate = await fs
        .readFile(__dirname + "/../views/hobbies.mustache")
        .then((data) => data.toString());

    const data = Mustache.render(helloTemplate, {
        title: "Menampilkan List Array",
        hobbies: ["Melototin Orang", "Lari", "Nonton", "Main Game"],
    });

    console.info(data);
    expect(data).toContain("Lari");
});
