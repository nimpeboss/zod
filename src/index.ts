import { UserSchema } from "./schemas/user.schema";

const data = {
    id: 1,
    username: "al21",
    email: "al@test.com",
    age: 13
};

const result = UserSchema.safeParse(data);

if (!result.success) {
    console.error("Validation failed:", result.error.format());
} else {
    console.log("Valid user:", result.data);
}