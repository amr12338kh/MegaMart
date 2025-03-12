"use client";

import * as z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "./ui/input";
import { Search, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";

const formSchema = z.object({
  input: z.string().min(2, "Search term must be at least 2 characters").max(50),
});

const SearchBar = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();

        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.input.trim().length >= 2) {
      setIsLoading(true);
      router.push(`/search/${encodeURIComponent(values.input.trim())}`);
      setTimeout(() => {
        form.reset();
        setIsLoading(false);
      }, 500);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex items-center transition-all duration-200 rounded-full"
      >
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="relative flex items-center w-full">
                  <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    {...field}
                    ref={inputRef}
                    className="pl-10 pr-12 py-5 rounded-full bg-background"
                    placeholder="Search Products..."
                    disabled={isLoading}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="sm"
          className="absolute right-1.5 rounded-full h-8 px-3 hover:bg-primary/90"
          disabled={form.watch("input").length < 2 || isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-1 animate-spin" />
              <span>Searching...</span>
            </>
          ) : (
            "Search"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
