// Imports
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import HeadPage from "@/web/components/HeadPage";
import Title from "@/web/components/Title";
import Container from "@/web/components/Container";

// TaskManager function
export default function TaskManager() {
  return (
    <>
      <HeadPage />
      <Main>
        <Container>
          <Title titleLabel="Task Manager" />
        </Container>
      </Main>
      <Footer />
    </>
  );
}
