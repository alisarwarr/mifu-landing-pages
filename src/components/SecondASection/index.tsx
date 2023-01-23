//REACTJS
import { useState, useEffect, ReactElement } from 'react';
//NEXTJS
import Image from 'next/image';
//IMAGES
import { star0, star1, star2, star3, star5, star6, medal, book, gift } from '../../images';
//MEDIA-QUERIES
import useMediaQueries from '../../utils/useMediaQueries';


function SecondASection({
    heading,
    text,
    showOptions,
    listOfData
}: {
    heading?: ReactElement;
    text?: string;
    showOptions: boolean;
    listOfData: { heading: string; text: string }[];
}) {
    const {
        screen2030,
        screen1910,
        screen1710,
        screen1326,
        screen1100,
        screen808,
        screen768,
        screen600,
        screen550,
        screen510,
        screen544,
        screen475,
        screen450,
        screen409,
        screen401,
        screen380,
        screen379,
        screen362,
        screen350
    } = useMediaQueries();


    const [height, setHeight] = useState<any>();
    const updateDimensions = () => setHeight(window?.innerHeight);
    useEffect(() => {
        window?.addEventListener("resize", updateDimensions);
        return () => window?.removeEventListener("resize", updateDimensions);
    }, []);


    return (
        <div className={`!-mt-[13rem] md:!-mt-16 !w-[93%] ${!screen550 ? (screen450 ? `!pb-11` : `!pb-10`) : `!pb-14`} ${!screen600 ? (!screen808 && (screen768 && `!-ml-8`)) : `!ml-5 lg:!ml-9 xl:!ml-[3.25rem]`} ${!showOptions && `md:!-mt-[22.25rem]`}`}>

            {
                showOptions ? (
                    <div className={`!mt-72 ${screen475 ? `!-ml-7` : `!-ml-4`} !w-[104%] !flex md:!hidden`}>
                        <div className="!w-full !flex !justify-start">
                            <div className="!bg-[url('../images/star7.svg')] !bg-no-repeat !w-48 !h-48"></div>
                        </div>

                        <div className={`!w-full !ml-1 ${!screen510 ? (screen401 ? `!mt-4` : `!mt-11`) : `!-mt-10 !h-[40vh] !pl-40`} !flex !justify-center !items-end`}>
                            <div className="!bg-[url('../images/star8.svg')] !bg-no-repeat !w-11 !h-11"></div>
                        </div>

                        <div className="!w-full !-ml-10 !flex !justify-end">
                            <div className="!bg-[url('../images/star9.svg')] !bg-no-repeat !w-[3.75rem] !h-[3.75rem]"></div>
                        </div>
                    </div>
                ) : (
                    <div className="!mt-80 !w-[110%] !-ml-5 !flex !justify-between md:!hidden">
                        <Image src={star3} alt="star3" />
                        <Image src={star2} alt="star2" className="!-mt-[32rem] !ml-36" />
                        <Image src={star1} alt="star1" className="!mt-56" />
                    </div>
                )
            }


            {
                !showOptions && (
                    <div className="!mt-80 !w-[110%] !-ml-5 !hidden md:!flex !justify-between">
                        <Image src={star6} alt="star6" className="!ml-52" />
                        <Image src={star5} alt="star5" className="!-mt-[21.5rem] !ml-36" />
                        <Image src={star0} alt="star0" className={`!mt-56 !mr-4 lg:!mr-9 xl:!mr-14 ${!screen1710 ? (!screen1910 ? (screen1710 ? `2xl:!mr-[4.4rem]` : `2xl:!mr-16`) : `2xl:!mr-[4.5rem]`) : `2xl:!mr-[4.7rem]`}`} />
                    </div>

                )
            }


            <div className={`!flex !items-center !flex-col md:!flex-row ${!showOptions && `!-mt-[21rem] md:!-mt-[32rem] 2xl:!-ml-[27rem]`}`}>
                <div className={`${!(height > 1070) ? `!-mt-[13rem]` : `!-mt-[29.35rem]`} md:!mt-[2.75rem] !flex !flex-col ${screen768 ? `!ml-1.5 !mr-4` : `!items-center`}`}>

                    {
                        showOptions && (
                            <div className={`!mt-16 !w-full !hidden md:!flex lg:!w-[120%] xl:!w-[132%] ${screen1100 ? `!-ml-14` : `!-ml-11`}`}>
                                <div className="!w-full !flex !justify-start">
                                    <div className="!bg-[url('../images/star7.svg')] !bg-no-repeat !bg-contain !w-48 !h-48"></div>
                                </div>

                                <div className="!w-full !-ml-10 md:!-ml-20 lg:!-ml-10 !h-[40vh] !pl-40 !flex !justify-center !items-end">
                                    <div className="!bg-[url('../images/star8.svg')] !bg-no-repeat !bg-contain !w-11 !h-11"></div>
                                </div>

                                <div className="!w-full !-ml-2.5 lg:ml-16 !flex !justify-end">
                                    <div className="!bg-[url('../images/star9.svg')] !bg-no-repeat !bg-contain !w-[3.75rem] !h-[3.75rem]"></div>
                                </div>
                            </div>
                        )
                    }

                    <p className={`md:!hidden ${height > 1070 && `!-mt-48`} !w-[87%] !leading-tight !font-[700] ${!screen768 ? (!screen550 ? (screen450 ? `!text-[2.15rem]` : `!text-[2rem]`) : `!text-[2.3rem]`) : `!text-[1.6785rem] lg:!text-4xl lg:!leading-snug`} ${screen600 && `!text-center`}`}>
                        {heading}
                    </p>

                    <p className={`md:!hidden !w-[87%] !text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] ${!screen768 ? (screen600 && `!text-center !w-[77%]`) : `!text-left !w-[18.1rem] lg:!w-[24rem]`}`}>
                        {text}
                    </p>

                    <div
                        className={`
                            !hidden md:!block !ml-7
                            ${screen1326 ? `${!(height > 1890) ? `${height > 1070 ? `!-mt-[31.12rem]` : `!-mt-[32.12rem]`}` : `!-mt-[52.12rem]`}` : `${!(height > 1890) ? `${height > 1070 ? `!-mt-[31.82rem]` : `!-mt-[31.52rem]`}` : `!-mt-[50.82rem]`}`}
                            ${(height > 690) && `md:!pt-[14.35rem]`}
                            ${(height > 790) && `md:!pt-[8.55rem]`}
                            ${(height > 890) && `md:!pt-[6.45rem]`}
                            ${(height > 990) && `md:!pt-[3.95rem]`}
                            ${(height > 1090) && `md:!pt-0 md:!pb-[0.25rem]`}
                            ${(height > 1190) && `md:!pt-0 md:!pb-[2.95rem]`}
                            ${(height > 1290) && `md:!pt-0 md:!pb-[5.95rem]`}
                            ${(height > 1390) && `md:!pt-0 md:!pb-[7.55rem]`}
                            ${(height > 1490) && `md:!pt-0 md:!pb-[9.55rem]`}
                            ${(height > 1590) && `md:!pt-0 md:!pb-[12.05rem]`}
                            ${(height > 1690) && `md:!pt-0 md:!pb-[15.55rem]`}
                            ${(height > 1790) && `md:!pt-0 md:!pb-[18.05rem]`}
                            ${(height > 1890) && `md:!pt-72 md:!pb-0`}
                        `}
                    >
                        <p className={`!w-[82%] !leading-tight !font-[700] ${!screen768 ? (!screen550 ? (screen450 ? `!text-[2.15rem]` : `!text-[2rem]`) : `!text-[2.3rem]`) : `!text-[1.6785rem] lg:!text-4xl lg:!leading-snug`} ${!screen768 ? (screen600 && `!text-center !w-[23.75rem]`) : `!text-left !w-[19.2rem] lg:!w-[27.4rem] !mt-32 lg:!mt-[6.5rem]`} 2xl:!w-[54.2rem] ${screen1710 ? `2xl:!text-[3.95rem]` : `2xl:!text-[2.75rem]`}`}>
                            {heading}
                        </p>

                        <p className={`!w-[87%] !text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-5 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${!screen768 ? (screen600 && `!text-center !w-[77%]`) : `!text-left !w-[18.1rem] lg:!w-[26rem] 2xl:!w-[29rem]`} ${screen1710 ? `2xl:!text-[1.17rem] 2xl:!w-[46rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                            {text}
                        </p>
                    </div>

                </div>


                <div className={`!w-[95%] !pr-1 md:!ml-3 ${showOptions && `lg:!ml-0`} ${!screen768 ? (screen409 ? `!-mt-9` : `!-mt-14`) : `!mt-12`} ${!screen768 ? (screen600 && `!flex !flex-col !items-center`) : `!flex !justify-end`} ${!showOptions && `md:!-ml-80 md:!w-full md:!flex md:!items-center lg:!-ml-[28rem]`}`}>

                    <div className={`${screen768 && `!mr-11 !-ml-8 lg:!mr-16 xl:!mr-28`} ${!showOptions && `md:!w-[68rem] md:!flex md:!items-center md:!justify-between md:!-mr-0 lg:!mr-0 xl:!w-[108rem] ${screen2030 && `2xl:!mr-[25rem]`}`}`}>
                        <div className={`${showOptions ? `!flex !items-center` : `${screen409 ? `!mt-0` : `!mt-20`} ${screen2030 && `2xl:!ml-40`}`}`}>
                            <Image
                                src={medal}
                                alt="medal"
                                className={`!-ml-2 ${screen409 ? `!w-[111px] !h-[111px] 2xl:!w-[148px] 2xl:!h-[148px]` : `!w-[97.5px] !h-[97.5px]`} ${!screen600 ? (screen379 ? `!mt-[2.55rem]` : `!mt-4`) : `mt-16`}`}
                            />

                            <div className={`${showOptions ? (screen401 ? `!-ml-4 !mt-[7.95rem]` : `!-ml-4 !mt-[6.35rem]`) : `!ml-4 ${screen600 ? `!mt-3` : `!mt-6`}`} ${!showOptions && `${screen409 ? `!mt-0` : `!-mt-[1.55rem]`}`}`}>
                                <p className={`font-medium ${!screen409 && `!w-[12rem]`} ${!screen600 ? (!screen409 ? (screen401 && `!-mt-6`) : `!-mt-14`) : `!-mt-9`} ${!screen768 ? (!screen550 ? (!screen409 ? (screen380 ? `!text-[1.3rem]` : `!text-[1.25rem]`) : `!text-[1.32rem]`) : `!text-[1.37rem]`) : `!text-[1.285rem] lg:!text-[1.37rem] xl:!text-[1.47rem] ${screen1710 ? `2xl:!text-[2.1rem]` : `2xl:!text-[1.775rem]`} !whitespace-nowrap`} ${!showOptions && `!whitespace-nowrap ${!screen600 && `!pt-1.5`}`}`}>
                                    {listOfData[0].heading}
                                </p>
                                <p className={`!text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-1 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${!screen600 ? (!screen550 ? (screen450 ? `!w-[87%]` : `!w-full`) : `!w-[97%]`) : `!w-[20rem] 2xl:!w-[30rem]`} ${screen1710 ? `2xl:!text-[1.17rem] 2xl:!w-[33rem] !leading-[1.8375rem]` : `2xl:!text-base`} ${!showOptions && `md:!w-[14rem] lg:!w-[17rem] xl:!w-[19rem]`} ${!showOptions && `2xl:!w-[20rem]`}`}>
                                    {listOfData[0].text}
                                </p>
                            </div>
                        </div>


                        <div className={`${showOptions ? `!flex !items-center` : `md:!ml-6 lg:!ml-12`} ${!screen768 ? (!screen600 ? (!screen409 ? (screen362 ? `!-mt-[1.55rem] ` : `!-mt-[6.25rem]`) : `!-mt-12 `) : `${!showOptions ? `!-mt-[4.4rem]` : `!-mt-24`}`) : `!mt-[-5.5rem]`} ${!showOptions && `${!screen550 ? (screen450 ? `!pt-4` : `!-mt-[2.1rem]`) : `!pt-0`} md:!-mt-1`}`}>
                            <Image
                                src={book}
                                alt="book"
                                className={`!-ml-2 ${screen409 ? `!w-[111px] !h-[111px] 2xl:!w-[148px] 2xl:!h-[148px]` : `!w-[101px] !h-[101px]`} ${!screen600 ? (!screen544 ? (!screen475 ? (!screen362 ? (screen350 ? `!mt-10` : `!mt-4`) : `!mt-5`) : `!mt-5`) : `!mt-11`) : `!mt-16`}`}
                            />

                            <div className={`${showOptions ? `!-ml-4 !mt-32` : `!ml-4 ${screen600 ? `!-mt-6` : `!mt-6`}`} ${!showOptions && `${screen409 ? `!mt-0` : `!-mt-[1.25rem]`}`}`}>
                                <p className={`!font-medium ${!screen409 && `!w-[12rem]`} ${!screen600 ? (!screen409 ? (screen362 && `!-mt-5`) : `!-mt-[3.25rem]`) : `!-mt-2`} ${!screen768 ? (!screen550 ? (!screen409 ? (screen380 ? `!text-[1.3rem]` : `!text-[1.25rem]`) : `!text-[1.32rem]`) : `!text-[1.37rem]`) : `!text-[1.285rem] lg:!text-[1.37rem] xl:!text-[1.47rem]`} ${screen1710 ? `2xl:!text-[2.1rem]` : `2xl:!text-[1.775rem]`} !whitespace-nowrap`}>
                                    {listOfData[1].heading}
                                </p>
                                <p className={`!text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-1 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${!screen600 ? (!screen550 ? (screen450 ? `!w-[87%]` : `!w-full`) : `!w-[97%]`) : `!w-[20rem] 2xl:!w-[30rem]`} ${screen1710 ? `2xl:!text-[1.17rem] 2xl:!w-[33rem] !leading-[1.8375rem]` : `2xl:!text-base`} ${!showOptions && `md:!w-[14rem] lg:!w-[17rem] xl:!w-[19rem]`} ${!showOptions && `2xl:!w-[20rem]`}`}>
                                    {listOfData[1].text}
                                </p>
                            </div>
                        </div>


                        <div className={`${showOptions ? `!flex !items-center` : `md:!ml-6 lg:!ml-12 ${!screen1710 && `2xl:!mr-80`}`} ${!screen768 ? (!screen600 ? (!screen544 ? (!screen475 ? (!screen409 ? (screen350 ? `!-mt-11` : `!-mt-[3.15rem]`) : `!-mt-7`) : `!-mt-7`) : `!-mt-6`) : `!-mt-12`) : `!-mt-16`} ${!showOptions && `${!screen362 ? `!pt-4` : `!pt-0`} ${screen450 ? `!mt-0` : `!-mt-[2.1rem]`} md:!mt-3`}`}>
                            <Image
                                src={gift}
                                alt="gift"
                                className={`!-ml-2 ${screen409 ? `!w-[111px] !h-[111px] 2xl:!w-[148px] 2xl:!h-[148px]` : `!w-[101.5px] !h-[101.5px]`} ${!screen600 ? (!screen409 ? (screen379 ? `!mt-10` : `!mt-4`) : `!mt-5`) : `!mt-11 2xl:!mt-16`} ${!showOptions && `md:!mt-[4.25rem] lg:!mt-[2.55rem]`}`}
                            />

                            <div className={`${showOptions ? `!-ml-4 !mt-[4.65rem]` : `!ml-4 !-mt-6 md:!-mt-12`}`}>
                                <p className={`!font-medium ${!screen409 && `!w-[12rem]`} ${!screen768 ? (!screen600 ? (!screen409 ? (screen409 && `!-mt-6`) : `!-mt-5`) : `!-mt-0`) : `!mt-6`} ${!screen768 ? (!screen550 ? (!screen409 ? (screen380 ? `!text-[1.3rem]` : `!text-[1.25rem]`) : `!text-[1.32rem]`) : `!text-[1.37rem]`) : `!text-[1.285rem] lg:!text-[1.37rem] xl:!text-[1.47rem]`} ${screen1710 ? `2xl:!text-[2.1rem]` : `2xl:!text-[1.775rem]`} !whitespace-nowrap`}>
                                    {listOfData[2].heading}
                                </p>
                                <p className={`!text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-1 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${!screen600 ? (!screen550 ? (screen450 ? `!w-[87%]` : `!w-full`) : `!w-[97%]`) : `!w-[20rem] 2xl:!w-[30rem]`} ${screen1710 ? `2xl:!text-[1.17rem] 2xl:!w-[33rem] !leading-[1.8375rem]` : `2xl:!text-base`} ${!showOptions && `md:!w-[14rem] lg:!w-[17rem] xl:!w-[19rem]`} ${!showOptions && `2xl:!w-[20rem]`}`}>
                                    {listOfData[2].text}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default SecondASection;