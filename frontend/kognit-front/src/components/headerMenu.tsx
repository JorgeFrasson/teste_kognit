"use client";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsBell } from 'react-icons/bs';
import { useState } from 'react';

export interface HeaderMenuProps {
    notifications: {
        id: number;
        title: string;
        body: string;
    }[];
}

export default function HeaderMenu({notifications}: HeaderMenuProps){
    const [status, setStatus] = useState(false);
    const [notificationList, setNotificationList] = useState(notifications)

    const handleNotificationClick = () => {
        if(status){
            setStatus(false);
        } else {
            setStatus(true);
        }
    }

    const handleClean = () => {
        setNotificationList([]);
    }

    return (
        <div className="header-menu flex-row width-100 align-items-center space-between">
            <div className="left-buttons">
                <GiHamburgerMenu 
                style={{color: "#00000", cursor: "pointer"}} 
                size={18}/>
            </div>
            <div className="right-buttons flex-row gap-8 align-items-center">
                <div className="dropdown">
                    <div className="dropbtn notification flex-row align-items-center" onClick={() => handleNotificationClick()}>
                        <BsBell 
                        style={{color: "#00000", cursor: "pointer"}} 
                        size={18}/>
                        <div className="count-circle blue" style={{display: (notificationList.length === 0 ? "none": "flex")}}>
                            {notifications.length}
                        </div>
                        <div className={"dropdown-content" + (status ? " show" : "")}>
                            {
                                notificationList && notificationList.map((notification, key) => {
                                    return (
                                        <a href="#" key={key}>
                                            <div className="notification-title">
                                                {notification.title.slice(0, 16) + "..."}
                                            </div>
                                            <div className="notification-body">
                                                {notification.body.slice(0, 30) + "..."}
                                            </div>
                                        </a>
                                    )
                                })
                            }
                            {
                                notificationList.length === 0 && 
                                <span className="nothing-to-read">
                                    Sem notificações por enquanto
                                </span>
                            }
                            <div className="clean-bar">
                                <button className="clean-button" onClick={() => handleClean()}>
                                    Limpar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}