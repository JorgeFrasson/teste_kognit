"use client";
import HeaderMenu from "@/components/headerMenu";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css"
import Image from "next/image";
import Profile from "@/components/profile";
import { RiDashboardFill } from 'react-icons/ri';

export async function getNotification(userId: number){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
            method: "GET"
        });

        return response.json();
    } catch (error) {
        return error;
    }
}

export default async function Dashboard(){
    const notifications = await getNotification(1);
    const metrics = [];
    
    return (
        <div className={styles["dashboard"]}>
            <div className={styles["aside-menu"]}>
                <Profile
                email="jorge.frasson147@gmail.com"
                imagePath="/profile.png"
                name="Jorge Henrique"/>
                <div className={styles["navigate-menu"] + " flex-col gap-8 justify-content-center align-start"}>
                    <div className="navigate-item">Dashboard</div>
                    <div className="navigate-item">Extrato</div>
                    <div className="navigate-item">Métricas</div>
                    <div className="navigate-item">Agenda</div>
                </div>
            </div>
            <div className={styles["right-menu"]}>
                <div className={styles["header"]}>
                    <div className="menu width-100">
                        <HeaderMenu notifications={notifications}/>
                    </div>
                </div>
                <div className={styles["dashboard-content"]}>
                    <div className={styles["metrics"]}>
                    {
                        metrics.length > 0 ?
                        // Componentes de gráficos.
                        <></> :
                        <div className={styles["nothing-to-show"]}>
                            <RiDashboardFill size={100} />
                            Ainda não há nada para mostrarmos aqui.
                        </div>
                    }
                    </div>
                </div>
            </div>
            </div>
    )
}