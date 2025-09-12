import React, { HTMLAttributes } from "react";
import Image from "next/image";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import { twMerge } from "tailwind-merge";

function Avatar(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div className={twMerge("size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900", className)} {...otherProps}>{children}</div>
    );
}

export default Avatar;
