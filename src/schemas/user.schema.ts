import { z } from "zod";

export const UserSchema = z.object({
    id: z.number(),
    username: z.string().min(3),
    email: z.string().email(),
    age: z.number().int().min(13).optional()
});

export type User = z.infer<typeof UserSchema>;