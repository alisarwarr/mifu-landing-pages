//NEXTJS
import { Sora } from '@next/font/google';


/* NEXTJS font globally */
const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora'
});


export default sora.variable;
//https://nextjs.org/docs/basic-features/font-optimization