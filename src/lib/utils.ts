// import type { ClassValue } from 'clsx';
// import clsx from 'clsx';
// import { twMerge as tailwindMerge } from 'tailwind-merge';

// export function cn(...inputs: ClassValue[]) {
//     return twMerge(clsx(inputs));
// }
// export const  baseUrl = "https://debate-arena-backend-five.vercel.app/api/v1/" 
// function twMerge(arg0: any) {
//     return tailwindMerge(arg0);
// }


import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const baseUrl = "https://debate-arena-backend-five.vercel.app/api/v1/";