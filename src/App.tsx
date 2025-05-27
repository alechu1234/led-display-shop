import { useState } from "react";

export default function LedDisplayShop() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("表單已送出，我們會盡快與您聯繫！");
    console.log("表單內容:", form);
    setForm({ name: "", contact: "", message: "" });
  };

  const handleQuickOrder = () => {
    alert("我們將盡快與您聯繫以安排貨到付款！");
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden text-gray-800 font-sans"
      style={{
        background: "linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 50%, #ff69b4 100%)",
      }}
    >
      {/* 移除背景圖片層 */}

      <div className="p-6 max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">LED 幻彩顯示屏</h1>
          <p className="text-lg">APP 控制｜防水｜可自訂動畫文字</p>
        </header>

        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <img
              src="/images/product-placeholder.jpg"
              alt="LED Display"
              className="w-full rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">NT$1256</h2>
            <p className="mb-2">16×96 像素｜尺寸：12×59.5cm（23.42x4.72in）</p>
            <p className="text-sm text-gray-500">
              幻彩動態效果 / APP 控制 / 藍牙連接 / 防水 IP65 / 附遙控器
            </p>
            <div className="grid gap-2 mt-4">
              <a href="https://shopee.tw/tapeeee_led" target="_blank" rel="noreferrer">
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">前往蝦皮購買</button>
              </a>
              <button onClick={handleQuickOrder} className="w-full border border-gray-400 py-2 rounded hover:bg-gray-100 transition">
                貨到付款下單（免會員）
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">產品特色</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>車用滾動字幕／活動裝飾皆適用</li>
              <li>支援 iOS / Android APP 操作</li>
              <li>USB 供電（附4.5m線）</li>
              <li>支援幻彩動畫與自訂文字</li>
              <li>防水滴膠工藝、堅固耐用</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">購買方式</h3>
            <p>目前支援蝦皮訂購，也可透過 IG 私訊下單。</p>
            <p className="text-sm mt-2 text-gray-500">
              IG：
              <a href="https://instagram.com/tapeeee_man" className="text-blue-600" target="_blank" rel="noreferrer">
                @tapeeee_man
              </a>
            </p>
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">常見問題 FAQ</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              <li>Q: 如何供電？<br />A: 使用 USB 供電，附 4.5 公尺線。</li>
              <li>Q: 可以顯示多行文字嗎？<br />A: 可透過 APP 自訂滾動多行文字。</li>
              <li>Q: 室外可以使用嗎？<br />A: 是的，本產品具備 IP65 防水功能。</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">聯絡我們</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="您的姓名"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              />
              <input
                type="text"
                name="contact"
                placeholder="Email 或 LINE ID"
                value={form.contact}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              />
              <textarea
                name="message"
                placeholder="想詢問的內容"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2 h-24"
              ></textarea>
              <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                送出
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
