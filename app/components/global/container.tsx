import { Div }        from '@/components/canggu/block'
import { classNames } from '@/components/utility'

export default function Container({ children, className, ...props }: { children : React.ReactNode, className? : string }) {
    return (
        <Div className={classNames('mx-auto flex max-w-screen-2xl p-4 md:p-6 lg:p-8', className)} {...props}>
            {children}
        </Div>
    )
}
