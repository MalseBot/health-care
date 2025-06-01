"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { signUpSchema } from "@/lib/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { redirect } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


const Signup = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    const { name, email, password } = values;

      const {data,error}= await authClient.signUp.email(
        {
          email,
          password,
          name,
          callbackURL: '/signin',
        },
        {
          onRequest: () => {
            toast.loading('Signing up...');
          },
          onSuccess: () => {
            form.reset();
            toast.success('Signed up successfully!');
            redirect('/signin');
          },
          onError: (ctx) => {
            toast.error(ctx.error.message);
          },
        }
      );
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 p-5 items-center flex flex-col rounded-2xl bg-accent shadow-2xl">
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input className="bg-background" placeholder="mohamed" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' className="bg-background" placeholder="mohamed@example.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="bg-background" placeholder="please enter a secure password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-1/2" type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default Signup