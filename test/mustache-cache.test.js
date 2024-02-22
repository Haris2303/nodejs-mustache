import Mustache from "mustache";

test("Menggunakan mustache cache", () => {
    Mustache.parse("Hello, {{name}}");

    const data = Mustache.render("Hello, {{name}}", { name: "Otong" });
    expect(data).toBe("Hello, Otong");
});
