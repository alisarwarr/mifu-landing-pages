//REACTJS
import { ReactElement } from 'react';
//NEXTJS
import Image from 'next/image';
//IMAGES
import { blueshadowstar, blueshadowstars, neutron, tickred } from '../../images';
//MEDIA-QUERIES
import useMediaQueries from '../../utils/useMediaQueries';


function SixthSection({
    ref_FEEDBACK,
    heading,
    text,
    showOptions,
    image
}: {
    ref_FEEDBACK: any;
    heading: ReactElement;
    text: string;
    showOptions: boolean;
    image: HTMLImageElement;
}) {
    const {
        screen1710,
        screen1280,
        screen808,
        screen768,
        screen600,
        screen550,
        screen490,
        screen450,
        screen405,
        screen376
    } = useMediaQueries();


    return (
        <div
            ref={ref_FEEDBACK}
            className={
                showOptions ? `
                    ${!screen768 ? (!screen600 ? (!screen550 ? (screen450 ? `!mt-[8.5rem]` : `!mt-32`) : `!mt-28`) : `!mt-[8.265rem]`) : `!-mt-36`}
                    md:!flex md:!items-center md:justify-between md:!w-[97%] lg:!w-[95%] xl:!w-[93.5%] md:!-mt-20 xl:!mt-4
            ` : `
                    ${!screen768 ? (!screen600 ? (!screen550 ? (screen450 ? `!mt-[3.8rem]` : `!mt-[4.5rem]`) : `!mt-[1.4rem]`) : `!mt-[4.15rem]`) : `!-mt-[3.1rem]`}
                    md:!flex md:!items-center md:justify-between md:!w-[97%] lg:!w-[95%] xl:!w-[93.5%] md:!-mt-[3.65rem] xl:!-mt-[1.925rem]
            `}
        >

            <div className={`!bg-[url('../images/red-shadow-large.svg')] !bg-no-repeat !bg-cover !flex !flex-col md:!w-[1040rem] lg:!w-[2000rem] ${screen490 && `!h-[39rem] xl:!h-[49rem]`}`}>
                <div className={`${screen600 ? `!-ml-3.5` : `!-ml-11`}`}>
                    <Image
                        src={neutron}
                        alt="neutron"
                        className={`${screen600 ? `!w-36 !h-36` : `!w-32 !h-32`} lg:!w-40 lg:!h-40`}
                    />
                </div>


                <div className="!-ml-3 !invisible">
                    <Image
                        src={blueshadowstar}
                        alt="blueshadowstar"
                        className="!w-52 !h-52"
                    />
                </div>


                <div className="!w-full !flex !justify-end !-mt-32 !ml-2 !invisible">
                    <Image
                        src={blueshadowstars}
                        alt="blueshadowstars"
                        className="!w-52 !h-52"
                    />
                </div>


                <div className={
                    showOptions ? `
                        !w-full
                        ${!screen768 ? (!screen550 ? (screen450 ? `!text-[2.15rem]` : `!text-[2rem]`) : `!text-[2.3rem]`) : `!text-[1.6785rem] lg:!text-4xl lg:!leading-snug`}
                        !leading-tight !font-[700] !-mt-[22.15rem]
                        ${!screen768 ? (screen600 && `!flex !items-center !flex-col !-ml-0`) : `!ml-10`}
                        ${!screen768 ? (!screen600 && `!ml-9`) : `!ml-14`}
                        md:!-mt-80 lg:!ml-16 xl:!ml-[4.965rem]
                        ${screen1710 ? `2xl:!text-[3.95rem]` : `2xl:!text-[2.75rem]`}
                    ` : `
                        !w-full
                        ${!screen768 ? (!screen550 ? (screen450 ? `!text-[2.15rem]` : `!text-[2rem]`) : `!text-[2.3rem]`) : `!text-[1.6785rem] lg:!text-4xl md:!leading-[2.115rem] lg:!leading-[2.725rem] 2xl:!leading-[3.225rem]`}
                        !leading-tight !font-[700] !-mt-[22.15rem]
                        ${!screen768 ? (screen600 && `!flex !items-center !flex-col !-ml-0`) : `!ml-10`}
                        ${!screen768 ? (!screen600 && `!ml-9`) : `!ml-14`}
                        md:!-mt-80 lg:!ml-16 xl:!ml-[4.965rem]
                        ${screen1710 ? `2xl:!text-[3.95rem] 2xl:!leading-[4.225rem]` : `2xl:!text-[2.75rem]`}
                        ${screen600 && `!text-center md:!text-left`}
                    `}
                >
                    {heading}

                    <p className={`!w-[80%] ${screen1710 && `!mt-7`} !text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-3.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${!screen1280 ? (!screen768 ? (!screen600 ? (!screen550 ? (screen450 ? `!w-[77%]` : `!w-[75%]`) : `!w-[75%]`) : `!w-[25rem] !text-center`) : `!w-[25rem]`) : `!w-[28rem] 2xl:!w-[30rem]`} ${screen1710 ? `2xl:!text-[1.17rem] 2xl:!w-[42rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                        {text}
                    </p>
                </div>


                <div className={`${screen600 && `!flex !items-center !flex-col !-ml-20`} md:!ml-4 md:!block lg:!ml-7 xl:!ml-10 ${!screen768 ? (screen600 ? `!ml-20` : `!ml-1.5`) : `!ml-14`}`}>
                    <div className={`!mt-7 ${screen450 ? `!ml-9` : `!ml-7`} ${!showOptions && `!hidden`}`}>
                        <div className="!flex !items-center">
                            <Image
                                src={tickred}
                                alt="tickred"
                                className="!w-4 !h-4 lg:!w-[1.1rem] lg:!h-[1.1rem]"
                            />
                            <p className={`!w-[85%] !text-black !text-xs !leading-[1.4375rem] !font-[600] !ml-2.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${screen1710 ? `2xl:!text-[1.17rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                Higher Return On Investment (ROI)
                            </p>
                        </div>

                        <div className={`!flex !items-center ${!screen405 && `!-mt-5`} md:!mt-2.5`}>
                            <Image
                                src={tickred}
                                alt="tickred"
                                className="!w-4 !h-4 lg:!w-[1.1rem] lg:!h-[1.1rem]"
                            />
                            <p className={`!w-[85%] !text-black !text-xs !leading-[1.4375rem] !font-[600] !ml-2.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${screen1710 ? `2xl:!text-[1.17rem] !leading-[1.8375rem]` : `2xl:!text-base`} ${!screen405 && `!mt-6`}`}>
                                9.3x higher average engagement than macro marketing
                            </p>
                        </div>

                        <div className="!flex !items-center md:!mt-2.5">
                            <Image
                                src={tickred}
                                alt="tickred"
                                className="!w-4 !h-4 lg:!w-[1.1rem] lg:!h-[1.1rem]"
                            />
                            <p className={`${screen600 ? `!w-[100%]` : `!w-[85%]`}!text-black !text-xs !leading-[1.3375rem] !font-[600] !ml-2.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${screen1710 ? `2xl:!text-[1.17rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                Higher Click Through Rate (CTR)
                            </p>
                        </div>
                    </div>
                </div>


                <div className="!w-full !flex !justify-end !-mt-4 !ml-4 !invisible">
                    <Image
                        src={blueshadowstars}
                        alt="blueshadowstars"
                        className="!w-52 !h-52"
                    />
                </div>
            </div>


            <div className={
                showOptions ? `
                    ${!screen768 ? (screen600 ? `m-auto pr-3.5` : `!m-auto`) : `!mt-20`}
                    ${!screen600 ? (!screen550 ? (screen450 ? `!w-[26.5rem] !h-[26.5rem] !pl-12` : `!w-[20.5rem] !h-[20.5rem] !pl-3`) : `!w-[29rem] !h-[29rem] !pl-[4.75rem]`) : `!w-96 !h-96 !pr-0.5`}
                    ${!screen600 ? (!screen550 ? (!screen450 ? (screen376 ? `!-mt-24` : `!-mt-24`) : `!-mt-[6.75rem]`) : `!-mt-32`) : `!-mt-40`}
                    ${!screen550 ? (screen490 && `!-mt-[15.75rem]`) : `!-mt-[16.45rem] !pl-2.5`} md:!hidden
                ` : `
                    ${!screen768 ? (screen600 ? `m-auto pr-3.5` : `!m-auto`) : `!mt-20`}
                    ${!screen600 ? (!screen550 ? (screen450 ? `!w-[26.5rem] !h-[26.5rem] !pl-12` : `!w-[20.5rem] !h-[20.5rem] !pl-3`) : `!w-[29rem] !h-[29rem] !pl-[4.75rem]`) : `!w-96 !h-96 !pr-0.5`}
                    ${!screen600 ? (!screen550 ? (!screen450 ? (screen376 ? `!-mt-40` : `!-mt-40`) : `!-mt-[9.85rem]`) : `!-mt-32`) : `!-mt-32`}
                    ${!screen550 ? (screen490 && `!-mt-[21.915rem]`) : `!-mt-[22.105rem] !pl-2.5`} md:!hidden
                `}
            >
                <Image
                    src={image}
                    alt="image"
                />
            </div>


            <Image
                src={image}
                alt="image"
                className={
                    showOptions ? `
                    !hidden md:!block -mt-36
                    ${screen808 ? `-ml-24 !w-[37rem] !h-[21.95rem]` : `-ml-0.5 !w-[35rem] !h-[20.35rem]`}
                    lg:-ml-[6.5rem] lg:!h-[26.25rem] xl:-ml-28 xl:!h-[30.5rem]
                    ${screen1710 && `xl:!h-[38.5rem] !-mt-48`}
                ` : `
                    !hidden md:!block -mt-60
                    ${screen808 ? `-ml-4 !w-[39rem] !h-[23.95rem]` : `-ml-1 !w-[37rem] !h-[22.35rem]`}
                    lg:-ml-[6.5rem] lg:!h-[26.25rem] xl:-ml-28 xl:!h-[30.5rem]
                    ${screen1710 && `xl:!h-[38.5rem] !-mt-48`}
                `}
            />

        </div>
    )
}

export default SixthSection;