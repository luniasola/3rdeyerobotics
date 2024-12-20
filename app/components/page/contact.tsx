import { Send } from 'lucide-react'

import Container                        from '@/app/components/global/container'
import { Heading, Chip }                from '@/app/components/global/element'
import { Section, Div, Span }           from '@/components/canggu/block'
import { Button }                       from '@/components/canggu/button'
import { Form, Input, Label, Textarea } from '@/components/canggu/form'
import { Heading3, Paragraph }          from '@/components/canggu/text'

export default function Industry() {
    return (
        <Section className={'bg-[url(/assets/static/global/pattern/line/black.svg)] bg-cover py-10'} id={'contact'}>
            <Container className={'flex-col'}>
                <Div className={'relative grid items-start gap-4 md:grid-cols-2'}>
                    <Chip appearance={'white'} className={''} text={'Contact Us'} />
                    <Heading appearance={'white'} className={'text-xl font-light'} separator={false} text={'Get in Touch with 3rd Eye Robotics'} />
                    <Chip appearance={'primary'} className={'absolute right-0'} />
                </Div>

                <Div className={'relative grid items-start gap-4 md:grid-cols-2'}>
                    <Div className={'my-4 flex h-full items-end gap-4 align-bottom md:mt-0'}>
                        <Div className={'flex flex-col gap-2'}>
                            <Heading3 className={'font-semibold text-white'}>Contact Information</Heading3>
                            <Paragraph className={'text-white'}>Denver, CO, USA</Paragraph>
                            <Paragraph className={'text-white'}>+1 720-649-0270</Paragraph>
                            <Paragraph className={'text-white'}>info@3rdeyerobotics.com</Paragraph>
                        </Div>
                    </Div>

                    <Div className={'relative top-12 flex h-full flex-col gap-8 py-12'}>
                        <Heading3 className={'text-white'}>Send Us a Message</Heading3>

                        <Form className={'flex flex-col gap-6'}>
                            <Div>
                                <Label className={'text-white'} htmlFor={'name'}>Fullname</Label>
                                <Input className={'border-0 bg-black text-white'} id={'name'} name={'name'} required={true} type={'text'} />
                            </Div>

                            <Div>
                                <Label className={'text-white'} htmlFor={'email'}>Email Address</Label>
                                <Input className={'border-0 bg-black text-white'} id={'email'} name={'email'} required={true} type={'email'} />
                            </Div>

                            <Div>
                                <Label className={'text-white'} htmlFor={'company'}>Company</Label>
                                <Input className={'border-0 bg-black text-white'} id={'company'} name={'company'} required={true} type={'email'} />
                            </Div>

                            <Div>
                                <Label className={'text-white'} htmlFor={'message'}>Message</Label>
                                <Textarea className={'border-0 bg-black text-white'} id={'message'} name={'message'} required={true} rows={6}></Textarea>
                            </Div>

                            <Div>
                                <Button appearance={'primary'} className={'group cursor-pointer'} size={'2xl'}>
                                    <Send className={'-ml-5 mr-5 transition-transform duration-300 group-hover:scale-125 group-hover:fill-white'} />
                                    <Span>Submit</Span>
                                </Button>
                            </Div>
                        </Form>
                    </Div>
                </Div>
            </Container>
        </Section>
    )
}
