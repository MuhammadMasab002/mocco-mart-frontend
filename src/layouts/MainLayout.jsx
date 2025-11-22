import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container px-4 py-6 flex flex-col min-h-screen m-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
