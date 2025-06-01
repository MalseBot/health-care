"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signInSchema } from "@/lib/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


const SignIn = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 p-5 items-center flex flex-col rounded-2xl bg-accent shadow-2xl">
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

export default SignIn