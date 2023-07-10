// Imports
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import HeadPage from "@/web/components/HeadPage";

// Home page function
export default function Home() {
  return (
    <>
      <HeadPage />
      <Main>
        <h1>Tasker</h1>
      </Main>
      <Footer />
    </>
  );
}
