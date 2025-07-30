import {
  Button,
  PasswordInput,
  SegmentedControl,
  TextInput,
} from "@mantine/core";
import { IconHeartbeat } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const form = useForm({
    initialValues: {
      type: "Patient",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    if (!values.email || !values.password || !values.confirmPassword) {
      toast.error("All fields are required", {
        autoClose: 3000,
        position: "top-right",
      });
      return;
    }
    if (!/^\S+@\S+$/.test(values.email)) {
      toast.error("Invalid Email", { autoClose: 3000, position: "top-right" });
      return;
    }
    if (values.password !== values.confirmPassword) {
      toast.error("Passwords do not match", {
        autoClose: 3000,
        position: "top-right",
      });
      return;
    }
    console.log("Form submitted:", values);
    toast.success("Registration successful", {
      autoClose: 3000,
      position: "top-right",
    });
    form.reset();
  };

  return (
    <div className="bg-gradient-to-r from-[#32b9a9] to-[#1d4944] h-screen w-screen flex justify-center items-center flex-col">
      <div className="text-[#00ffe1] flex gap-1 items-center py-3">
        <IconHeartbeat />
        <span className="font-heading font-semibold text-3xl">Pulse</span>
      </div>
      <div className="w-[450px] backdrop-blur-md p-10 py-8 rounded-lg shadow-lg bg-[#f0f3fb]">
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="self-center text-xl font-heading">Register</div>
          <SegmentedControl
            fullWidth
            size="md"
            radius="md"
            color="#32b9a9"
            value="Patient"
            data={[
              { label: "Patient", value: "Patient" },
              { label: "Doctor", value: "Doctor" },
              { label: "Admin", value: "Admin" },
            ]}
            {...form.getInputProps("type")}
          />
          <TextInput
            variant="unstyled"
            value={form.values.email}
            size="md"
            radius="md"
            placeholder="Email"
            className="border px-3 rounded-lg border-gray-400"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            variant="unstyled"
            value={form.values.password}
            size="md"
            radius="md"
            placeholder="Password"
            className="border px-3 rounded-lg border-gray-400"
            {...form.getInputProps("password")}
          />
          <PasswordInput
            variant="unstyled"
            value={form.values.confirmPassword}
            size="md"
            radius="md"
            placeholder="Confirm Password"
            className="border px-3 rounded-lg border-gray-400 focus:ring-2"
            {...form.getInputProps("confirmPassword")}
          />
          <Button type="submit" variant="gradient" radius="md">
            Register
          </Button>
          <div className="text-center">
            Have an account?{" "}
            <Link to="/login" className="text-[#32b9a9] hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
