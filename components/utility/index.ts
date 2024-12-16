import { clsx, type ClassValue } from 'clsx'
import { twMerge }               from 'tailwind-merge'

export const classNames = (...args: ClassValue[]) => twMerge(clsx(args))

/** @ts-expect-error: suppressing null check since the meta tag is guaranteed to be present in the HTML */
export const viewport = () => document.querySelector<HTMLMetaElement>('meta[name=viewport]').content = 'width=' + (screen.width < 470 ? 470 : 'device-width') + ', initial-scale=' + (screen.width < 470 ? screen.width / 470 : 1.0) + ', minimum-scale=' + (screen.width < 470 ? screen.width / 470 : 1.0) + ', maximum-scale=1, user-scalable=0'
