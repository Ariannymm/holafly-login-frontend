import { useEffect, useState } from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import { useAuth } from "../Auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../Auth/constants";
import ButtonBase from "../Components/buttons/ButtonBase";
import type { AuthResponseError, AuthResponseSuccess } from "../Types/types";


export default function Login() {
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");

    const auth = useAuth();
    const goTo = useNavigate();

    useEffect( () => {
        localStorage.removeItem("user");
    }, []);

    function handleChange(e: React.ChangeEvent) {
        const { name, value } = e.target as HTMLInputElement;
        if (name === "email") {
          setEmail(value);
        }
        if (name === "password") {
          setPassword(value);
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrorResponse("");

        try {

            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })
              
            if (response.ok) {
                const json = await response.json() as AuthResponseSuccess;
                const { accessToken, user } = json;
                
                auth.saveUser(user);
                auth.saveToken(accessToken);

                goTo("/home");
            } else {
                const json = await response.json() as AuthResponseError;
                setErrorResponse(json.error);
                return;
            }

        } catch (error) {
            setErrorResponse("Invalid email or password");
        }  
    }
    
    if(auth.isAuthenticated) {
        return <Navigate to="/home" />;
    }

    return (
        <DefaultLayout>
            <div className="container max-w-md m-2 shadow-xl shadow-gray-300 rounded-xl flex flex-col justify-between gap-3">
                <form onSubmit={handleSubmit} className="px-6 py-8 flex flex-col justify-between gap-3">
                    <h1 className="text-lg text-gray-700 font-medium text-center">Log in</h1>
                    <div className="flex flex-col w-full">
                        <label className="ml-5 py-1 items-center text-gray-600 font-medium text-sm transition-all duration-200 ease-in-out">Email</label>
                        <input 
                            className="bg-transparent px-5 py-3 w-full border border-neutral-300 focus:border-neutral-400 rounded-xl outline-none text-sm text-black font-normal" 
                            placeholder="Enter your email"
                            name="email"
                            type="text" 
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col w-full mb-3">
                        <label className="ml-5 py-1 items-center text-gray-600 font-medium text-sm transition-all duration-200 ease-in-out">Password</label>
                        <input 
                            className="bg-transparent px-5 py-3 w-full border border-neutral-300 focus:border-neutral-400 rounded-xl outline-none text-sm text-black font-normal" 
                            placeholder="Enter your password" 
                            type="password" 
                            value={password}
                            name="password"
                            onChange={handleChange}
                        />
                    </div>
                    <ButtonBase className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white">Log in</ButtonBase>
                    {!!errorResponse && <div className="text-center text-xs text-red-500 font-medium">{errorResponse}</div>}
                </form>
            </div>
        </DefaultLayout>
    );
}