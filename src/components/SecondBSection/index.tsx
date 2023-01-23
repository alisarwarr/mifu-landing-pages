//REACTJS
import { ReactElement } from 'react';
//NEXTJS
import Image from 'next/image';
//IMAGES
import { blueshadowstar, brand_a, brand_b, brand_c, brand_d, brand_e, brand_f, brand_g, brand_h, brand_i, brand_j } from '../../images';
//MEDIA-QUERIES
import useMediaQueries from '../../utils/useMediaQueries';


function SecondBSection({
    heading
}: {
    heading: ReactElement;
}) {
    const {
        screen2030,
        screen1910,
        screen1710,
        screen1490,
        screen1100,
        screen900,
        screen896,
        screen878,
        screen868,
        screen808,
        screen768,
        screen600,
        screen550,
        screen450,
        screen409,
        screen380
    } = useMediaQueries();


    return (
        <div className={`!w-full ${screen768 ? `!mt-20 lg:!mt-40` : `!mt-4`} ${!screen600 ? (!screen550 ? (screen450 ? `!mb-11` : `!mb-9`) : `!mb-16`) : `!mb-24`} md:!flex md:!items-center`}>

            <div>
                <Image
                    src={blueshadowstar}
                    alt="blueshadowstar"
                />
            </div>


            <div className="!w-full !-mt-56 !ml-1 md:!-mt-20 md:!-ml-20 md:!flex md:items-center md:!justify-between">

                <p className={`!font-bold md:!-ml-3 lg:!-ml-1 ${screen1490 ? `xl:!ml-11 2xl:!ml-2.5` : `xl:!ml-3`} ${!screen768 ? `!text-center` : `!text-left`} ${!screen600 ? (!screen550 ? (!screen409 ? (screen380 ? `!text-[1.6rem] !leading-[1.895rem]` : `!text-[1.55rem] !leading-7`) : `!text-[1.7rem] !leading-[1.935rem]`) : `!text-[1.8rem] !leading-[1.975rem]`) : `!text-[1.9rem] !leading-[2.055rem] md:!text-[1.7rem] md:!mt-4 lg:!text-[1.8rem] xl:!text-[1.9rem] 2xl:!text-[2.5rem] 2xl:!leading-[2.855rem] ${screen1710 && `2xl:!text-[2.9rem] 2xl:!leading-[3.555rem]`} ${screen1910 && `2xl:!text-[3.15rem] 2xl:!leading-[3.855rem]`} ${screen2030 && `2xl:!text-[3.7rem] 2xl:!leading-[4.355rem]`} !whitespace-nowrap`}`}>
                    {heading}
                </p>

                <div className={`!flex !justify-center !mt-7 !-ml-1 md:!mt-0.5 ${!screen1100 ? (!screen900 ? (!screen896 ? (!screen878 ? (!screen868 ? (screen808 ? `md:!mr-9` : `md:!mr-6`) : `md:!mr-12`) : `md:!mr-14`) : `md:!mr-16`) : `md:!mr-12 lg:!mr-14`) : `lg:!mr-16 xl:!mr-20`}`}>
                    <div className={`!grid ${screen768 ? `!grid-cols-5` : `!grid-cols-2`} !gap-4 md:!gap-3`}>
                        <Image src={brand_b} alt="brand_b" className={`${screen900 ? `md:!w-[6.4rem] lg:!w-[7.7rem] xl:!w-[8.9rem] 2xl:!w-[10.6rem]` : `md:!w-[5.4rem]`} ${screen1710 && `2xl:!w-[11.3rem]`} ${screen1910 && `2xl:!w-[13.8rem]`}`} />

                        <Image src={brand_a} alt="brand_a" className={`${screen900 ? `md:!w-[6.4rem] lg:!w-[7.7rem] xl:!w-[8.9rem] 2xl:!w-[10.6rem]` : `md:!w-[5.4rem]`} ${screen1710 && `2xl:!w-[11.3rem]`} ${screen1910 && `2xl:!w-[13.8rem]`}`} />

                        <Image src={brand_c} alt="brand_c" className={`${screen900 ? `md:!w-[6.4rem] lg:!w-[7.7rem] xl:!w-[8.9rem] 2xl:!w-[10.6rem]` : `md:!w-[5.4rem]`} ${screen1710 && `2xl:!w-[11.3rem]`} ${screen1910 && `2xl:!w-[13.8rem]`}`} />

                        <Image src={brand_d} alt="brand_d" className={`${screen900 ? `md:!w-[6.4rem] lg:!w-[7.7rem] xl:!w-[8.9rem] 2xl:!w-[10.6rem]` : `md:!w-[5.4rem]`} ${screen1710 && `2xl:!w-[11.3rem]`} ${screen1910 && `2xl:!w-[13.8rem]`}`} />

                        <Image src={brand_e} alt="brand_e" className={`${screen900 ? `md:!w-[6.4rem] lg:!w-[7.7rem] xl:!w-[8.9rem] 2xl:!w-[10.6rem]` : `md:!w-[5.4rem]`} ${screen1710 && `2xl:!w-[11.3rem]`} ${screen1910 && `2xl:!w-[13.8rem]`}`} />

                        <Image src={brand_f} alt="brand_f" className={`${screen900 ? `md:!w-[6.4rem] lg:!w-[7.7rem] xl:!w-[8.9rem] 2xl:!w-[10.6rem]` : `md:!w-[5.4rem]`} ${screen1710 && `2xl:!w-[11.3rem]`} ${screen1910 && `2xl:!w-[13.8rem]`}`} />

                        <Image src={brand_g} alt="brand_g" className={`${screen900 ? `md:!w-[6.4rem] lg:!w-[7.7rem] xl:!w-[8.9rem] 2xl:!w-[10.6rem]` : `md:!w-[5.4rem]`} ${screen1710 && `2xl:!w-[11.3rem]`} ${screen1910 && `2xl:!w-[13.8rem]`}`} />

                        <Image src={brand_h} alt="brand_h" className={`${screen900 ? `md:!w-[6.4rem] lg:!w-[7.7rem] xl:!w-[8.9rem] 2xl:!w-[10.6rem]` : `md:!w-[5.4rem]`} ${screen1710 && `2xl:!w-[11.3rem]`} ${screen1910 && `2xl:!w-[13.8rem]`}`} />

                        <Image src={brand_i} alt="brand_i" className={`${screen900 ? `md:!w-[6.4rem] lg:!w-[7.7rem] xl:!w-[8.9rem] 2xl:!w-[10.6rem]` : `md:!w-[5.4rem]`} ${screen1710 && `2xl:!w-[11.3rem]`} ${screen1910 && `2xl:!w-[13.8rem]`}`} />

                        <Image src={brand_j} alt="brand_j" className={`${screen900 ? `md:!w-[6.4rem] lg:!w-[7.7rem] xl:!w-[8.9rem] 2xl:!w-[10.6rem]` : `md:!w-[5.4rem]`} ${screen1710 && `2xl:!w-[11.3rem]`} ${screen1910 && `2xl:!w-[13.8rem]`}`} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SecondBSection;