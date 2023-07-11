// Imports
import * as yup from "yup"
import Link from "next/link"
// import { useRouter } from "next/router"
// import { useContext } from "react"

// import AppContext from "@/web/components/AppContext"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import Main from "@/web/components/Main"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import Footer from "@/web/components/Footer"
import HeadPage from "@/web/components/HeadPage"

// Form attributes
const initialValues = {
  username: "",
  password: "",
}

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required").label("Username"),
  password: yup.string().min(8).required("Password is required").label("Password"),
})

// SignIn function
const SignIn = () => {
  // const router = useRouter()
  // const {
  //   actions: { signIn },
  // } = useContext(AppContext)
  
  // Function to be executed when the form is submitted
/*  const handleSubmit = async (values) => {
    const { username, password } = values
    const [err] = await signIn(username, password)
  
    if (!err) {
      router.push("/scan-page")
    }
  }*/

  return (
    <>
      <HeadPage />
      <Main>
        <br />
        <Form
          title="SIGN IN"
          initialValues={initialValues}
          validationSchema={validationSchema}
          // onSubmit={handleSubmit}
        >
          <FormField
            name="username"
            type="text"
            placeholder="Username"
            label="Username"
          />
          <FormField
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
          />
          <SubmitButton btnLabel="Log in" />
          <br />
          <br />
          <br />
          <span className="text-sm">You don&apos;t have an account ? <br /><Link href="/sign-up" className="text-green-500">Create one</Link></span><br /><br />
        </Form>
      </Main>
      <Footer />
    </>
  )
}

export default SignIn
