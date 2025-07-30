import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconHeartbeat } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    if (!values.email) {
      toast.error("Email is required", {
        autoClose: 3000,
        position: "top-right",
      });
      return;
    }
    if (!/^\S+@\S+$/.test(values.email)) {
      toast.error("Invalid Email", { autoClose: 3000, position: "top-right" });
      return;
    }
    if (!values.password) {
      toast.error("Password is required", {
        autoClose: 3000,
        position: "top-right",
      });
      return;
    }
    console.log('Form submitted:', values);
    toast.success("Login successful", {
      autoClose: 3000,
      position: "top-right",
    });
    form.reset();

    // Handle login logic here
  };

  return (
    <div className="bg-gradient-to-r from-[#32b9a9] to-[#1d4944] h-screen w-screen flex justify-center items-center flex-col">
      <div className="text-[#00ffe1] flex gap-1 items-center py-3">
        <IconHeartbeat />
        <span className="font-heading font-semibold text-3xl">Pulse</span>
      </div>
      <div className="w-[450px] backdrop-blur-md p-10 py-8 rounded-lg shadow-lg bg-[#f0f3fb]">
        <form onSubmit={form.onSubmit(handleSubmit)} className="flex flex-col gap-4">
          <div className="self-center text-xl font-heading">Login</div>
          <TextInput
            variant="unstyled"
            value={form.values.email}
            size="md"
            radius="md"
            placeholder="Email"
            className="border px-3 rounded-lg border-gray-400 focus:ring-2"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            variant="unstyled"
            value={form.values.password}
            size="md"
            radius="md"
            placeholder="Password"
            className="border px-3 rounded-lg border-gray-400 focus:ring-2"
            {...form.getInputProps('password')}
          />
          <Button type="submit" variant="gradient" radius="md">
            Login
          </Button>
          <div className="text-center">Don't have an account? <Link to="/register" className="text-[#32b9a9] hover:underline">Register</Link></div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
