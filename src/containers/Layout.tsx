import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <main
                style={{
                    marginBottom: '80px',
                    marginTop: '40px',
                }}
                className="main"
            >
                <Outlet />
            </main>
        </>
    );
};
