import { useState } from 'react';

function HomeHeader() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
        <div className="sticky top-0 w-full bg-blue-500 flex items-center gap-4 py-6 px-4 shadow">
            <div onClick={() => setSidebarOpen(true)}>
                <svg className="w-[25px] h-[25px] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </div>
            <h1 className="text-xl font-semibold text-white">MANTRAM SESONTENGAN</h1>
        </div>
        <div className={`fixed top-0 left-0 w-screen h-screen transition-all flex ${isSidebarOpen ? '' : '-translate-x-[100vw]'}`}>
            <div className="w-[80vw] h-screen bg-white shadow-2xl"></div>
            <div className="flex-1" onClick={() => setSidebarOpen(false)}></div>
        </div>
        </>
    );
}

export default HomeHeader;