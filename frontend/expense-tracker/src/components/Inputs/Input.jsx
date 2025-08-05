import React from 'react'
import { useState } from "react";
{/* Importing icons used to show/hide passwords, Eye - when password is visible, Slash - when password is hidden*/}
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"

const Input = ({ value, onChange, label, placeholder, type }) => {
    {/* Local state that tracks if password should be visible, default is false (hidden) */}
    const [showPassword, setShowPassword] = useState(false);

    {/* Function toggles between true and false when the eye icon is clicked */}
    const toggleShowPassword = () => {
            setShowPassword(!showPassword);
        };
    return (
        <div>
            <label className="text-[13px] text-slate-800">{label}</label>

            {/* The box where people type in input, styling for it is in index.css */}
            <div className="input-box">
                {/* Styling for the space the input is being typed into */}
                <input
                    type= {type == 'password' ? showPassword ? 'text' : 'password' : type}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none" 
                    value={value}
                    onChange={(e) => onChange(e)}
                />

                {/* If else condition for the eye icon */}
                {type === "password" && (
                    <>
                        {showPassword ? (
                            <FaRegEye
                                size={22}
                                className="text-primary cursor-pointer"
                                onClick={() => toggleShowPassword()}
                            />
                        ) : (
                            <FaRegEyeSlash
                                size={22}
                                className="text-slate-400 cursor-pointer"
                                onClick={() => toggleShowPassword()}
                            />
                        )}
                    </>
                )}     
            </div>
        </div>
    )
}

export default Input
