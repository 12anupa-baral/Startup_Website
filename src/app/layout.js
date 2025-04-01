import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";


const workSans =localFont({
  src:[
    {
      path:'./fonts/WorkSans-Black.ttf',
      weight:'900',
      style:'normal'

    },
    {
      path:'./fonts/WorkSans-Black.ttf',
      weight:'900',
      style:'normal'

    },
    {
      path:'./fonts/WorkSans-ExtraBold.ttf',
      weight:'800',
      style:'normal'

    },
    {
      path:'./fonts/WorkSans-Bold.ttf',
      weight:'700',
      style:'normal'

    },
    {
      path:'./fonts/WorkSans-SemiBold.ttf',
      weight:'600',
      style:'normal'

    },
    {
      path:'./fonts/WorkSans-Medium.ttf',
      weight:'500',
      style:'normal'

    },
    {
      path:'./fonts/WorkSans-Regular.ttf',
      weight:'400',
      style:'normal'

    },
    {
      path:'./fonts/WorkSans-Thin.ttf',
      weight:'200',
      style:'normal'

    },
    {
      path:'./fonts/WorkSans-ExtraLight.ttf',
      weight:'100',
      style:'normal'

    }
  ],
  variable:'--font-work-sans'
})

export const metadata ={
  title:'Wow thrift Shop',
  description:'Here we find best deals on second hand clothes'
}

export default function RootLayout({ children }) {
  <link href="/dist/styles.css" rel="stylesheet"></link>
  return (
    <html lang="en">
       <body className={`${workSans.variable} font-workSans`}>{children}</body>
       
    </html>
  );
}


