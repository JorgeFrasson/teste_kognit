"use client";
import { log } from "console";
import React from "react";

export interface InputProps {
    id: string;
    name: string;
    label: string;
    type: string;
    sendValue: any;
    required: boolean;
}

export default function Input({id, name, label, type, sendValue, required}: InputProps){
    const [value, setValue] = React.useState("");

    const handleInputChange = (value: string) => {
        setValue(value);
        sendValue(value);
    }

    return (
        <>
            <div className="input">
                <label htmlFor={id} className={value && 'filled'}>
                    {label}
                </label>
                <input id="input" type={type} name={name} onChange={(e: any) => handleInputChange(e.target.value)} required={required}/>
            </div>
        </>
    )
}