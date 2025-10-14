"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import CustomInputField from "../ui/custom-input-field";
import CustomButton from "../ui/custom-button";
import { FormFieldType } from "@/src/types";
import AuthLayout from "./Layout";
import { SignUpFormData, SignUpFormSchema } from "@/src/schema/signup";
import { Checkbox } from "../ui/checkbox";

const SignUp: React.FC = () => {
  const router = useRouter();
  const isPending = false;

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      pwd: "",
      name: "",
      cpwd: "",
      agreeToTerms: false,
    },
  });

  const handleSubmitForm = (values: SignUpFormData) => {
    console.log(values);
    router.push("/dashboard");
  };

  return (
    <AuthLayout
      title="Create Your Account"
      description="Get started with your affiliate management platform in just a few steps."
      enableFooter
      footerLink="/auth/sign-in"
      footerText={`Already have an account?`}
      footerLinkTitle="Log in"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="flex w-full flex-col gap-4 mt-6"
        >
          <CustomInputField
            name="name"
            label="Company Name"
            control={form.control}
            fieldType={FormFieldType.EMAIL}
            placeholder="Enter your full name..."
            disabled={isPending}
          />
          <CustomInputField
            name="email"
            label="Business Email"
            control={form.control}
            fieldType={FormFieldType.EMAIL}
            placeholder="your@company.com"
            disabled={isPending}
          />
          <CustomInputField
            name="pwd"
            label="Password *"
            control={form.control}
            fieldType={FormFieldType.PASSWORD}
            placeholder="Create a strong password"
            disabled={isPending}
          />
          <CustomInputField
            name="cpwd"
            label="Confirm Password"
            control={form.control}
            fieldType={FormFieldType.PASSWORD}
            placeholder="Confirm your new password"
            disabled={isPending}
          />
          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="text-sm leading-none text-muted-foreground">
                  <FormLabel>
                    I agree to the{" "}
                    <a
                      href="/terms"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms and Conditions
                    </a>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <CustomButton
            disabled={isPending}
            isLoading={isPending}
            title="Sign in"
          />
        </form>
      </Form>
    </AuthLayout>
  );
};

export default SignUp;
