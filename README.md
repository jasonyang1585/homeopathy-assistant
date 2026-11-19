# 🌿 順勢療方助手 (Homeopathic Materia Medica Assistant)

結合**經典七維度順勢辨證**、**S.R. Phatak 藥典查詢**與**英國巴赫花精情緒平衡**的智慧網頁應用程式。支援離線經典藥典即時比對，並可透過 Vercel Serverless Function 安全串接 Google Gemini AI 進行深度個人化辨證分析。

---

## ✨ 核心功能

### 1. 經典順勢療法 7 維度諮詢評估
支援**急性 (Acute)** 與**慢性 (Chronic)** 兩種病程模式，透過七大維度建立完整症狀輪廓：
1. **病因與誘發因素 (Etiology)**
2. **主要症狀 (Chief Complaint)**
3. **自己感覺 (Sensation)**
4. **惡化與好轉因子 (Modality)**
5. **伴隨症狀 (Concomitants)**
6. **情緒與行為 (Mind & Emotion)** — 自動連動英國巴赫 38 種原創花精配對
7. **對什麼較敏感 (Sensitivities)**

* 內建 **3 個一鍵體驗經典諮詢情境範例**，方便快速測試與教學展示。
* 依匹配度由高至低排列建議療方，並提供對應的順勢層級（`5CH` / `9CH` / `15CH` / `30CH` / `200CH` / `200K`）與建議用量：
  * **症狀藥**：1 天 3 次，餐前使用
  * **體質藥**：1 天 1 次，或 1 周 1 次
  * **巴赫花精**：每次吃 3 粒糖球
* 同步生成**常規醫療分析與生活起居衛教建議**，以及缺漏維度的智能諮詢引導。

### 2. 順勢藥名直接查詢 (Materia Medica Lookup)
* 支援以拉丁學名、英文簡稱或中文藥名直接檢索（內建 15 種常用經典順勢藥物，並可透過 AI 查詢任意順勢藥方）。
* 依辨證規範，單純查詢順勢藥名時僅顯示完整藥物專論，不顯示巴赫花精。

### 3. 離線與 AI 雙引擎
* **離線比對**：內建經典順勢藥典與完整 38 種巴赫花精資料庫，無網路或未設定 API 時仍可即時運作。
* **AI 深度辨證**：透過後端代理呼叫 Google Gemini API，在保護金鑰的前提下提供更精準的語意辨證與任意藥典檢索。

---

## 🛠️ 技術架構

* **前端**：純單頁 HTML5 / Vanilla JavaScript / [Tailwind CSS (CDN)](https://tailwindcss.com/) / [Font Awesome 6](https://fontawesome.com/)
* **後端代理**：Vercel Serverless Function (`/api/gemini.js`)
* **AI 模型**：Google Gemini API

---

## 📂 專案目錄結構

```text
📦 homeopathy-app
┣ 📂 api
┃ ┗ 📜 gemini.js        # Vercel 後端代理，負責安全呼叫 Gemini API
┣ 📜 index.html         # 主程式（前端介面與內建藥典資料庫）
┗ 📜 README.md          # 專案說明文件
