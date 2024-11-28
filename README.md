# 💫 Shalom's Payment Gateway

<div align="center">
  <img src="public/logo.svg" alt="Payment Gateway Logo" width="200" height="200"/>
  
  <p>
    <em>A modern, secure payment processing solution built with Next.js and Paystack</em>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-13.5.6-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
    <img src="https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/Tailwind-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind"/>
  </p>
</div>

## ✨ Features

- 🔒 **Secure Payments** - Industry-standard security with Paystack
- 💳 **Multiple Payment Methods** - Support for cards, bank transfers, and mobile money
- 🌙 **Dark Mode** - Sleek dark theme support
- 📱 **Responsive Design** - Beautiful on all devices
- ⚡ **Real-time Processing** - Instant payment verification
- 🔄 **Webhook Integration** - Automated payment status updates

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone https://github.com/yourusername/payment-gateway.git
   cd payment-gateway
   npm install
   ```

2. **Set up Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your Paystack credentials:
   ```env
   PAYSTACK_SECRET_KEY=your_secret_key
   PAYSTACK_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_BASE_URL=your_base_url
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) 🎉

## 🛠️ Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payment**: Paystack
- **State Management**: React Hooks
- **API Integration**: Axios

## 📦 Project Structure

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
└── public/
    ├── logo.svg
    └── favicon.ico
```

## 🔒 Security Features

- ✅ Secure API Key Management
- ✅ Input Validation
- ✅ Error Handling
- ✅ HTTPS Enforcement
- ✅ Webhook Verification

## 🌟 Usage

1. Enter payment amount and email
2. Click "Initialize Payment"
3. Complete payment on Paystack's secure page
4. Automatic redirect to verification page
5. View transaction status and details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

<div align="center">
  <img src="public/ProfilePic.png" alt="Shalom" width="100" height="100" style="border-radius: 50%;"/>
  
  ### Developed with ❤️ by Shalom
  
  [GitHub](https://github.com/ShalomObongo) • [LinkedIn](https://linkedin.com/in/shalom-obongo)
</div>

---

<div align="center">
  Made with ☕ and Next.js
</div>
