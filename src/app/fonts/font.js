import { Poppins, Montserrat, Island_Moments,} from 'next/font/google'

export const poppins = Poppins({ subsets: ['latin'], display: 'swap', variable: '--font-poppins', weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], display: 'swap' })
export const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], display: 'swap' })
export const island = Island_Moments({
    subsets:['latin'],
    variable: '--font-island',
    weight: '400',
    display: 'swap',
})
