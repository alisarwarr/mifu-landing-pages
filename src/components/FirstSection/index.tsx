//REACTJS
import { useState, useEffect, ReactElement } from 'react';
//NEXTJS
import Image from 'next/image';
//IMAGES
import { frontpic, ondaslarge, ondassmaller } from '../../images';
//COMPONENTS
import Header from '../Header';
//MEDIA-QUERIES
import useMediaQueries from '../../utils/useMediaQueries';


function FirstSection({
    executeScroll_HOME,
    executeScroll_FEATURES,
    executeScroll_FEEDBACK,
    executeScroll_FAQS,
    ref_HOME,
    heading,
    text,
    showInput,
    buttonText
}: {
    executeScroll_HOME: () => void;
    executeScroll_FEATURES: () => void;
    executeScroll_FEEDBACK: () => void;
    executeScroll_FAQS: () => void;
    ref_HOME?: any;
    heading: ReactElement;
    text: string;
    showInput: boolean;
    buttonText: string;
}) {
    const {
        screen2030,
        screen1910,
        screen1710,
        screen1490,
        screen1350,
        screen1326,
        screen1185,
        screen1112,
        screen970,
        screen896,
        screen868,
        screen768,
        screen660,
        screen550,
        screen450,
        screen373,
        screen345
    } = useMediaQueries();


    const [height, setHeight] = useState<any>();
    const updateDimensions = () => setHeight(window?.innerHeight);
    useEffect(() => {
        window?.addEventListener("resize", updateDimensions);
        return () => window?.removeEventListener("resize", updateDimensions);
    }, []);


    return (
        <>
            <div
                ref={ref_HOME}
                className={
                    (showInput || screen550) ? `
                        !bg-[#5957D5] !bg-[url('../images/gradient-small.svg')] !bg-no-repeat !bg-cover md:!bg-[url('../images/gradient-large.svg')] !flex !items-center !flex-col
                        ${!screen768 ? (!screen550 ? (screen450 ? `!pb-6` : `!pb-4`) : `!pb-14`) : `!pb-28`}
                    ` : `
                        !bg-[#5957D5] !bg-[url('../images/gradient-small.svg')] !bg-no-repeat !bg-cover md:!bg-[url('../images/gradient-large.svg')] !flex !items-center !flex-col
                        ${!screen768 ? (!screen550 ? (screen450 ? `!pb-24` : `!pb-20`) : `!pb-36`) : `!pb-44`}
                `}
            >

                <Header
                    executeScroll_HOME={executeScroll_HOME}
                    executeScroll_FEATURES={executeScroll_FEATURES}
                    executeScroll_FEEDBACK={executeScroll_FEEDBACK}
                    executeScroll_FAQS={executeScroll_FAQS}
                />

                <div className="!flex !items-center !flex-col md:!flex-row md:!justify-between md:!w-[85%] md:!ml-10">

                    <div className="!flex !items-center !flex-col">

                        <div className={`!w-[85%] ${!screen550 ? (screen450 ? `!mt-12` : `!mt-8`) : `!mt-7`}`}>
                            <p className={`!text-white !text-[2.25rem] ${screen550 && `!text-[2.45rem]`} ${screen550 && `!mt-6`} !leading-tight !font-[700] ${screen450 ? `!text-center` : `!text-left`} md:!text-left lg:!text-[3.5rem] ${screen550 && `!w-[90%]`} ${screen550 && `!m-auto`} md:!text-[2.65rem] md:!w-[128%] md:!-ml-11 lg:!text-[3.15rem] lg:!w-[140%] lg:!-ml-20 xl:!text-[3.4rem] xl:!w-[160%] 2xl:!w-[120%] ${screen2030&&`2xl:!w-[100%]`} 2xl:!text-[3.95rem] ${screen1710 && `2xl:!text-[4.5rem]`}`}>
                                {heading}
                            </p>

                            <div className={`!text-white !text-xs ${screen550 && `!text-[0.8rem]`} !leading-[1.4375rem] ${screen550 && `!leading-[1.3775rem]`} !font-[400] !mt-4 ${screen450 ? `!text-center` : `!text-left`} md:!text-left ${screen450 ? `!w-[90%] !m-auto` : `!w-full`} ${screen550 && `!w-[80%] !mt-5`} md:!w-[145%] md:!-ml-11 lg:!text-[0.9rem] lg:!w-[138%] lg:!-ml-20 xl:!w-[104%] 2xl:!text-lg`}>
                                {text}

                                {
                                    showInput ? (
                                        <div className="!hidden md:!block !bg-white !shadow-2xl !w-[88%] !h-[3.485rem] 2xl:!h-[4.275rem] !mt-7 !pt-1 !pb-1 !rounded-xl md:!w-[100%] md:!mt-6">
                                            <div className="!flex !items-center !ml-4 !mt-0.5 md:!mt-[0.225rem] lg:!-mt-[0.05rem] 2xl:!mt-[0.1515rem]">
                                                <div className="!flex-1 !mb-3.5">
                                                    <input
                                                        type="text"
                                                        placeholder="subscribe to email newsletter"
                                                        className="!w-[97%] !text-[0.8rem] lg:!text-[0.865rem] xl:!text-[0.9rem] 2xl:!text-[1.205rem] !text-black !mt-2.5 !outline-none"
                                                    />
                                                </div>

                                                <div className="!mb-2">
                                                    <button className="!bg-[#EE4A65] !text-white !text-xs lg:!text-base 2xl:!text-[1.2rem] !font-[600] !leading-tight !pt-[0.5625rem] !pb-[0.5625rem] !pl-[1rem] !pr-[1rem] 2xl:!pt-[0.7725rem] 2xl:!pb-[0.7725rem] 2xl:!pl-[1.35rem] 2xl:!pr-[1.35rem] !mt-1 !mr-2 !rounded-lg !outline-none">
                                                        {buttonText}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="!mt-4 lg:!mt-5">
                                            <button className={`${screen450 ? `!w-[80%] !ml-7 md:!w-auto md:!ml-0` : `!w-auto`} !bg-[#EE4A65] !text-white !text-xs lg:!text-base 2xl:!text-[1.2rem] !font-[600] !leading-tight !pt-[0.8225rem] xl:!pt-[0.8825rem] !pb-[0.8625rem] !pl-[1rem] !pr-[1rem] 2xl:!pt-[0.7725rem] 2xl:!pb-[0.7725rem] 2xl:!pl-[1.35rem] 2xl:!pr-[1.35rem] !mt-1 !mr-2 !rounded-lg !outline-none`}>
                                                {buttonText}
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        {
                            showInput && (
                                <div className={`md:!hidden !bg-white !shadow-2xl ${screen345 ? `!w-[85%]` : `!w-[88%]`} ${screen550 && `!h-[3.15rem]`} !mt-7 !pt-1 !pb-1 !rounded-xl`}>
                                    <div className="!flex !items-center !ml-4 !mt-[-0.015rem]">
                                        <div className="!flex-1 !mb-1">
                                            <input
                                                type="text"
                                                placeholder="subscribe to email newsletter"
                                                className={`!w-[97%] !text-xs ${screen550 && `!text-[0.8rem]`} sm:!text-[0.835rem] !text-black !mt-2.5 !outline-none`}
                                            />
                                        </div>

                                        <div className="!mb-1">
                                            <button className="!bg-[#EE4A65] !text-white !text-xs lg:!text-base !font-[600] !leading-tight !pt-[0.5625rem] !pb-[0.5625rem] !pl-[1rem] !pr-[1rem] !mt-1 !mr-2 !rounded-lg !outline-none">
                                                {buttonText}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>


                    <Image
                        src={frontpic}
                        alt="frontpic"
                        className={`!h-80 md:!h-96 !ml-0.5 ${!screen868 ? (!screen768 ? (!screen550 ? (!screen450 ? `!w-72 md:!ml-24` : `!w-80 md:!ml-24`) : `!w-96 md:!ml-24`) : `!w-100 md:!ml-16 md:!-mt-3`) : `!w-96 md:!ml-28`} ${!screen550 ? (screen450 ? `!mt-10` : `!mt-4`) : `!mt-14`} ${screen970 && `md:!ml-28`} lg:!hidden`}
                    />


                    <div className={`!hidden lg:!block ${!showInput&&`${screen2030?`xl:!ml-60 xl:!mb-14`:`xl:!ml-56 xl:!mb-14`}`} 2xl:!mr-14 ${!screen1910 ? (screen1710 && `2xl:!mr-5`) : `2xl:!mr-0`}`}>
                        <Image
                            src={frontpic}
                            alt="frontpic"
                            className={`!w-[60rem] !h-[21rem] !ml-20 !mt-12 xl:!w-[52rem] xl:!h-[24rem] 2xl:!w-[56rem] 2xl:!h-[28rem] ${!screen1910 ? (screen1710 && `2xl:!w-[59rem] 2xl:!h-[32rem]`) : `2xl:!w-[61rem] 2xl:!h-[34rem]`}`}
                        />
                    </div>

                </div>

            </div>


            {
                (showInput || screen550) ? (
                    <Image
                        src={ondaslarge}
                        alt="ondaslarge"
                        className={`!w-full ${!screen660 ? (!screen550 ? (!screen450 ? (screen373 ? `!-mt-6` : `!-mt-5`) : `!-mt-7`) : `!-mt-9`) : `!-mt-11`} ${!screen2030 ? (!screen1710 ? (!screen1490 ? (!screen1350 ? (!screen1326 ? (!screen1185 ? (!screen1112 ? (screen896 && `!-mt-[3.75rem]`) : `!-mt-16`) : `!-mt-[4.5rem]`) : `!-mt-[4.55rem]`) : `!-mt-[5.05rem]`) : `!-mt-[5.85rem]`) : `!-mt-[6.85rem]`) : `!-mt-[8.1rem]`} ${screen1112 && (height > 1070) && `!-mt-[4.65rem]`} ${screen1350 && (height > 1070) && `!-mt-[5.65rem]`} ${screen1710 && (height > 1070) && `!-mt-[7.25rem]`} ${screen2030 && (height > 1070) && `!-mt-[8.55rem]`}`}
                    />
                ) : (
                    <Image
                        src={ondassmaller}
                        alt="ondassmaller"
                        className={`!w-full ${!screen660 ? (!screen550 ? (!screen450 ? (screen373 ? `!-mt-24` : `!-mt-20`) : `!-mt-[6.95rem]`) : `!-mt-[9.1rem]`) : `!-mt-[10.15rem]`} ${!screen2030 ? (!screen1710 ? (!screen1490 ? (!screen1350 ? (!screen1326 ? (!screen1185 ? (!screen1112 ? (screen896 && `!-mt-[3.75rem]`) : `!-mt-16`) : `!-mt-[4.5rem]`) : `!-mt-[4.55rem]`) : `!-mt-[5.05rem]`) : `!-mt-[5.85rem]`) : `!-mt-[6.85rem]`) : `!-mt-[8.1rem]`} ${screen1112 && (height > 1070) && `!-mt-[4.65rem]`} ${screen1350 && (height > 1070) && `!-mt-[5.65rem]`} ${screen1710 && (height > 1070) && `!-mt-[7.25rem]`} ${screen2030 && (height > 1070) && `!-mt-[8.55rem]`}`}
                    />
                )
            }
        </>
    )
}

export default FirstSection;