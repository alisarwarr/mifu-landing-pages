//REACTJS
import { useState, useEffect, ReactElement } from 'react';
//NEXTJS
import Image from 'next/image';
//IMAGES
import { blueshadowstar, blueshadowstars, tickblue } from '../../images';
//MEDIA-QUERIES
import useMediaQueries from '../../utils/useMediaQueries';


function FourthSection({
    ref_FEATURES,
    heading,
    text,
    showOptions,
    image
}: {
    ref_FEATURES: any;
    heading: ReactElement;
    text: string;
    showOptions: boolean;
    image: HTMLImageElement;
}) {
    const {
        screen1910,
        screen1710,
        screen1326,
        screen1280,
        screen1150,
        screen900,
        screen808,
        screen768,
        screen640,
        screen620,
        screen600,
        screen550,
        screen490,
        screen450,
        screen376
    } = useMediaQueries();


    const [height, setHeight] = useState<any>();
    const updateDimensions = () => setHeight(window?.innerHeight);
    useEffect(() => {
        window?.addEventListener("resize", updateDimensions);
        return () => window?.removeEventListener("resize", updateDimensions);
    }, []);


    return (
        <div
            ref={ref_FEATURES}
            className={`
                ${(!screen1326)
                && (height > 1070)
                && (
                    (screen768 ? (screen900 ? (`sm:!-mt-[106rem]`) : `sm:!-mt-[89.765rem]`) : `sm:!-mt-[85.165rem]`)
                )}
                ${(!screen1326)
                && (height > 1890)
                && (
                    (screen768 ? (screen900 ? (`sm:!-mt-[222rem]`) : `sm:!-mt-[186rem]`) : `sm:!-mt-[183.465rem]`)
                )}


                ${!showOptions && (screen640 ? `!mt-36` : screen450 ? `!mt-14` : `!mt-0.5`)}


                ${(screen1326)
                && (height > 790)
                && (
                    `sm:!mt-[14.15rem]`
                )}
                ${(screen1326)
                && (height > 890)
                && (
                    `sm:!mt-[3.15rem]`
                )}
                ${(screen1326)
                && (height > 990)
                && (
                    `sm:!mt-[3.25rem]`
                )}
                ${(screen1326)
                && (height > 1090)
                && (
                    `sm:!-mt-[31.75rem]`
                )}
                ${(screen1326)
                && (height > 1190)
                && (
                    `sm:!-mt-[34.45rem]`
                )}
                ${(screen1326)
                && (height > 1290)
                && (
                    `sm:!-mt-[42.85rem]`
                )}
                ${(screen1326)
                && (height > 1390)
                && (
                    `sm:!-mt-[47.85rem]`
                )}
                ${(screen1326)
                && (height > 1490)
                && (
                    `sm:!-mt-[53.85rem]`
                )}
                ${(screen1326)
                && (height > 1590)
                && (
                    `sm:!-mt-[60.35rem]`
                )}
                ${(screen1326)
                && (height > 1690)
                && (
                    `sm:!-mt-[66.35rem]`
                )}
                ${(screen1326)
                && (height > 1790)
                && (
                    `sm:!-mt-[70.25rem]`
                )}
                ${(screen1326)
                && (height > 1890)
                && (
                    `sm:!-mt-[76.25rem]`
                )}
            

                ${(screen1326)
                && (screen900)
                && (height > 1890)
                && (
                    `sm:!-mt-[80rem]`
                )}
                ${(screen1326)
                && (screen900)
                && (height > 1790)
                && (
                    `sm:!-mt-[80rem]`
                )}
                ${(screen1326)
                && (screen900)
                && (height > 1690)
                && (
                    `sm:!-mt-[68rem]`
                )}
                ${(screen1326)
                && (screen900)
                && (height > 1590)
                && (
                    `sm:!-mt-[61rem]`
                )}
                ${(screen1326)
                && (screen900)
                && (height > 1490)
                && (
                    `sm:!-mt-[52rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 490)
                && (
                    `sm:!-mt-[31rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 590)
                && (
                    `sm:!-mt-[43rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 690)
                && (
                    `sm:!-mt-[58rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 790)
                && (
                    `sm:!-mt-[72rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 890)
                && (
                    `sm:!-mt-[86rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 990)
                && (
                    `sm:!-mt-[99rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 1090)
                && (
                    `sm:!-mt-[114rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 1190)
                && (
                    `sm:!-mt-[127rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 1290)
                && (
                    `sm:!-mt-[141rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 1390)
                && (
                    `sm:!-mt-[153rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 1490)
                && (
                    `sm:!-mt-[171.1rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 1590)
                && (
                    `sm:!-mt-[182.1rem]`
                )}
                ${(!screen1326)
                && (screen900)
                && (height > 1690)
                && (
                    `sm:!-mt-[196rem]`
                )}


                ${(!screen900)
                && (height > 490)
                && (
                    `sm:!-mt-[21rem]`
                )}
                ${(!screen900)
                && (height > 590)
                && (
                    `sm:!-mt-[33.3rem]`
                )}
                ${(!screen900)
                && (height > 690)
                && (
                    `sm:!-mt-[44.9rem]`
                )}
                ${(!screen900)
                && (height > 790)
                && (
                    `sm:!-mt-[56.3rem]`
                )}
                ${(!screen900)
                && (height > 890)
                && (
                    `sm:!-mt-[68.3rem]`
                )}
                ${(!screen900)
                && (height > 990)
                && (
                    `sm:!-mt-[80.3rem]`
                )}
                ${(!screen900)
                && (height > 1090)
                && (
                    `sm:!-mt-[92.1rem]`
                )}
                ${(!screen900)
                && (height > 1190)
                && (
                    `sm:!-mt-[104.1rem]`
                )}
                ${(!screen900)
                && (height > 1290)
                && (
                    `sm:!-mt-[116.1rem]`
                )}
                ${(!screen900)
                && (height > 1390)
                && (
                    `sm:!-mt-[128.1rem]`
                )}
                ${(!screen900)
                && (height > 1490)
                && (
                    `sm:!-mt-[140.1rem]`
                )}
                ${(!screen900)
                && (height > 1590)
                && (
                    `sm:!-mt-[151.7rem]`
                )}
                ${(!screen900)
                && (height > 1690)
                && (
                    `sm:!-mt-[164.7rem]`
                )}
                ${(!screen900)
                && (height > 1790)
                && (
                    `sm:!-mt-[175.7rem]`
                )}
                ${(!screen900)
                && (height > 1790)
                && (
                    `sm:!-mt-[187.7rem]`
                )}
            `}
        >

            <div className={`${!screen600 ? (!screen550 ? (screen450 ? `!mt-[4.25rem]` : `!mt-[6.85rem]`) : `!mt-14`) : `!mt-20`} sm:!-mt-[19rem] md:!-mt-[16.55rem] ${screen900 && `md:!-mt-[25.05rem]`} lg:!-mt-[25.1rem] ${screen1910 ? `2xl:!-mt-[19rem]` : `xl:!-mt-[4rem] 2xl:!-mt-[1rem]`} md:!flex md:!items-center md:justify-between md:!w-[97%] lg:!w-[95%] xl:!w-[93.5%] xl:!-mt-96 2xl:!-mt-96 ${!showOptions && screen1326 && `xl:!-mt-[36.265rem] 2xl:!-mt-[36.265rem]`}`}>

                <div className={
                    showOptions ? `
                        !bg-[url('../images/blue-shadow-large.svg')] !bg-no-repeat
                        ${!screen1326 && `!bg-cover`}
                        !flex !flex-col md:!w-[1040rem] lg:!w-[2000rem]
                        ${!screen1326 ? (!screen1150 ? (!screen768 ? (!screen620 ? (screen490 && `!h-[39rem]`) : `!h-[47rem]`) : `!h-[40rem]`) : `!h-[49rem]`) : `!h-[62rem] 2xl:!h-[65rem]`}
                    ` : `
                        !bg-[url('../images/blue-shadow-large.svg')] !bg-no-repeat
                        ${!screen1326 && `!bg-cover`}
                        !flex !flex-col md:!w-[1040rem] lg:!w-[2000rem]
                        ${!screen1326 ? (!screen1150 ? (!screen768 ? (!screen620 ? (screen450 && `!h-[39rem]`) : `!h-[47rem]`) : `!h-[40rem]`) : `!h-[49rem]`) : `!h-[62rem] 2xl:!h-[65rem]`}
                    `}
                >
                    <div className="!-ml-3">
                        <Image
                            src={blueshadowstar}
                            alt="blueshadowstar"
                            className="!w-52 !h-52"
                        />
                    </div>


                    <div className="!w-full !flex !justify-end !-mt-32 !ml-2 !invisible md:!visible">
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
                            !leading-tight !font-[700] !-mt-[14.5rem]
                            ${!screen768 ? (screen600 && `!flex !items-center !flex-col !-ml-0`) : `!ml-10`}
                            ${!screen768 ? (!screen600 && `!ml-9`) : `!ml-14`}
                            md:!-mt-32 lg:!ml-16 xl:!ml-[4.9620rem]
                            ${screen1710 ? `2xl:!text-[3.95rem]` : `2xl:!text-[2.75rem]`}
                        ` : `
                            !w-full
                            ${!screen768 ? (!screen550 ? (screen450 ? `!text-[2.15rem]` : `!text-[2rem]`) : `!text-[2.3rem]`) : `!text-[1.6785rem] lg:!text-4xl lg:!leading-snug`}
                            !leading-tight !font-[700] !-mt-[14.5rem]
                            ${!screen768 ? (screen600 && `!flex !items-center !flex-col !-ml-0`) : `!ml-10`}
                            ${!screen768 ? (!screen600 && `!ml-9`) : `!ml-14`}
                            md:!-mt-32 lg:!ml-16 xl:!ml-[4.9620rem]
                            ${!screen1710 ? (!screen1326 ? (screen1150 && `md:!-mt-6`) : `md:!mt-9`) : `md:!mt-[4.575rem]`}
                            ${screen1710 ? `2xl:!text-[3.95rem] 2xl:!leading-[4.225rem]` : `2xl:!text-[2.75rem]`}
                        `}
                    >
                        {heading}

                        <p className={`!w-[80%] ${screen1710 && `!mt-7`} !text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-3.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${!screen1280 ? (!screen768 ? (!screen600 ? (!screen550 ? (screen450 ? `!w-[77%]` : `!w-[75%]`) : `!w-[75%]`) : `!w-[25rem] !text-center`) : `!w-[25rem]`) : `!w-[28rem]`} ${screen1710 ? `2xl:!text-[1.17rem] 2xl:!w-[36rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                            {text}
                        </p>
                    </div>


                    <div className={`${screen600 && `!flex !items-center !flex-col !-ml-20`} md:!ml-4 md:!block lg:!ml-7 xl:!ml-10 ${!screen768 ? (screen600 ? `!ml-20` : `!ml-1.5`) : `!ml-14`}`}>
                        <div className={`!mt-7 ${screen450 ? `!ml-9` : `!ml-7`} ${!showOptions && `!hidden`}`}>
                            <div className="!flex !items-center">
                                <Image
                                    src={tickblue}
                                    alt="tickblue"
                                    className="!w-4 !h-4 lg:!w-[1.1rem] lg:!h-[1.1rem]"
                                />
                                <p className={`!w-[85%] !text-black !text-xs !leading-[1.4375rem] !font-[600] !ml-2.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${screen1710 ? `2xl:!text-[1.17rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                    Management at scale
                                </p>
                            </div>

                            <div className="!flex !items-center md:!mt-2.5">
                                <Image
                                    src={tickblue}
                                    alt="tickblue"
                                    className="!w-4 !h-4 lg:!w-[1.1rem] lg:!h-[1.1rem]"
                                />
                                <p className={`!w-[85%] !text-black !text-xs !leading-[1.4375rem] !font-[600] !ml-2.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${screen1710 ? `2xl:!text-[1.17rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                    Automated Workflows
                                </p>
                            </div>

                            <div className="!flex !items-center md:!mt-2.5">
                                <Image
                                    src={tickblue}
                                    alt="tickblue"
                                    className="!w-4 !h-4 lg:!w-[1.1rem] lg:!h-[1.1rem]"
                                />
                                <p className={`${screen600 ? `!w-[100%]` : `!w-[85%]`} !text-black !text-xs !leading-[1.3375rem] !font-[600] !ml-2.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${screen1710 ? `2xl:!text-[1.17rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                    Boosted Efficiency - minimal clicks, maximum reach.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="!w-full !flex !justify-end !-mt-4 !ml-4 md:!invisible">
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
                        ${!screen550 ? (screen490 && `!-mt-[15.75rem]`) : `${!screen620 ? `!-mt-[16.45rem]` : `!-mt-[24.85rem]`} !pl-2.5`} md:!hidden
                    ` : `
                        ${!screen768 ? (screen600 ? `m-auto pr-3.5` : `!m-auto`) : `!mt-20`}
                        ${!screen600 ? (!screen550 ? (screen450 ? `!w-[26.5rem] !h-[26.5rem] !pl-12` : `!w-[20.5rem] !h-[20.5rem] !pl-3`) : `!w-[29rem] !h-[29rem] !pl-[4.75rem]`) : `!w-96 !h-96 !pr-0.5`}
                        ${!screen600 ? (!screen550 ? (!screen450 ? (screen376 ? `!-mt-40` : `!-mt-36`) : `!-mt-[22.95rem]`) : `!-mt-32`) : `!-mt-[32.25rem]`}
                        ${!screen550 ? (screen490 && `!-mt-[21.915rem]`) : `${!screen620 ? `!-mt-[24.105rem]` : `!-mt-[32.605rem]`} !pl-2.5`} md:!hidden
                    `
                }>
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
                        ${screen808 ? `-ml-14 !w-[35rem] !h-[19.95rem]` : `-ml-16 !w-[33rem] !h-[19.35rem]`}
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

        </div>
    )
}

export default FourthSection;