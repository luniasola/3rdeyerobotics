import Image from 'next/image'

import { Div }                from '@/components/canggu/block'
import { Separator }          from '@/components/canggu/separator'
import { Heading2, Heading6 } from '@/components/canggu/text'
import { classNames }         from '@/components/utility'

export const Heading = ({ text, appearance, separator = true, className }: { text : string, appearance? : 'primary' | 'white', separator? : boolean, className? : string }) => {
    return (
        <Div className={classNames('flex flex-col space-y-3', className)}>
            <Heading2 className={classNames('font-semibold', appearance === 'primary' ? 'text-black' : 'text-white')}>{text}</Heading2>
            {separator && <Separator className={classNames('h-1.5 w-16', appearance === 'primary' ? 'bg-primary' : 'bg-white')} />}
        </Div>
    )
}

export const Chip = ({ text, appearance, className }: { text? : string, appearance? : 'primary' | 'white', className? : string }) => {
    return (
        <Div className={classNames('mt-2.5 flex flex-row items-center gap-4', className)}>
            <Image alt={'3rd Eye Robotics Visual Brand, Glyph'} className={'w-5'} height={125} src={'assets/static/global/brand/3rdeyerobotics/glyph.svg'} width={125} priority />
            {text && <Heading6 className={classNames('text-sm font-semibold uppercase', appearance === 'primary' ? 'text-primary' : 'text-white')}>{text}</Heading6>}
        </Div>
    )
}
