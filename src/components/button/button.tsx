'use client'

import React, { ButtonHTMLAttributes } from "react";
import "./styles.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLLIElement> {
  onClick?: any;
  children: any;
  withouBg?: boolean
}

function Button({ onClick, withouBg = false, className, children }: IButton) {
  return <button onClick={() => onClick()} className={`button ${withouBg ? 'withouBg' : ''} ${className}`}>{children}</button>;
}

export default Button;
