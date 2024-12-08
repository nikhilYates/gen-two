"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


const formSchema = z.object({
    name: z.string().min(2, {
        message: "enter a name"
    }).max(50),
    email: z.string().email({
        message: "enter a valid email address"
    }),
    message: z.string().min(10, {
        message: 'no spam please. how can i help?'
    }
    ).max(500),
});

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

    }

    return (
        <div id='experience' className='bg-zinc-950 h-screen w-screen p-16 flex flex-col gap-8'>
            <div className='w-full flex flex-col gap-3'>
                <h1 className='scroll-m-20 text-4xl font-extralight tracking-tight lg:text-8xl text-white'>contact</h1>
            </div>
            <div className="w-full flex flex-row justify-center">
                <div className="w-[50%]">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <div className="rounded-2xl p-8 border border-gray-400 transition-all 
                                    duration-1000 hover:border-white">
                                    <FormItem>
                                        <FormControl>
                                            <Input 
                                                type='text' 
                                                placeholder="your name" 
                                                className="bg-black text-white placeholder:text-gray-400"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            name
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>

                                    <FormItem>
                                        <FormControl>
                                            <Input 
                                                type='email' 
                                                placeholder="your@emailor.whatever" 
                                                className="bg-zinc-950 text-white placeholder:text-gray-400"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            email
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>

                                    <FormItem>
                                        <FormLabel className="text-white">get as detailed as you want here btw</FormLabel>
                                        <FormControl>
                                            <Textarea 
                                                placeholder="what do you want to chat about?" 
                                                id='message-2'
                                                className="bg-zinc-950 text-white placeholder:text-gray-400"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            message
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                    <Button type="submit">Submit</Button>
                                </div>
                            )}
                            />
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}




