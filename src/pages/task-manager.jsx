// Imports
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import HeadPage from "@/web/components/HeadPage";
import Title from "@/web/components/Title";
import Container from "@/web/components/Container";
import Sidebar from "@/web/components/Sidebar";

// TaskManager function
export default function TaskManager() {
  return (
    <>
      <HeadPage />
      <Main>
        <Sidebar />
        <Container>
          <Title titleLabel="Task Manager" />
        </Container>
      </Main>
      <Footer />
    </>
  );
}
