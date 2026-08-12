import HomeBtn from "@/components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="min-h-screen relative">
      <HomeBtn />
      {children}
    </main>
  );
}