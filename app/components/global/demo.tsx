import { ArrowRight } from 'lucide-react'

import { Heading }                                                                         from '@/app/components/global/element'
import { Div, Span }                                                                       from '@/components/canggu/block'
import { Button }                                                                          from '@/components/canggu/button'
import { DialogContent, DialogBody, DialogClose, DialogHeader, DialogFooter, DialogTitle } from '@/components/canggu/dialog'
import { Form, Input, Label, Textarea }                                                    from '@/components/canggu/form'

export default function Demo() {
    return (
        <DialogContent aria-describedby={''} className={'md:w-3/5'}>       
            <DialogHeader>
                <DialogTitle>
                    <Div className={'relative grid items-start gap-4 md:grid-cols-1 lg:grid-cols-2'}>
                        <Heading appearance={'primary'} className={'text-xl leading-normal'} separator={true} text={'Schedule Demo or Pilot'} />
                    </Div>
                </DialogTitle>
            </DialogHeader>

            <DialogBody className={'my-4 h-96 overflow-y-scroll'}>
                <Form className={'flex flex-col gap-6'}>
                    <Div>
                        <Label htmlFor={'name'}>Fullname</Label>
                        <Input id={'name'} name={'name'} required={true} type={'text'} />
                    </Div>

                    <Div>
                        <Label htmlFor={'email'}>Email Address</Label>
                        <Input id={'email'} name={'email'} required={true} type={'email'} />
                    </Div>

                    <Div>
                        <Label htmlFor={'occupation'}>Job Title (Optional)</Label>
                        <Input id={'occupation'} name={'occupation'} required={true} type={'email'} />
                    </Div>

                    <Div>
                        <Label htmlFor={'phone'}>Phone Number (Optional)</Label>
                        <Input id={'phone'} name={'phone'} required={true} type={'email'} />
                    </Div>

                    <Div>
                        <Label htmlFor={'company'}>Company Name</Label>
                        <Input id={'company'} name={'company'} required={true} type={'email'} />
                    </Div>

                    <Div>
                        <Label htmlFor={'message'}>Message/Notes</Label>
                        <Textarea id={'message'} name={'message'} required={true} rows={6}></Textarea>
                    </Div>
                </Form>
            </DialogBody>

            <DialogFooter className={'sm:justify-start'}>
                <DialogClose asChild>
                    <Button appearance={'primary'} className={'group cursor-pointer'} size={'2xl'}>
                        <ArrowRight className={'-ml-5 mr-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0'} />
                        <Span>Submit Request</Span>
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    )
}
