"use client";
import { useState } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/formElements/input";
import { PasswordInput } from "@/components/formElements/passwordInput";

export default function Home() {
    const [formIsValid, setFormIsValid] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
            <article className="md:w-6/12">
                <h1 className="font-bold text-3xl mb-4">Sign up</h1>
                <p className="font-semibold mb-8">
                    Already have an account? <a href="#">Login</a>
                </p>

                <section className="bg-white rounded-lg border-2 p-8 ">
                    <form className="flex flex-col gap-4">
                        <Input
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="your.email@address.com"
                        />
                        <PasswordInput
                            name="password"
                            label="Password"
                            passwordLength={8}
                            isValidField={(valid: boolean) =>
                                setFormIsValid(valid)
                            }
                        />
                        <Button type="submit" isDisabled={!formIsValid}>
                            Next
                        </Button>
                    </form>
                </section>
            </article>
        </main>
    );
}
