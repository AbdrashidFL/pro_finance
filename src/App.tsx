import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './containers/Layout.tsx';
import { Profile } from './containers/Profile/Profile.tsx';

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index path="/" element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
