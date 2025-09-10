'use server';

import { StrictMode } from 'react';
import "@scottish-government/design-system/dist/css/design-system.css";
import "./app.css";
import "./highlight.css";

import useTracking from '@scottish-government/designsystem-react/src/hooks/useTracking';

export const metadata = {
    title: "SG Design System React",
    description: "A React implementation of the Scottish Government Design System",
};

type LayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
    useTracking();

    return (
        <StrictMode>

            {children}
        </StrictMode>
    );
}
