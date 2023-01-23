//NEXTJS
import Image from 'next/image';
//IMAGES
import { roundstar, sparklarge_a, sparklarge_b, sparksmall_a, sparksmall_b, yellowshadowsmall } from '../../images';
//MEDIA-QUERIES
import useMediaQueries from '../../utils/useMediaQueries';


function EightSection({
    heading,
    text,
    buttonText
}: {
    heading: string;
    text: string;
    buttonText: string;
}) {
    const {
        screen768,
        screen600,
        screen550
    } = useMediaQueries();


    return (
        <>
            <div className="!w-full">

                <div className="!shadow-[0_0_13px_13px_#38419E] !bg-[#38419E] !mt-[7.65rem] !pb-12 md:!pb-14 lg:!pb-16 xl:!pb-20 !flex !flex-col !items-center">
                    <Image
                        src={roundstar}
                        alt="roundstar"
                        className="!mt-14 md:!mt-14 lg:!mt-[3.7rem] xl:!mt-[3.3rem]"
                    />

                    <div className={`!text-white !mt-4 !-ml-1 !text-center !text-xl !font-[700] !z-[100] ${!screen600 ? (screen550 && `!text-[1.35rem]`) : `!text-[1.45rem]`} md:!text-2xl lg:!text-[1.675rem] xl:!text-4xl 2xl:!text-[2.65rem]`}>
                        <p>
                            {heading}
                        </p>
                        <p className={`${!screen768 ? (!screen600 ? (screen550 && `!mt-1`) : `!mt-1.5`) : `!mt-0.5`} lg:!mt-1 xl:!mt-2 2xl:!mt-4`}>
                            {text}
                        </p>
                    </div>

                    <button className={`!bg-white !text-black !text-xs md:!text-sm lg:!text-base 2xl:!text-[1.1rem] !font-[600] !leading-tight !rounded-xl !outline-none !tracking-normal !ml-2.5 !z-[100] !pt-[15px] !pb-[15px] !pr-[24px] !pl-[24px] md:!pt-[11px] md:!pb-[11px] md:!pr-[20px] md:!pl-[20px] lg:!pt-[10px] lg:!pb-[10px] lg:!pr-[24px] lg:!pl-[24px] xl:!pt-[11px] xl:!pb-[11px] xl:!pr-[26px] xl:!pl-[26px] 2xl:!pt-[15px] 2xl:!pb-[15px] 2xl:!pr-[39px] 2xl:!pl-[39px] !mt-5 md:!mt-6 lg:!mt-7 xl:!mt-8`}>
                        {buttonText}
                    </button>
                </div>


                <div className="!-mt-[16.9rem] !w-full !h-[46%] !flex !justify-between md:!hidden">
                    <div className="!w-[20rem] !h-[20rem]">
                        <Image
                            src={sparksmall_a}
                            alt="sparksmall_a"
                        />
                    </div>

                    <div className="!-ml-64 !hidden">
                        <div className="!mt-36">
                            <Image
                                src={sparksmall_b}
                                alt="sparksmall_b"
                                className="!w-[3rem] !h-[3rem]"
                            />
                        </div>
                    </div>

                    <div className={`${screen550 ? `!-mt-1.5` : `!-mt-0.5`} md:!hidden`}>
                        <Image
                            src={yellowshadowsmall}
                            alt="yellowshadowsmall"
                        />
                    </div>
                </div>


                <div className={`${screen600 ? `!-mt-48` : `!-mt-[4.5rem]`} !flex !justify-center md:!hidden`}>
                    <Image
                        src={sparksmall_b}
                        alt="sparksmall_b"
                        className="!w-[4rem] !h-[4rem]"
                    />
                </div>
            </div>


            <div className="!hidden md:!block !h-[18.1rem] !-mt-[18rem] lg:!-mt-[19.2rem] xl:!-mt-[21.5rem] 2xl:!-mt-[22.65rem] !ml-2">
                <div className="!w-[17rem] xl:!mt-0.5">
                    <Image
                        src={sparklarge_a}
                        alt="sparklarge_a"
                    />
                </div>

                <div className="!w-[19rem] !ml-56 lg:!mt-5 xl:!mt-12">
                    <Image
                        src={sparklarge_b}
                        alt="sparklarge_b"
                        className="!w-24 !h-24"
                    />
                </div>
            </div>


            <div className="!hidden !transform !scale-y-[-1] md:!flex !justify-end !-mt-[18.25rem] lg:!-mt-[18.25rem] xl:!-mt-[26.3rem] 2xl:!-mt-[26.9rem]">
                <Image
                    src={yellowshadowsmall}
                    alt="yellowshadowsmall"
                    className="!w-[22.5rem] lg:!w-[30.25rem] xl:!w-[40.95rem]"
                />
            </div>
        </>
    )
}

export default EightSection;