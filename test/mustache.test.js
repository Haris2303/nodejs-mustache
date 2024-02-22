import Mustache from "mustache";

test("Menggunakan mustache", () => {
    const data = Mustache.render("Hello, {{name}}", { name: "Otong" });
    expect(data).toBe("Hello, Otong");
});
