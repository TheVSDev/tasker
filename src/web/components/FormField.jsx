import clsx from "clsx"
import { Field } from "formik"

const FormField = (props) => {
  const { as: Component = "input", name, ...otherProps } = props

  return (
    <Field name={name}>
      {({ field, meta: { error, touched } }) => (
        <label className="flex flex-col gap-2">
          <Component
            {...field}
            {...otherProps}
            className={clsx(
              "border-2 px-4 py-2 rounded-lg my-1 text-slate-950 focus:outline-1 outline-gray-100",
              {
                "focus:border-pink-600": !error || !touched,
                "border-red-600": error && touched,
              },
            )}
          />
          {error && touched && (
            <span className="text-sm font-medium text-red-500 mb-2">{error}</span>
          )}
        </label>
      )}
    </Field>
  )
}

export default FormField
