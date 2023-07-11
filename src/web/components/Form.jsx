// import clsx from "clsx"
import { Formik, Form as FormikForm } from "formik"

import styles from "@/web/styles/Form.module.css"

const Form = (props) => {
  const { children, title, ...otherProps } = props

  return (
    <Formik {...otherProps}>
      <FormikForm
        noValidate
        className={styles.formContainer}
      >
        <h2 className={styles.title}>{title}</h2>
        {children}
      </FormikForm>
    </Formik>
  )
}
export default Form
