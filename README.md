# 💫 Shalom's Payment Gateway

<div align="center">
  <img src="public/logo.svg" alt="Payment Gateway Logo" width="120" height="120"/>

  <h1>Shalom's Payment Gateway</h1>
  
  <p>
    <em>A modern, secure payment processing solution powered by Next.js and Paystack</em>
  </p>

  <a href="https://nextjs.org">
    <img src="https://img.shields.io/badge/Next.js-13.5.6-black?style=flat-square&logo=next.js" alt="Next.js"/>
  </a>
  <a href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript-5.2.2-blue?style=flat-square&logo=typescript" alt="TypeScript"/>
  </a>
  <a href="https://tailwindcss.com">
    <img src="https://img.shields.io/badge/Tailwind-3.3.3-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind"/>
  </a>
  <a href="https://paystack.com">
    <img src="https://img.shields.io/badge/Paystack-Enabled-success?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAggAAAIIBsKhZvgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAERSURBVCiRldOxSgNBEAbgb9dcLBQLA4KFWPkGvkQKwUZS+QiCrY2dhb2NYGEhiFj4AJYWkkKwsVArCOEuCcEQ0pjd7FnsFW5z7LHzwzAM/8AMPzCiRPvYQQs/kGIdv1jBLHqYxifaKZ7hCqcYYYgdfOMcE1X8Dj18VfAxWnhEUgXbuEA/h0yhlcNuqnqPJ0G0U9Wt4E9wWNBmMIkBXgp4Ak8ZCNuioG/xjnnM4a0EH2AV13jHYS6+iY/w7GEF12U4wSxOsIfz0MQj7IbJ66Oo43vYxwI+0QzTPGMzjG/Qxk1VVQ1jGW9hZxvbuEtDZ9XCd4Jh/5ZqWPpv4Q7WcBfu8FfDZejiBxvYDyv/l/Yw/gYyUDk7dYz/YAAAAABJRU5ErkJggg==" alt="Paystack"/>
  </a>
</div>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#security">Security</a> •
  <a href="#usage">Usage</a>
</p>

## ✨ Features

<table>
  <tr>
    <td>🔒 <b>Secure Payments</b></td>
    <td>🌙 <b>Dark Mode</b></td>
    <td>📱 <b>Responsive Design</b></td>
  </tr>
  <tr>
    <td>Industry-standard security with Paystack</td>
    <td>Sleek dark theme support</td>
    <td>Beautiful on all devices</td>
  </tr>
  <tr>
    <td>💳 <b>Multiple Methods</b></td>
    <td>⚡ <b>Real-time Processing</b></td>
    <td>🔄 <b>Webhooks</b></td>
  </tr>
  <tr>
    <td>Cards, transfers, mobile money</td>
    <td>Instant payment verification</td>
    <td>Automated status updates</td>
  </tr>
</table>

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone https://github.com/ShalomObongo/payment-gateway.git
   cd payment-gateway
   npm install
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   ```
   Add your Paystack credentials:
   ```env
   PAYSTACK_SECRET_KEY=your_secret_key
   PAYSTACK_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_BASE_URL=your_base_url  # Use ngrok for testing webhooks
   ```

3. **Launch Development Server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) 🎉

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
      <br>Next.js 13
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
      <br>Tailwind
    </td>
  </tr>
</table>

## 🔒 Security

- ✅ **API Key Management** - Secure credential handling
- ✅ **Input Validation** - Comprehensive data validation
- ✅ **Error Handling** - Graceful error management
- ✅ **HTTPS** - Secure communication
- ✅ **Webhooks** - Signature verification

## 🌟 Usage

1. Enter amount and email
2. Click "Initialize Payment"
3. Complete payment via Paystack
4. Automatic verification
5. View transaction details

## 📂 Structure

```
src/
├── app/
│   ├── api/
│   │   ├── initialize-payment/
│   │   ├── verify-payment/
│   │   └── webhook/
│   ├── components/
│   │   └── PaymentForm.tsx
│   ├── payment/
│   │   └── verify/
│   ├── layout.tsx
│   └── page.tsx
```

## 🤝 Contributing

Feel free to contribute! Open a PR or issue.

## 📝 License

MIT License - See [LICENSE](LICENSE) for details.

<div align="center">
  <br />
  <img src="public/ProfilePic.png" alt="Shalom" width="80" height="80" style="border-radius: 50%; border: 2px solid #10B981;" />
  
  <h3>Developed by Shalom</h3>
  
  [![GitHub](https://img.shields.io/badge/GitHub-ShalomObongo-181717?style=flat-square&logo=github)](https://github.com/ShalomObongo)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-shalom--obongo-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/shalom-obongo)
  
  <sub>Made with ☕ and Next.js</sub>
</div>
