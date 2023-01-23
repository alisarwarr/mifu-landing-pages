//REACTJS
import { ReactElement } from 'react';
//NEXTJS
import Image from 'next/image';
//IMAGES
import { blueshadowstar, blueshadowstars, neutron, circularstarsmall, circularstarlarge, tickfrozi } from '../../images';
//MEDIA-QUERIES
import useMediaQueries from '../../utils/useMediaQueries';


function FifthSection({
    heading,
    text,
    showOptions,
    image
}: {
    heading: ReactElement;
    text: string;
    showOptions: boolean;
    image: HTMLImageElement;
}) {
    const {
        screen1710,
        screen1326,
        screen1280,
        screen1024,
        screen1150,
        screen808,
        screen768,
        screen620,
        screen600,
        screen550,
        screen457,
        screen450,
        screen376
    } = useMediaQueries();


    return (
        <div
            className={`
               ${!showOptions
                    ? (!screen1326 ? (!screen1150 ? (!screen1024 ? (!screen768 ? (screen620 ? `!mt-2` : (screen450 ? `!-mt-8` : `!-mt-2.5`)) : `!-mt-32 !pt-10`) : `!-mt-52 !pt-0`) : `!-mt-60`) : `!-mt-[22rem]`)
                    : (!screen1326 ? (!screen1150 ? (!screen1024 ? (!screen768 ? (screen620 ? `!mt-1` : (screen450 ? `!-mt-16` : `!-mt-5`)) : `!-mt-1 !pt-10`) : `!-mt-20 !pt-0`) : `!-mt-56`) : `!-mt-72`)
                }
            `}
        >

            <div className={`${!screen600 ? (!screen550 ? (screen450 ? `!-mt-11` : (screen376 ? `-mt-7` : `!mt-1.5`)) : `!-mt-10`) : `!-mt-[4.85rem]`} ${screen808 && `!pr-4 lg:!pr-24 xl:!pl-10`} md:!flex md:!items-center md:justify-between md:!flex-row-reverse md:!w-[97%] lg:!w-[103%] xl:!w-[93.5%] md:!-mt-40 lg:!-mt-[4.25rem] xl:!mt-16 !pb-20 md:!pb-0 md:!ml-20`}>

                <div className={
                    showOptions ? `
                        ${screen376 ? `!bg-[url('../images/frozi-shadow-large.svg')]` : `!bg-[url('../images/frozi-shadow-small.svg')]`}
                        !bg-no-repeat !bg-cover md:!bg-contain  !flex !flex-col md:!mr-16
                        ${screen376 && `!h-[37rem]`}
                        ${!screen1150 && (screen808 && `flex-1`)}
                    ` : `
                        ${screen376 ? `!bg-[url('../images/frozi-shadow-large.svg')]` : `!bg-[url('../images/frozi-shadow-small.svg')]`}
                        !bg-no-repeat !bg-cover md:!bg-contain !flex !flex-col md:!mr-16 !h-[37rem]
                        ${!screen1150 && (screen808 && `flex-1`)}
                    `
                }>
                    <div className={`${screen600 ? `!-ml-3.5` : `!-ml-11`} !invisible`}>
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


                    <div className={`!w-full ${!screen768 ? (!screen550 ? (screen450 ? `!text-[2.15rem]` : `!text-[2rem]`) : `!text-[2.3rem]`) : `!text-[1.6785rem] lg:!text-4xl lg:!leading-snug`} !leading-tight !font-[700] !-mt-[22.15rem] ${!screen768 ? (screen600 && `!flex !items-center !flex-col !-ml-0`) : `!ml-10`} ${!screen768 ? (!screen600 && `!ml-9`) : `!ml-14`} md:!-mt-80 lg:!ml-16 xl:!ml-[4.965rem] ${screen1710 ? `2xl:!text-[3.95rem]` : `2xl:!text-[2.75rem]`}`}>
                        {heading}

                        <p className={`!w-[80%] ${screen1710 && `!mt-5`} !text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-3.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${!screen1280 ? (!screen768 ? (!screen600 ? (!screen550 ? (screen450 ? `!w-[77%]` : `!w-[75%]`) : `!w-[75%]`) : `!w-[25rem] !text-center`) : `!w-[25rem]`) : `!w-[28rem]`} ${screen1710 ? `2xl:!text-[1.17rem] 2xl:!w-[38rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                            {text}
                        </p>
                    </div>


                    <div className={`${screen600 && `!flex !items-center !flex-col !-ml-20`} md:!ml-4 md:!block lg:!ml-7 xl:!ml-10 ${!screen768 ? (screen600 ? `!-ml-0.5` : `!ml-1.5`) : `!ml-14`}`}>
                        <div className={`!mt-7 ${screen450 ? `!ml-9` : `!ml-7`} ${!showOptions && `!hidden`}`}>
                            <div className="!flex !items-center">
                                <Image
                                    src={tickfrozi}
                                    alt="tickfrozi"
                                    className="!w-4 !h-4 lg:!w-[1.1rem] lg:!h-[1.1rem]"
                                />
                                <p className={`!w-[85%] !text-black !text-xs !leading-[1.4375rem] !font-[600] !ml-2.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${screen1710 ? `2xl:!text-[1.17rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                    Legal Management
                                </p>
                            </div>

                            <div className="!flex !items-center md:!mt-2.5">
                                <Image
                                    src={tickfrozi}
                                    alt="tickfrozi"
                                    className="!w-4 !h-4 lg:!w-[1.1rem] lg:!h-[1.1rem]"
                                />
                                <p className={`!w-[85%] !text-black !text-xs !leading-[1.4375rem] !font-[600] !ml-2.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${screen1710 ? `2xl:!text-[1.17rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                    Integrated Payments
                                </p>
                            </div>

                            <div className="!flex !items-center md:!mt-2.5">
                                <Image
                                    src={tickfrozi}
                                    alt="tickfrozi"
                                    className="!w-4 !h-4 lg:!w-[1.1rem] lg:!h-[1.1rem]"
                                />
                                <p className={`${screen600 ? `!w-[100%]` : `!w-[85%]`} !text-black !text-xs !leading-[1.3375rem] !font-[600] !ml-2.5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${screen1710 ? `2xl:!text-[1.17rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                    Scalable Management
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
                        ${!screen768 ? (screen600 ? `m-auto !pr-3.5` : `!m-auto`) : `!mt-20`}
                        ${!screen600 ? (!screen550 ? (screen450 ? `!w-[20.85rem] !h-[20.85rem]` : `!w-[17.65rem] !h-[17.65rem]`) : `!w-[22.75rem] !h-[22.75rem]`) : `!w-[20.75rem] !h-[20.75rem]`}
                        ${!screen600 ? (!screen550 ? (!screen450 ? (screen376 ? `!-mt-[19.25rem]` : `!-mt-[0.5rem]`) : (!screen457 ? `!-mt-[19rem]` : `!-mt-[20.65rem]`)) : `!-mt-[20.5rem]`) : `!-mt-80`}
                        ${screen550 && `!-mt-[13.65rem] !pr-2.5`}
                        md:!hidden
                    ` : `
                        ${!screen768 ? (screen600 ? `m-auto !pr-3.5` : `!m-auto`) : `!mt-20`}
                        ${!screen600 ? (!screen550 ? (screen450 ? `!w-[20.85rem] !h-[20.85rem]` : `!w-[17.65rem] !h-[17.65rem]`) : `!w-[22.75rem] !h-[22.75rem]`) : `!w-[20.75rem] !h-[20.75rem]`}
                        ${!screen600 ? (!screen550 ? (!screen450 ? (screen376 ? `!-mt-[25.35rem]` : `!-mt-[24.95rem]`) : (!screen457 ? `!-mt-[25.45rem]` : `!-mt-[25.55rem]`)) : `!-mt-[26.05rem]`) : `!-mt-[25.85rem]`}
                        ${screen550 && `!-mt-[13.65rem] !pr-2.5`}
                        md:!hidden
                    `
                }>
                    <div className={
                        showOptions ? `
                            ${screen376 ? `!-mt-[16.75rem]` : `!-mt-[13.25rem]`}
                            !mb-11
                            !flex !justify-end
                        ` : `
                            !-mt-52
                            ${screen550 ? `!mb-16` : `!mb-11`}
                            !flex !justify-end
                        `
                    }>
                        <Image
                            src={circularstarsmall}
                            alt="circularstarsmall"
                            className={`!w-44 !h-44 ${!screen600 ? (screen550 && `!pr-4 !w-48 !h-48`) : `!pr-7 !w-56 !h-56`}`}
                        />
                    </div>

                    <Image
                        src={image}
                        alt="image"
                        className={
                            showOptions ? `
                                !-mt-[6.5rem]
                                ${!screen600 ? (screen550 && `!pr-4 !-mt-[29.5rem] !w-[70rem] !h-[70rem]`) : `!-mt-[8.45rem]`}
                            ` : `
                                !-mt-[6.5rem]
                                ${!screen600 ? (screen550 && `!pr-4 !-mt-[33.5rem] !w-[70rem] !h-[70rem]`) : `!-mt-[8.45rem]`}
                            `
                        }
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


            <div className={
                showOptions ? `
                    !hidden !-mt-64
                    !mb-11 md:!flex !justify-end !w-[98%]
                    ${screen1150 && `!-ml-5 xl:!-ml-11`}
                ` : `
                    !hidden !-mt-96
                    ${screen1710 ? `lg:!-mt-[22.25rem]` : `lg:!-mt-[22rem]`}
                    !mb-11 md:!flex !justify-end !w-[98%]
                    ${screen1150 && `!-ml-5 xl:!-ml-11`}
                `
            }>
                <Image
                    src={circularstarlarge}
                    alt="circularstarlarge"
                    className="!w-60 !h-60 lg:!w-64 lg:!h-64 xl:!w-80 xl:!h-80"
                />
            </div>

        </div>
    )
}

export default FifthSection;