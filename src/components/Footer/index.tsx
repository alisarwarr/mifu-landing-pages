//NEXTJS
import Image from 'next/image';
//IMAGES
import { logowhite } from '../../images';
//MEDIA-QUERIES
import useMediaQueries from '../../utils/useMediaQueries';


function Footer({
    executeScroll_HOME,
    executeScroll_FEATURES,
    executeScroll_FEEDBACK,
    executeScroll_FAQS
}: {
    executeScroll_HOME: () => void;
    executeScroll_FEATURES: () => void;
    executeScroll_FEEDBACK: () => void;
    executeScroll_FAQS: () => void;
}) {
    const {
        screen768,
        screen600
    } = useMediaQueries();


    return (
        <div className={`!bg-[#18070A] !text-white !w-full !flex !items-center !flex-col !relative ${!screen768 ? (screen600 ? `!mt-[4.8rem]` : `!-mt-11`) : `!-mt-[1.5rem]`} lg:!-mt-[7.035rem] xl:!-mt-[6.035rem] md:!flex-row md:!justify-around md:!pb-10`}>

            <Image
                src={logowhite}
                alt="logowhite"
                className="!w-16 !h-6 !mt-5 md:!mt-11 md:!w-20 md:!h-8"
            />

            <div className="!flex !items-center !mt-7 md:!mt-16 !mb-4 md:!pl-20 lg:!pl-24 xl:!pl-[7.445rem]">
                <button onClick={executeScroll_HOME} className="!text-xs lg:!text-sm xl:!text-base 2xl:!text-[1.175rem] !text-white hover:!text-[#EE4A65]"> Home </button>
                <button onClick={executeScroll_FEATURES} className="!text-xs lg:!text-sm xl:!text-base 2xl:!text-[1.175rem] !text-white hover:!text-[#EE4A65] !ml-4 md:!ml-3.5"> Features </button>
                <button onClick={executeScroll_FEEDBACK} className="!text-xs lg:!text-sm xl:!text-base 2xl:!text-[1.175rem] !text-white hover:!text-[#EE4A65] !ml-4 md:!ml-3.5"> Feedback </button>
                <button onClick={executeScroll_FAQS} className="!text-xs lg:!text-sm xl:!text-base 2xl:!text-[1.175rem] !text-white hover:!text-[#EE4A65] !ml-4 md:!ml-3.5"> FAQs </button>
            </div>

            <p className="!hidden md:!block !text-xs lg:!text-sm xl:!text-base 2xl:!text-[1.175rem] !text-white !cursor-pointer !mt-12">
                Copyright by Mifu, 2022
            </p>

        </div>
    )
}

export default Footer;