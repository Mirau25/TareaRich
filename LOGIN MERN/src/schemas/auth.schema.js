import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is a required field"
    }),
    email : z.string({
        required_error: "Email address is a required field",
    }).email({
        message: 'Invalid Email Addres'
    }),
    password: z.string({ 
        required_error: 'password is required field',
    }).min(6, {
        message: 'Password must be at least 6 characteres long.'
    })
});

export const loginSchema = z.object({

    email : z.string({
        required_error: "Email address is a required field",
    }).email({
        message: 'Invalid Email Addres'
    }),
    password: z.string({ 
        required_error: 'password is required field',
    }).min(6, {
        message: 'Password must be at least 6 characteres long.'
    })
})

