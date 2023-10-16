"use client";

import React from "react";
import * as z from "zod";
import { formSchema } from "@/lib/formSchema";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SearchInput = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchterm: "",
    },
  });
  return (
    <section className="w-[60%] px-4 lg:px-32 pt-6">
      <Form {...form}>
        <form
          //   onSubmit={form.handleSubmit(onSubmit)}
          className="
        rounded-lg
        border
        w-full
p-3
        focus-within:shadow-sm
        grid
        grid-cols-12
        gap-2
      "
        >
          <FormField
            name="searchterm"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Input
                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={false}
                    placeholder="Enter a username"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            className="col-span-12 lg:col-span-2 w-full bg-devBlue text-pureWhite"
            type="submit"
            disabled={false}
            size="icon"
          >
            Search
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default SearchInput;
