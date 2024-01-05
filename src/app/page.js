import App from "../components/Home";

export const metadata = {
  title: "Counter App | Persist state between pages",
};

function Home() {
  return (
    <main className="w-[100dvw] h-[100dvh] flex flex-col items-center font-mono pt-20 gap-12">
      <App />
    </main>
  );
}

export default Home;
