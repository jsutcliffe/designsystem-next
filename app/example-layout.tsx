import RootLayout from './root-layout';

type LayoutProps = {
    children: React.ReactNode
}

export default function PageLayout({ children }: LayoutProps) {
    return (
        <RootLayout>
            <div style={{ overflow: 'auto' }}>
                <div id="example-inner" style={{ padding: '1rem' }}>
                    {children}
                </div>
            </div>
        </RootLayout>
    );
}
