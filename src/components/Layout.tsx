import React from 'react';

interface LayoutProps {
    children: React.ReactNode; 
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <div style={{ minHeight: '100vh', width: '100%' }}>
            {children}
        </div>
    );
};
export default Layout;