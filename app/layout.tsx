import {ReactNode} from "react";
import {Metadata} from "next";

export const metadata:Metadata={
    title:"App-router",
    description:"App-router",
}

export  default  function RootLayout({children}:{children:ReactNode}) {
    return(
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}