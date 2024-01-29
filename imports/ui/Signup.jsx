import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        Meteor.call("users.signup", { email, role, password }, (error) => {
            if (error) {
                console.error("Error creating user:", error.reason);
            } else {
                console.log("User created successfully");
                localStorage.setItem("role", role);
                localStorage.setItem("email", email)
                navigate("/");
            }
        });
    };
    console.log(role)
    return (
        <div className="flex h-dvh justify-center items-center">
            <form
                className="flex flex-col bg-gray-500 rounded-lg w-80 h-80 justify-center items-center"
                onSubmit={(e) => handleSubmit(e)}
            >
                <h2 className="text-center text-2xl font-semibold">Signup</h2>
                <input
                    className="my-2 px-4 py-2"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="my-2 px-4 py-2"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <select
                    className="my-2 px-4 py-2"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="Admin">Admin</option>
                    <option value="Borrower">Borrower</option>
                    <option value="Lender">Lender</option>
                </select>
                <div className="mt-3 flex justify-between gap-x-5 items-center">
                    <button
                        type="submit"
                        className="bg-black text-white p-3 rounded-lg"
                    >
                        Signup
                    </button>
                    <Link className="text-blue-600 underline"
                        to="/login">Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;