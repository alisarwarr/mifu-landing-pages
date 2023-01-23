//NEXTJS
import Image from 'next/image';
//IMAGES
import { _01, _02, _03, _04, leftarrow, rightarrow, leftarrowbig, rightarrowbig, redshadowstar } from '../../images';
//MEDIA-QUERIES
import useMediaQueries from '../../utils/useMediaQueries';


function ThirdSection({
    showOptions,
    listOfData
}: {
    showOptions: boolean;
    listOfData: { heading: string; text: string }[];
}) {
    const {
        screen2030,
        screen1910,
        screen1710,
        screen1326,
        screen1280,
        screen1228,
        screen1168,
        screen1108,
        screen1064,
        screen1024,
        screen978,
        screen928,
        screen900,
        screen878,
        screen808,
        screen768,
        screen600,
        screen550,
        screen450,
        screen432,
        screen409,
        screen380
    } = useMediaQueries();


    return (
        <div className={`!mt-10 md:!mt-[11.85rem] lg:!mt-56 ${!screen1910 ? (screen1710 ? `xl:!mt-[20.25rem]` : `xl:!mt-[16.5rem]`) : `xl:!mt-[23.15rem]`} md:-ml-6 lg:!-ml-[4.85rem] !pb-12 bg-[url('../images/red-shadow.svg')] !bg-no-repeat ${!screen1326 ? `!bg-cover` : `!bg-right`} !w-[104%] sm:!h-[190%] ${!screen1326 ? (screen900 && `sm:!h-[220%]`) : `sm:!h-[100%]`} lg:!w-[109%]`}>

            <div className="!flex !items-center !flex-col md:!flex-row md:!justify-center 2xl:!justify-start 2xl:!ml-[20rem] md:!-mt-64">

                <div className={`!w-[80%] lg:!w-[70%] ${!screen1910 ? (screen1710 ? `2xl:!w-[95%]` : `2xl:!w-[90%]`) : `2xl:!w-[94.65%]`} ${!screen1280 ? (!screen1228 ? (!screen1168 ? (!screen1108 ? (!screen1064 ? (!screen978 ? (!screen928 ? (!screen878 ? (screen808 ? `!-ml-[7.5rem]` : `!-ml-28`) : `!-ml-36`) : `!-ml-[9.5rem]`) : `!-ml-40`) : `!-ml-[10.5rem]`) : `!-ml-44`) : `!-ml-48`) : `!-ml-52`) : `!-ml-[13.5rem]`} ${!screen768 ? (screen600 && `!flex !items-center !flex-col !pl-6`) : `!block`}`}>

                    <p className={`!w-full ${!screen768 ? (!screen550 ? (screen450 ? `!text-[2.15rem]` : `!text-[2rem]`) : `!text-[2.3rem]`) : `!text-[1.6785rem] lg:!text-4xl lg:!leading-snug`} !leading-tight !font-[700] ${!screen768 ? (!screen550 ? (screen450 ? `!text-[2.15rem]` : `!text-[2rem]`) : `!text-[2.3rem]`) : `!text-[1.6785rem] lg:!text-4xl lg:!leading-snug`} ${!screen768 ? (screen600 && `!text-center !w-[23.75rem]`) : `!text-left !w-[17.2rem] lg:!w-[23.2rem] !mt-32 lg:!mt-[6.5rem]`} ${!screen768 ? (screen600 ? `!ml-20` : `!ml-14`) : `!ml-14`} 2xl:!whitespace-nowrap ${screen1710 ? `2xl:!text-[3.95rem]` : `2xl:!text-[2.75rem]`}`}>
                        The Mifu Journey
                    </p>

                    <div className={`!w-[105%] !pr-1 !-mt-20 !ml-20 ${!screen768 ? (screen600 && `!flex !flex-col !items-center !ml-40`) : `!flex !flex-row !justify-between`}`}>
                        <div className="!mt-28 !-ml-6">
                            <div>
                                <Image
                                    src={_01}
                                    alt="_01"
                                    className="!w-12 !h-12"
                                />
                            </div>

                            <div className="!mt-4">
                                <p className={`!font-semibold ${!screen768 ? (!screen550 ? (!screen409 ? (screen380 ? `!text-[1.3rem]` : `!text-[1.25rem]`) : `!text-[1.32rem]`) : `!text-[1.37rem]`) : `!text-[1.285rem] lg:!text-[1.37rem] xl:!text-[1.47rem] ${screen1710 ? `2xl:!text-[2.1rem]` : `2xl:!text-[1.775rem]`} !whitespace-nowrap`}`}>
                                    {listOfData[0].heading}
                                </p>
                                <p className={`${!showOptions ? `!w-[80%] md:!w-[60%]` : `!w-[80%]`} !text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-1 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${!screen1280 ? (!screen768 ? (!screen600 ? (!screen550 ? (screen450 ? `!w-[77%]` : `!w-[75%]`) : `!w-[19rem]`) : `!w-[25rem]`) : `!w-[16rem]`) : `!w-[18rem]`} ${screen1710 ? `2xl:!text-[1.17rem] ${showOptions && `2xl:!w-[33rem]`} !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                    {listOfData[0].text}
                                </p>
                            </div>
                        </div>


                        <div className={`${!screen768 ? (screen600 ? `!-ml-[25.85rem] !-mt-1` : `!-ml-14 !mt-1.5`) : `!hidden`}`}>
                            <Image
                                src={leftarrow}
                                alt="leftarrow"
                                className="!w-20 !h-20"
                            />
                        </div>


                        <div className={`${screen600 ? `!ml-10` : `!ml-3`} ${screen768 ? `!mt-80 !-ml-8` : `!-mt-14`}`}>
                            <div>
                                <Image
                                    src={_02}
                                    alt="_02"
                                    className="!w-12 !h-12"
                                />
                            </div>

                            <div className="!mt-4">
                                <p className={`!font-semibold ${!screen768 ? (!screen550 ? (!screen409 ? (screen380 ? `!text-[1.3rem]` : `!text-[1.25rem]`) : `!text-[1.32rem]`) : `!text-[1.37rem]`) : `!text-[1.285rem] lg:!text-[1.37rem] xl:!text-[1.47rem] ${screen1710 ? `2xl:!text-[2.1rem]` : `2xl:!text-[1.775rem]`} !whitespace-nowrap`}`}>
                                    {listOfData[1].heading}
                                </p>
                                <p className={`${!showOptions ? `!w-[80%] md:!w-[60%]` : `!w-[80%]`} !text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-1 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${!screen1280 ? (!screen768 ? (!screen600 ? (!screen550 ? (screen450 ? `!w-[77%]` : `!w-[75%]`) : `!w-[19rem]`) : `!w-[25rem]`) : `!w-[16rem]`) : `!w-[18rem]`} ${screen1710 ? `2xl:!text-[1.17rem] 2xl:!w-[33rem] ${showOptions && `2xl:!w-[33rem]`} !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                    {listOfData[1].text}
                                </p>
                            </div>
                        </div>


                        <div className={`${!screen768 ? (screen600 ? `!-ml-52 !mt-1.5` : `!ml-11 !mt-1.5`) : `!hidden`}`}>
                            <Image
                                src={rightarrow}
                                alt="rightarrow"
                                className="!w-16 !h-16"
                            />
                        </div>


                        <div className={`${!screen768 ? (screen600 ? `!-mt-12 !-ml-6` : `!-mt-12 !-ml-6`) : `!mt-[6.9rem] !ml-1`} ${screen768 && `!-ml-40`}`}>
                            <div>
                                <Image
                                    src={_03}
                                    alt="_03"
                                    className="!w-12 !h-12"
                                />
                            </div>

                            <div className="!mt-4">
                                <p className={`!font-semibold ${!screen768 ? (!screen550 ? (!screen409 ? (screen380 ? `!text-[1.3rem]` : `!text-[1.25rem]`) : `!text-[1.32rem]`) : `!text-[1.37rem]`) : `!text-[1.285rem] lg:!text-[1.37rem] xl:!text-[1.47rem] ${screen1710 ? `2xl:!text-[2.1rem]` : `2xl:!text-[1.775rem]`} !whitespace-nowrap`}`}>
                                    {listOfData[2].heading}
                                </p>
                                <p className={`${!showOptions ? `!w-[80%] md:!w-[60%]` : `!w-[80%]`} !text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-1 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${!screen1280 ? (!screen768 ? (!screen600 ? (!screen550 ? (screen450 ? `!w-[77%]` : `!w-[75%]`) : `!w-[19rem]`) : `!w-[25rem]`) : `!w-[16rem]`) : `!w-[18rem]`} ${screen1710 ? `2xl:!text-[1.17rem] ${showOptions && `2xl:!w-[33rem]`} !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                    {listOfData[2].text}
                                </p>
                            </div>
                        </div>

                        {
                            !showOptions && (
                                <>
                                    <div className={`${!screen768 ? (screen600 ? `!-ml-[25.85rem] !-mt-1` : `!-ml-14 !mt-1.5`) : `!hidden`}`}>
                                        <Image
                                            src={leftarrow}
                                            alt="leftarrow"
                                            className="!w-20 !h-20"
                                        />
                                    </div>

                                    <div className={`md:!-mr-20 ${screen600 ? `!ml-10` : `!ml-3`} ${screen768 ? `!mt-80 !-ml-8` : `!-mt-14`}`}>
                                        <div>
                                            <Image
                                                src={_04}
                                                alt="_04"
                                                className="!w-12 !h-12"
                                            />
                                        </div>

                                        <div className="!mt-4">
                                            <p className={`!font-semibold ${!screen768 ? (!screen550 ? (!screen409 ? (screen380 ? `!text-[1.3rem]` : `!text-[1.25rem]`) : `!text-[1.32rem]`) : `!text-[1.37rem]`) : `!text-[1.285rem] lg:!text-[1.37rem] xl:!text-[1.47rem] ${screen1710 ? `2xl:!text-[2.1rem]` : `2xl:!text-[1.775rem]`} !whitespace-nowrap`}`}>
                                                {listOfData[3].heading}
                                            </p>
                                            <p className={`${!showOptions ? `!w-[80%] md:!w-[60%]` : `!w-[80%]`} !text-black !text-xs !leading-[1.4375rem] !font-[400] !mt-1 ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] ${!screen1280 ? (!screen768 ? (!screen600 ? (!screen550 ? (screen450 ? `!w-[77%]` : `!w-[75%]`) : `!w-[19rem]`) : `!w-[25rem]`) : `!w-[16rem]`) : `!w-[18rem]`} ${screen1710 ? `2xl:!text-[1.17rem] ${showOptions && `2xl:!w-[33rem]`} !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                                {listOfData[3].text}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>

                </div>

            </div>


            <div className={
                showOptions ? `
                    flex justify-center !pr-28
                    ${!screen1910 ? (!screen1710 ? (!screen1280 ? (!screen1228 ? (!screen1168 ? (!screen1108 ? (!screen1064 ? (!screen1024 ? (!screen978 ? (!screen928 ? (!screen878 ? (screen808 ? `!-ml-[9.85rem] !-mt-[9.75rem]` : `!-ml-[8.55rem] !-mt-40`) : `!-ml-[12.55rem] !-mt-[10.5rem]`) : `!-ml-[12.95rem] !-mt-[10.75rem]`) : `!-ml-[13.75rem] !-mt-[10.95rem]`) : `!-ml-[16.55rem] !-mt-[11.5rem]`) : `!-ml-[17.05rem] !-mt-[12.75rem]`) : `!-ml-[18.05rem] !-mt-[12.15rem]`) : `!-ml-[19.55rem] !-mt-[12.55rem]`) : `!-ml-[20.75rem] !-mt-[11.85rem]`) : `!-ml-[24.75rem] 2xl:!-ml-[32.15rem] !-mt-[10.85rem]`) : `!-ml-[24.75rem] 2xl:!-ml-[48.95rem] !-mt-[10.85rem]`) : `!-ml-[24.75rem] 2xl:!-ml-[54.95rem] !-mt-[10.85rem]`}
                 ` : `
                    flex justify-center !pr-28
                    ${!screen2030 ? (!screen1910 ? (!screen1710 ? (!screen1280 ? (!screen1228 ? (!screen1168 ? (!screen1108 ? (!screen1064 ? (!screen1024 ? (!screen978 ? (!screen928 ? (!screen878 ? (screen808 ? `!-ml-[19.85rem] !-mt-[9.75rem]` : `!-ml-[17.55rem] !-mt-40`) : `!-ml-[24.55rem] !-mt-[10.5rem]`) : `!-ml-[26.35rem] !-mt-[10.75rem]`) : `!-ml-[29.75rem] !-mt-[10.95rem]`) : `!-ml-[30.05rem] !-mt-[11.5rem]`) : `!-ml-[33.05rem] !-mt-[12.75rem]`) : `!-ml-[34.05rem] !-mt-[12.15rem]`) : `!-ml-[35.55rem] !-mt-[12.55rem]`) : `!-ml-[39.75rem] !-mt-[11.85rem]`) : `!-ml-[40.75rem] 2xl:!-ml-[57.15rem] !-mt-[10.85rem]`) : `!-ml-[41.75rem] 2xl:!-ml-[60.15rem] !-mt-[10.85rem]`) : `!-ml-[24.75rem] 2xl:!-ml-[64.95rem] !-mt-[10.85rem]`) : `!-ml-[24.75rem] 2xl:!-ml-[66.95rem] !-mt-[10.85rem]`}
                `}
            >
                <div className={`!hidden md:!flex !justify-end ${!screen1228 ? (!screen1168 ? (!screen928 ? (screen808 ? `!w-[15.5%]` : `!w-[15%]`) : `!w-[15.15%]`) : `!w-[13.8%]`) : `!w-[13.3%]`}`}>
                    <Image
                        src={leftarrowbig}
                        alt="leftarrowbig"
                    />
                </div>
            </div>


            <div className={
                showOptions ? `
                    flex justify-center !pr-28
                    ${!screen1910 ? (!screen1710 ? (!screen1228 ? (!screen1168 ? (!screen1108 ? (!screen1064 ? (!screen1024 ? (!screen978 ? (!screen928 ? (!screen878 ? (screen808 ? `!ml-[10.55rem] !-mt-[19rem]` : `!ml-[10.15rem] !-mt-72`) : `!ml-[12.85rem] !-mt-[18.5rem]`) : `!ml-[15.65rem] !-mt-[18.75rem]`) : `!ml-[17.15rem] !-mt-[18.95rem]`) : `!ml-[9.05rem] !-mt-[21.85rem]`) : `!ml-[10.05rem] !-mt-[20.75rem]`) : `!ml-[11.05rem] !-mt-[21.15rem]`) : `!ml-[12.05rem] !-mt-[20.25rem]`) : `!ml-[13.05rem] 2xl:!ml-[16.35rem] !-mt-[21.05rem]`) : `!ml-[13.05rem] 2xl:!ml-[4.95rem] !-mt-[21.05rem]`) : `!ml-[13.05rem] 2xl:!ml-[9.95rem] !-mt-[21.05rem]`}
                ` : `
                    flex justify-center !pr-28
                    ${!screen2030 ? (!screen1910 ? (!screen1710 ? (!screen1228 ? (!screen1168 ? (!screen1108 ? (!screen1064 ? (!screen1024 ? (!screen978 ? (!screen928 ? (!screen878 ? (screen808 ? `!ml-[0.85rem] !-mt-[19rem]` : `!ml-[1.95rem] !-mt-72`) : `!-ml-[2.85rem] !-mt-[18.5rem]`) : `!-ml-[6.15rem] !-mt-[18.75rem]`) : `!-ml-[7.95rem] !-mt-[18.95rem]`) : `!-ml-[11.85rem] !-mt-[21.85rem]`) : `!-ml-[14.05rem] !-mt-[20.75rem]`) : `!-ml-[15.05rem] !-mt-[21.15rem]`) : `!-ml-[16.95rem] !-mt-[20.25rem]`) : `!-ml-[23.05rem] 2xl:!-ml-[36.35rem] !-mt-[21.05rem]`) : `!ml-[13.05rem] 2xl:!-ml-[31.95rem] !-mt-[21.05rem]`) : `!ml-[13.05rem] 2xl:!-ml-[37.25rem] !-mt-[21.05rem]`) : `!ml-[13.05rem] 2xl:!-ml-[30.05rem] !-mt-[21.05rem]`}
                `}
            >
                <div className={`!hidden md:!flex !justify-end ${screen808 ? `!w-[28%]` : `!w-[25%]`}`}>
                    <Image
                        src={rightarrowbig}
                        alt="rightarrowbig"
                    />
                </div>
            </div>


            {
                !showOptions && (
                    <div className="!ml-[47rem] !mt-60">
                        <div className={
                            showOptions ? `
                            flex justify-center !pr-28
                            ${!screen1910 ? (!screen1710 ? (!screen1280 ? (!screen1228 ? (!screen1168 ? (!screen1108 ? (!screen1064 ? (!screen1024 ? (!screen978 ? (!screen928 ? (!screen878 ? (screen808 ? `!-ml-[9.85rem] !-mt-[9.75rem]` : `!-ml-[8.55rem] !-mt-40`) : `!-ml-[12.55rem] !-mt-[10.5rem]`) : `!-ml-[12.95rem] !-mt-[10.75rem]`) : `!-ml-[13.75rem] !-mt-[10.95rem]`) : `!-ml-[16.55rem] !-mt-[11.5rem]`) : `!-ml-[17.05rem] !-mt-[12.75rem]`) : `!-ml-[18.05rem] !-mt-[12.15rem]`) : `!-ml-[19.55rem] !-mt-[12.55rem]`) : `!-ml-[20.75rem] !-mt-[11.85rem]`) : `!-ml-[24.75rem] 2xl:!-ml-[32.15rem] !-mt-[10.85rem]`) : `!-ml-[24.75rem] 2xl:!-ml-[48.95rem] !-mt-[10.85rem]`) : `!-ml-[24.75rem] 2xl:!-ml-[54.95rem] !-mt-[10.85rem]`}
                         ` : `
                            flex justify-center !pr-28
                            ${!screen2030 ? (!screen1910 ? (!screen1710 ? (!screen1280 ? (!screen1228 ? (!screen1168 ? (!screen1108 ? (!screen1064 ? (!screen1024 ? (!screen978 ? (!screen928 ? (!screen878 ? (screen808 ? `!-ml-[19.85rem] !-mt-[9.75rem]` : `!-ml-[17.55rem] !-mt-40`) : `!-ml-[24.55rem] !-mt-[10.5rem]`) : `!-ml-[26.35rem] !-mt-[10.75rem]`) : `!-ml-[29.75rem] !-mt-[10.95rem]`) : `!-ml-[30.05rem] !-mt-[11.5rem]`) : `!-ml-[33.05rem] !-mt-[12.75rem]`) : `!-ml-[34.05rem] !-mt-[12.15rem]`) : `!-ml-[35.55rem] !-mt-[12.55rem]`) : `!-ml-[41.75rem] !-mt-[11.85rem]`) : `!-ml-[40.75rem] 2xl:!-ml-[32.15rem] !-mt-[11.85rem]`) : `!-ml-[41.75rem] 2xl:!-ml-[17.25rem] !-mt-[12.25rem]`) : `!-ml-[24.75rem] 2xl:!-ml-[16.95rem] !-mt-[11.85rem]`) : `!-ml-[24.75rem] 2xl:!-ml-[9.95rem] !-mt-[11.85rem]`}
                        `}
                        >
                            <div className={`!hidden md:!flex !justify-end ${!screen1228 ? (!screen1168 ? (!screen928 ? (screen808 ? `!w-[9.75rem] !-mt-6 !ml-14` : `!w-[9.05rem] !-mt-3`) : `!w-[12.75rem] !-mt-14 !ml-32`) : `!w-[12.75rem] !-mt-14 !ml-72`) : `!w-[12.75rem] !-mt-14 !ml-96`} ${screen1024 && `!mt-[0.55rem]`}`}>
                                <Image
                                    src={leftarrowbig}
                                    alt="leftarrowbig"
                                />
                            </div>
                        </div>
                    </div>
                )
            }


            <div className={
                showOptions ? `
                    !ml-40 !flex !justify-end
                    ${!screen878 ? (!screen808 ? (!screen768 ? (!screen450 ? (screen432 ? `!mt-[2.55rem]` : `!mt-[1.15rem]`) : `!mt-[4.0625rem]`) : `!-mt-[0.9375rem]`) : `!-mt-[1.875rem]`) : `!-mt-[3.75rem]`}
                `: `
                    !ml-40 !flex !justify-end
                    ${!screen878 ? (!screen808 ? (!screen768 ? (!screen450 ? (screen432 ? `!-mt-[3.55rem]` : `!-mt-[3.15rem]`) : `!-mt-[4.125rem]`) : `!-mt-[5.9375rem]`) : `!-mt-[5.875rem]`) : `!-mt-[5.75rem]`}
                `}
            >
                <Image
                    src={redshadowstar}
                    alt="redshadowstar"
                    className="!w-80 !h-80"
                />
            </div>

        </div>
    )
}

export default ThirdSection;