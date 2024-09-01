"use client";

import {ThemeProvider as NextThemesProvider, useTheme} from "next-themes";

export function ThemeProviders({children}: { children: React.ReactNode }) {

    const theme = useTheme();

    return (
        <NextThemesProvider attribute="class" defaultTheme={theme.theme}>
            {children}
        </NextThemesProvider>
    )
}