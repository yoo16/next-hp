export default function About() {
    const news = [
        { date: "2025-07-01", title: "新作クロワッサン販売開始！" },
        { date: "2025-06-20", title: "7月の営業日変更のお知らせ" },
        { date: "2025-06-10", title: "Lumièreが雑誌に掲載されました" },
    ];

    return (
        <section
            id="about"
            className="py-12 text-center h-screen px-4 scroll-mt-20"
        >
            <h2 className="text-3xl font-bold mb-4">Lumière について</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
                ブーランジェリー・リュミエールは、フランス伝統のレシピを守りながら、日本の食卓に合うパンをお届けしています。
            </p>

            <div className="max-w-2xl mx-auto text-left">
                <h3 className="text-2xl font-semibold mb-4 text-center">最新ニュース</h3>
                <ul className="space-y-3">
                    {news.map((item, index) => (
                        <li key={index} className="border-b pb-2">
                            <p className="text-sm text-gray-500">{item.date}</p>
                            <p className="text-md font-medium">{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}