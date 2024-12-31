
# Next.js Rendering Methods Example

This project demonstrates different rendering methods available in Next.js, including:

- **Server-Side Rendering (SSR):** Pages are rendered on the server for every request.
- **Static Site Generation (SSG):** Pages are pre-rendered at build time.
- **Incremental Static Regeneration (ISR):** Pages are updated at runtime after a set revalidation period.
- **Client-Side Rendering (CSR):** Pages fetch data and render dynamically in the client browser.

---

## 🚀 Features

- Implementation of all rendering methods in Next.js.
- Responsive design using Tailwind CSS.
- Organized structure for easy scalability.

---

## 📂 Project Structure

```plaintext
src/
├── app/
│   ├── products-csr/       # Client-Side Rendering implementation
│   ├── products-ssr/       # Server-Side Rendering implementation
│   ├── products-ssg/       # Static Site Generation implementation
│   ├── products-isr/       # Incremental Static Regeneration implementation
│   ├── layout.tsx          # Root layout with header and footer
│   ├── page.tsx            # Home page with navigation links
├── components/
│   ├── ButtonLink.tsx      # Reusable button component
│   ├── ProductCard.tsx     # Card component for product display
│   ├── ProductDetails.tsx  # Component for displaying product details
│   ├── ProductList.tsx     # Component for rendering a list of products
```

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/masniper/nextjs-rendering-examples.git
   cd nextjs-rendering-examples
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Home Page
Navigate between SSR, SSG, ISR, and CSR pages.

### Products Pages
Display lists and details for each rendering method.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
