import * as z from "zod";
export declare const UserValidataion: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export declare const LoginValidation: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export declare const tasksvalidattion: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodEnum<{
        Done: "Done";
        "Not Done": "Not Done";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=check.d.ts.map