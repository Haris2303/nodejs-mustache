import Mustache from "mustache";
import fs from "fs/promises";

test("Partials", async () => {
    const headerTemplate = await fs
        .readFile(__dirname + "/../views/partials/header.mustache")
        .then((data) => data.toString());
    const footerTemplate = await fs
        .readFile(__dirname + "/../views/partials/footer.mustache")
        .then((data) => data.toString());
    const contentTemplate = await fs
        .readFile(__dirname + "/../views/content.mustache")
        .then((data) => data.toString());

    const data = Mustache.render(
        contentTemplate,
        {
            title: "Menggabungkan template partials",
            name: "Otong",
            content: "Otong adalah seorang pahlawan EPEP yang sangat brutal",
        },
        {
            header: headerTemplate,
            footer: footerTemplate,
        }
    );

    expect(data).toContain("partials");
    expect(data).toContain("Hello Otong");
    expect(data).toContain("EPEP");
    expect(data).toContain("Powered By");
});
