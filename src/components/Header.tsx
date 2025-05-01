"use client";

import clsx from "clsx";

export default function Header() {
  return (
    <h1
      className={clsx(
        true && "text-6xl",
        { "text-blue-500": false },
        "hover:text-blue-50",
        "hover:bg-blue-500",
        "transition",
        "duration-1000"
      )}
      onClick={() => console.log("davi")}
    >
      Olá, mundo
    </h1>
  );
}
