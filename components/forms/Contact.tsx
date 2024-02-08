"use client"

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"

const formSchema = z.object({
  user_name: z.string().min(2, {
    message: "Please enter your name"
  }),
  user_last_name: z.string(),
  user_country: z.string().min(2, {
    message: "Please enter your country"
  }),
  user_email: z.string().email({
    message: "Make sure your email is valid"
  }),
  message: z.string().min(1, {
    message: "Please write your message"
  }),
})

const Contact = () => {

  let formRef = useRef<HTMLFormElement | null>(null)
  const [ isSent, setIsSent ] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_last_name: "",
      user_country: "",
      user_email: "",
      message: "",
    },
  })
 
  async function onSubmit() {
    try {
      setIsSent(true)
      await emailjs.sendForm(
        `service_sn7r5ft`,
        `template_4bv2k4w`,
        formRef.current!,
        `BmFq-FHz4XeMcF8W8`
      );
      toast({
        description: "Your message was sent successfully.",
      }); 
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSent(false);
    } finally {
      setIsSent(false);
    }
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="rounded-lg border bg-transparent text-card-foreground p-8">
        <Form {...form}>
          <form 
            ref={formRef} 
            className="grid gap-2"
            onSubmit={form.handleSubmit(onSubmit)} 
          >
            <span className="font-semibold sm:text-3xl text-xl xs:text-2xl">
              Get in touch
            </span>
            <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-3" />
            <div className='grid grid-cols-2 gap-2'>
              <FormField
                control={form.control}
                name="user_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Name *" 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="user_last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Last Name (optional)" 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="user_country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Country *" 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="user_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Email *" 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Message *" 
                      {...field} 
                      rows={8}
                      cols={10} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {!isSent ? (
              <Button className='mt-4' type="submit">Submit</Button>
            ) : (
              <Button disabled className='mt-4'>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
              </Button>
            )}
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Contact