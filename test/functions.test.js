import Mustache from "mustache";

test("Menggunakan mustache functions", async () => {
    const parameter = {
        name: "Otong",
        upper: () => {
            return (text, render) => {
                return render(text).toUpperCase();
            };
        },
    };

    const data = Mustache.render(
        "Hello {{#upper}}{{name}}{{/upper}}",
        parameter
    );

    expect(data).toBe("Hello OTONG");
});
