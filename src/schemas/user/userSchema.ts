import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required")
    .max(100, "Maximum is 100 character"),
  about: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  industryType: z.string().min(1, "Industry Type is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
  image: z.string().optional(),
});

export type UserSchemaType = z.infer<typeof userSchema>;
