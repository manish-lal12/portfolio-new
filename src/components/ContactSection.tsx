import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "abdb203d-2798-4dbe-a0fa-f78c77d01dc5");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      console.log(formData);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/manish-lal12", name: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/manish00110011/",
      name: "LinkedIn",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/0_manish_",
      name: "Twitter",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info & Socials */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-white">Let's Connect</h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear
              from you. Fill out the form or connect with me through my social
              channels.
            </p>
            <div className="space-y-4 pt-4">
              <a
                href="mailto:manishlal2274@gmail.com"
                className="inline-flex items-center gap-3 text-lg text-slate-300 hover:text-white transition-colors group"
              >
                <CiMail className="h-6 w-6 text-cyan-300" />
                <span>manishlal2274@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300"
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-800">
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-lg opacity-20"></div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="relative space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className="bg-slate-800/50 border-slate-700 text-white focus:border-cyan-400 h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="john.doe@email.com"
                          className="bg-slate-800/50 border-slate-700 text-white focus:border-cyan-400 h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Let's build something amazing together..."
                          className="bg-slate-800/50 border-slate-700 text-white focus:border-cyan-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 transition-opacity duration-300 h-12 text-base"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <IoIosSend className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
