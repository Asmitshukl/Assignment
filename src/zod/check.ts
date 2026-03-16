import * as z from "zod"

const passwordSchema = z.string()
  .min(8, "Password must be at least 8 characters")
  .max(32, "Password must be less than 32 characters")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character")

export const UserValidataion=z.object({
    name:z.string(),
    email: z.email({
    message: "Invalid email address",
    }),
    password:passwordSchema
})

export const LoginValidation=z.object({
    email: z.email("Invalid email address"),
    password:passwordSchema
})