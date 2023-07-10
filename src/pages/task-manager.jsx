// Imports
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import HeadPage from "@/web/components/HeadPage";
import Title from "@/web/components/Title";

// TaskManager function
export default function TaskManager() {
  return (
    <>
      <HeadPage />
      <Main>
        <Title titleLabel="Task Manager" />
      </Main>
      <Footer />
    </>
  );
}
