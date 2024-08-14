// Imports
import Main from "@/web/components/Main"
import Title from "@/web/components/Title"
import Container from "@/web/components/Container"
import Sidebar from "@/web/components/Sidebar"

// Profile function
const Profile = () => (
  <Main>
    <Sidebar />
    <Container>
      <Title titleLabel="Profile" />
    </Container>
  </Main>
)
