import React from 'react';

export default function Header () {
    return (
        <>
            <div className="flex items-center gap-4 p-4 rounded-lg mt-3">
                <div className="ml-auto">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.86667V8.64167" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M17.1583 13.1417C17.7667 14.1583 17.2833 15.475 16.1583 15.85C12.175 17.175 7.86666 17.175 3.88333 15.85C2.68333 15.45 2.225 14.2333 2.88333 13.1417L3.94166 11.375C4.23333 10.8917 4.46666 10.0333 4.46666 9.47499V7.72499C4.46666 4.64999 6.95 2.16666 10.0167 2.16666C13.0667 2.16666 15.5667 4.66666 15.5667 7.71666V9.46666C15.5667 9.61666 15.5833 9.78332 15.6083 9.95832" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M12.775 16.1833C12.775 17.7083 11.525 18.9583 10 18.9583C9.24167 18.9583 8.54167 18.6417 8.04167 18.1417C7.54167 17.6417 7.22501 16.9417 7.22501 16.1833" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"/>
                </svg>
                </div>   
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-black text-2xl font-bold">
                    SS 
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-800">Saomething Sokle</span>
                    <span className="text-gray-500">sokle@gmail.com</span>
                </div>
                <div class="ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                </div>
        </>
    )
}