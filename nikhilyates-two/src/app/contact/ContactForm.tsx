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
import arrowTurnDownLeft from '../../../public/assets/svgs/hero/ArrowTurnDownLeft.svg';
import Image from 'next/image';


const formSchema = z.object({
    name: z.string()
        .min(2, { message: "enter a name" })
        .max(50)
        .nonempty({ message: "name is required" }),
    email: z.string()
        .email({ message: "enter a valid email address" })
        .nonempty({ message: "email is required" }),
    message: z.string()
        .min(10, { message: 'no spam please. how can i help?' })
        .max(500)
        .nonempty({ message: "message is required" }),
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
        <div id='contact' className='bg-zinc-950 h-auto w-screen p-16 pt-24 flex flex-col gap-0 lg:gap-8'>
            <div className='w-full flex flex-row justify-center'>
                <h1 className='scroll-m-20 text-6xl font-extralight tracking-tight 2xl:text-8xl text-white/20'>contact</h1>
            </div>
            <div className="w-full flex flex-row justify-center">
                <div className="w-full lg:w-[75%] 2xl:w-[50%]">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="rounded-2xl pt-8 flex flex-col gap-2 2xl:gap-4">
                                
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="name" 
                                                    type='text' 
                                                    placeholder="your name" 
                                                    className="bg-zinc-950 placeholder:text-gray-400 border border-gray-400 text-zinc-100"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                why would you even want to enter an alias
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">email</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    id="email"
                                                    type='email' 
                                                    placeholder="your@emailor.whatever" 
                                                    className="bg-zinc-950 placeholder:text-gray-400 border border-gray-400 text-zinc-100"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                a real one so i can get back to you if i feel like it
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">message</FormLabel>
                                            <FormControl>
                                                <Textarea 
                                                    placeholder="what do you want to chat about?" 
                                                    id='message-2'
                                                    className="bg-zinc-950 min-h-[20rem] placeholder:text-gray-400 border border-gray-400 text-zinc-100"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                i'll report you to csis/cia if you spam me i swear
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className='w-full flex flex-row justify-center gap-4'>
                                    <Button type="submit" variant={'secondary'}>
                                        <b>Submit</b>
                                        <Image priority src={arrowTurnDownLeft} alt='arrow-turn-down-left' className='h-5 w-5'/>
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}




