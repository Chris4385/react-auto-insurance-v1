import React, { forwardRef } from "react";
import { TextField, Grid } from "@material-ui/core";

export const FormInput = forwardRef((props, ref) => {
  return (
    <Grid item xs={12} sm={6}>
      <TextField innerRef={ref} {...props} fullWidth required></TextField>
    </Grid>
  );
});

// function FormInput({ name, label }) {
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();
//   return (
//     <Grid item xs={12} sm={6}>
//       <Controller
//         control={control}
//         name={name}
//         render={({ field }) => (
//           <TextField
//             value={field.value}
//             onChange={field.onChange}
//             inputRef={field.ref}
//             label={label}
//             fullWidth
//             required
//           />
//         )}
//       ></Controller>
//     </Grid>
//   );
// }

// export default FormInput;
