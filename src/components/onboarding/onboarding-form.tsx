"use client";

import { userSchema, UserSchemaType } from "@/schemas/user/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { countryList } from "@/utils/getFlag";
import { IndustryTypeList } from "@/utils/industryTypeList";
import { roleList } from "@/utils/roleList";
import Image from "next/image";
import { Textarea } from "../ui/textarea";

type Props = {
  name: string;
  email: string;
  image?: string | null;
};
export const OnboardingForm = ({ email, name, image }: Props) => {
  const form = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      about: "",
      country: "",
      email,
      industryType: "",
      name,
      role: "",
      image: image || "",
    },
  });

  const onSubmit = async (data: UserSchemaType) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card>
        <CardHeader>Welcome to TaskManager</CardHeader>
        <CardDescription className="px-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardDescription>
        <CardContent className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <Input placeholder="Enter full name" {...field} />
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {countryList.map((m) => {
                            return (
                              <SelectItem value={m.name} key={m.name}>
                                <div className="flex flex-row items-center gap-6">
                                  <Image
                                    src={m.flag}
                                    alt={m.name}
                                    className="w-4 h-3"
                                  />
                                  <p>{m.name}</p>
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="industryType"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>IndustryType</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="w-full">
                            <SelectTrigger>
                              <SelectValue placeholder="Select IndustryType" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {IndustryTypeList.map((i) => {
                              return (
                                <SelectItem value={i} key={i}>
                                  {i}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="w-full">
                            <SelectTrigger>
                              <SelectValue placeholder="Select Role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {roleList.map((r) => {
                              return (
                                <SelectItem value={r} key={r}>
                                  {r}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>

              <FormField
                control={form.control}
                name="about"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>About</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="resize-none"
                          placeholder="Tell us about yourself"
                        ></Textarea>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full"
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
