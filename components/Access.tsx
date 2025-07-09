export default function Access() {
    return (
        <section id="access" className="py-12 bg-white text-center px-4 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-4">アクセス & 営業時間</h2>
            <p className="text-lg">東京都世田谷区パン通り3-14-7</p>
            <p className="text-lg mt-2">営業時間：8:00〜18:00（定休：水曜日）</p>
            <div className="flex justify-center mt-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51882.29547496697!2d139.6345!3d35.636514999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f38bdd6d8d61%3A0x4ebc10d2858da879!2z5p2x5Lqs6YO95LiW55Sw6LC35Yy6!5e0!3m2!1sja!2sjp!4v1752024196782!5m2!1sja!2sjp"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}
