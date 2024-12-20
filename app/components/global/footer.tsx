import Container       from '@/app/components/global/container'
import { Chip }        from '@/app/components/global/element'
import { Footer, Div } from '@/components/canggu/block'
import { Heading5 }    from '@/components/canggu/text'

export default function GlobalFooter() {
    return (
        <Footer className={'bg-black-200 py-4'} id={'dealers'}>
            <Container className={'flex-col'}>
                <Div className={'relative grid grid-cols-1 items-center gap-4 md:grid-cols-2'}>
                    <Chip appearance={'white'} text={'AI at Work:  Where Vision Meets Safety'} />
                    <Heading5 className={'text-left text-base font-light text-white md:text-right'}>© 2024 3rd Eye Robotics</Heading5>
                </Div>
            </Container>
        </Footer>
    )
}
