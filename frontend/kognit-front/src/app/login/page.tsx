"use client";
import Image from "next/image"
import styles from "./styles.module.css"
import Input from "@/components/input"
import { useState } from "react";
import { redirect, usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const receivePassword = (value: string) => {
        setPassword(value);
    }

    const receiveUsername = (value: string) => {
        setUsername(value);
    }

    const authenticateUser = (username: string, password: string) => {
        if(username && password){
            router.push('/dashboard')
        }
    }

    return (
        <>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="Kognit logo" width={200} height={100}/>
                </div>
                <form className={styles.login} action="" method="post">
                    <Input sendValue={receiveUsername} id="username" label="Usuário" name="username" type="text" required={true}/>
                    <Input sendValue={receivePassword} id="password" label="Senha" name="password" type="password" required={true}/>
                    <button type="submit" className={styles["submit-button"]} onClick={() => authenticateUser(username, password)}>
                        Entrar
                    </button>
                </form>
            </div>
        </>
    )
}