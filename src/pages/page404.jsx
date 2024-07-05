import React from 'react';
import {CustomButton} from "../components/common/CustomButton.jsx";

const Page404 = () => {
    const handleReturn = () => {
        console.log('return to home')
    }
    return (
        <div className="min-h-screen flex flex-grow items-center justify-center">
            <div className="rounded-2xl bg-white p-8 text-center shadow-custom-lg">
                <h1 className="mb-4 text-6xl font-bold">404</h1>
                <p className="text-gray-600 text-custom-lg">Oops ! La page que vous cherchez n'a pas pu être trouvée.</p>
                <div className="animate-bounce mt-4 mb-1">
                    <svg className="mx-auto h-14 w-14 text-custom-gray" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </div>
                <CustomButton onClick={handleReturn} width={'none'}>
                    Retourner à l'accueil
                </CustomButton>
            </div>
        </div>
    );
};

export default Page404;