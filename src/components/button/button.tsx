'use client'

import React from "react";
import "./styles.scss";

interface IButton {
  onClick?: any;
  children: any;
  withouBg?: boolean
}

function Button({ onClick, withouBg = false, children }: IButton) {
  return <button onClick={() => onClick()} className={`button ${withouBg ? 'withouBg' : ''}`}>{children}</button>;
}

export default Button;
