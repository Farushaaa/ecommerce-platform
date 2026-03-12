import { Outlet } from "react-router-dom"
import NavbarComponent from "../../pages/HomePage/components/NavbarComponent.tsx";


const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">

            <NavbarComponent/>

            <main className="flex-1 container mx-auto p-4">
                <Outlet />
            </main>

        </div>
    )
}

export default MainLayout