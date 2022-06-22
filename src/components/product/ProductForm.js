import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required();

function ProductForm({ label }) {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <h1>{label}</h1>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit((d) => console.log(d))}>
          <Stack spacing={2}>
            <TextField
              label="Prodct Name"
              id="outlined-size-small"
              defaultValue={""}
              size="small"
              {...register("name")}
            />

            <TextField
              label="Unit Price"
              id="outlined-size-small"
              defaultValue={""}
              size="small"
              {...register("age")}
            />

            <TextField
              label="Thumbnail"
              id="outlined-size-small"
              defaultValue={""}
              size="small"
              {...register("age")}
            />

            {<Button variant="contained">{label}</Button>}
          </Stack>
        </form>
      </Container>
    </div>
  );
}

export default ProductForm;
