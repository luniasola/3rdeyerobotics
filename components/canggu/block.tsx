import * as React from 'react'

type PropsHTML       = React.HTMLProps<HTMLHtmlElement>
type PropsBody       = React.HTMLProps<HTMLBodyElement>
type PropsDiv        = React.HTMLProps<HTMLDivElement>
type PropsSpan       = React.HTMLProps<HTMLSpanElement>
type PropsMain       = React.HTMLProps<HTMLElement>
type PropsHeader     = React.HTMLProps<HTMLElement>
type PropsSection    = React.HTMLProps<HTMLElement>
type PropsNav        = React.HTMLProps<HTMLElement>
type PropsAside      = React.HTMLProps<HTMLElement>
type PropsFooter     = React.HTMLProps<HTMLElement>
type PropsArticle    = React.HTMLProps<HTMLElement>
type PropsFigure     = React.HTMLProps<HTMLElement>
type PropsFigcaption = React.HTMLProps<HTMLElement>
type PropsMark       = React.HTMLProps<HTMLElement>
type PropsSummary    = React.HTMLProps<HTMLElement>

export const HTML       = React.forwardRef<HTMLHtmlElement, PropsHTML>(({ ...props }, ref)   => <html ref={ref} {...props} />)
export const Body       = React.forwardRef<HTMLBodyElement, PropsBody>(({ ...props }, ref)   => <body ref={ref} {...props} />)
export const Div        = React.forwardRef<HTMLDivElement, PropsDiv>(({ ...props }, ref)     => <div ref={ref} {...props} />)
export const Span       = React.forwardRef<HTMLSpanElement, PropsSpan>(({ ...props }, ref)   => <span ref={ref} {...props} />)
export const Main       = React.forwardRef<HTMLElement, PropsMain>(({ ...props }, ref)       => <main ref={ref} {...props} />)
export const Header     = React.forwardRef<HTMLElement, PropsHeader>(({ ...props }, ref)     => <header ref={ref} {...props} />)
export const Section    = React.forwardRef<HTMLElement, PropsSection>(({ ...props }, ref)    => <section ref={ref} {...props} />)
export const Nav        = React.forwardRef<HTMLElement, PropsNav>(({ ...props }, ref)        => <nav ref={ref} {...props} />)
export const Aside      = React.forwardRef<HTMLElement, PropsAside>(({ ...props }, ref)      => <aside ref={ref} {...props} />)
export const Footer     = React.forwardRef<HTMLElement, PropsFooter>(({ ...props }, ref)     => <footer ref={ref} {...props} />)
export const Article    = React.forwardRef<HTMLElement, PropsArticle>(({ ...props }, ref)    => <article ref={ref} {...props} />)
export const Figure     = React.forwardRef<HTMLElement, PropsFigure>(({ ...props }, ref)     => <figure ref={ref} {...props} />)
export const Figcaption = React.forwardRef<HTMLElement, PropsFigcaption>(({ ...props }, ref) => <figcaption ref={ref} {...props} />)
export const Mark       = React.forwardRef<HTMLElement, PropsMark>(({ ...props }, ref)       => <mark ref={ref} {...props} />)
export const Summary    = React.forwardRef<HTMLElement, PropsSummary>(({ ...props }, ref)    => <summary ref={ref} {...props} />)

HTML.displayName       = 'HTML'
Body.displayName       = 'Body'
Div.displayName        = 'Div'
Span.displayName       = 'Span'
Main.displayName       = 'Main'
Header.displayName     = 'Header'
Section.displayName    = 'Section'
Nav.displayName        = 'Nav'
Aside.displayName      = 'Aside'
Footer.displayName     = 'Footer'
Article.displayName    = 'Article'
Figure.displayName     = 'Figure'
Figcaption.displayName = 'Figcaption'
Mark.displayName       = 'Mark'
Summary.displayName    = 'Summary'
