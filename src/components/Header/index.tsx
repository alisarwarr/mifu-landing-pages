//REACTJS
import { useState, useEffect } from 'react';
//NEXTJS
import Image from 'next/image';
import { useRouter } from 'next/router';
//MATERIAL-UI
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//IMAGES
import { logocolorful, line, list, arrowcircle, star } from '../../images';
//MEDIA-QUERIES
import useMediaQueries from '../../utils/useMediaQueries';


function Header({
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
        screen970,
        screen640,
        screen500,
        screen430,
        screen400
    } = useMediaQueries();


    const [anchorElUser, setAnchorElUser] = useState<boolean>(false);
    const [selectedMenu, setSelectedMenu] = useState<string>("Home");
    const [hideMenuBar, setHideMenuBar] = useState<boolean>(false);


    useEffect(() => {
        if (screen640) {
            setAnchorElUser(false);
            setSelectedMenu("Home");
        }
    }, [screen640]);


    const router = useRouter();


    return (
        <div className="!bg-white !shadow-2xl !mt-10 !pt-5 !pb-5 !rounded-xl !w-[87%] sm:!w-[86%] sm:!h-[4.5rem] lg:!w-[96%]">

            <div className="!flex !items-center !ml-4">

                <div className={`${!screen400 && `!hidden`} !flex-1 sm:!flex-auto !mb-0.5 md:!w-[170px] sm:!flex sm:!items-center`}>
                    <div className="sm:!mr-4 lg:!mr-8 xl:!mr-9 2xl:!mr-10">
                        <Image
                            src={logocolorful}
                            alt="logocolorful"
                            className="!w-16 !h-6 2xl:!w-[4.5rem] 2xl:!h-7 sm:!-mt-2.5 md:!mt-0 lg:!-mt-1 2xl:!-mt-[0.625rem]"
                        />
                    </div>

                    <div className="!hidden sm:!flex sm:!items-center sm:!-mt-1 md:!mt-0.5">
                        <div className="!flex !items-center lg:!mb-1 2xl:!-mt-1.5">
                            <button onClick={executeScroll_HOME} className="!text-xs lg:!text-sm xl:!text-base 2xl:!text-[1.175rem] !text-[#8C8385] hover:!text-[#EE4A65]"> Home </button>
                            <button onClick={executeScroll_FEATURES} className="!text-xs lg:!text-sm xl:!text-base 2xl:!text-[1.175rem] !text-[#8C8385] hover:!text-[#EE4A65] !ml-2 md:!ml-2.5 lg:!ml-7"> Features </button>
                            <button onClick={executeScroll_FEEDBACK} className="!text-xs lg:!text-sm xl:!text-base 2xl:!text-[1.175rem] !text-[#8C8385] hover:!text-[#EE4A65] !ml-2 md:!ml-2.5 lg:!ml-7"> Feedback </button>
                            <button onClick={executeScroll_FAQS} className="!text-xs lg:!text-sm xl:!text-base 2xl:!text-[1.175rem] !text-[#8C8385] hover:!text-[#EE4A65] !ml-2 md:!ml-2.5 lg:!ml-7"> FAQs </button>
                        </div>

                        <button
                            className="!text-[0.715rem] md:!text-[0.8rem] xl:!text-[0.825rem] 2xl:!text-[0.945rem] !text-white !bg-[#18070A] !w-[7rem] !h-7 md:!w-32 md:!h-8 xl:!w-[8.45rem] xl:!h-[2.05rem] 2xl:!w-[9.15rem] 2xl:!h-[2.55rem] !pl-2 md:!pl-2.5 !pr-1 md:!pr-1.5 !leading-relaxed 2xl:!leading-[2.65rem] !rounded-full !flex !items-center !justify-center !ml-4 lg:!ml-8 lg:!mb-1 xl:!-mt-0.5 2xl:!-mt-1.5"
                            onClick={() => {
                                if (router.pathname === "/") {
                                    router.push("/creator");
                                }
                                else if (router.pathname === "/creator") {
                                    router.push("/");
                                }
                            }}
                        >
                            {router.pathname === "/" && <span> For Creator</span>}
                            {router.pathname === "/creator" && <span>For Brands</span>}
                            <Image
                                src={star}
                                alt="star"
                                className="!w-3.5 !h-3.5 lg:!w-4 lg:!h-4 2xl:!w-5 2xl:!h-5 !ml-1 xl:!ml-1 xl:mt-0.5 !mb-0.5"
                            />
                        </button>
                    </div>
                </div>


                <div className="!hidden sm:!block sm:!-mt-[0.415rem] md:!mt-0.5 lg:!-mt-[0.315rem] 2xl:!-mt-[0.6rem]">
                    <div className="!flex !flex-col md:!flex-row !ml-10 md:!ml-2 !-mt-0.5 !pr-3">
                        <Image
                            src={line}
                            alt="line"
                            className="!hidden md:!block !mr-2 2xl:!w-[30px] 2xl:!h-[30px] 2xl:!mt-1.5 2xl:!-mr-0.5"
                        />

                        <button
                            className={`!bg-[#FCEFF6] !text-[0.7rem] ${screen970 ? `md:!text-[0.815rem] !leading-loose` : `md:!text-[0.785rem]`} lg:!text-base 2xl:!text-[1.125rem] 2xl:!leading-10 !text-[#EE4A65] !font-semibold !w-24 !h-6 md:!w-28 md:!h-8 lg:!w-[7.5rem] lg:!h-[2.5rem] 2xl:!w-[7.8rem] 2xl:!h-[2.8rem] !pl-1 !pr-1 !rounded-lg lg:!rounded-xl !flex !items-center !justify-center`}
                            onClick={() => router.push("/login")}
                        >
                            <span> Login </span>
                            <Image
                                src={arrowcircle}
                                alt="arrowcircle"
                                className={`!w-[0.925rem] !h-[0.9rem] lg:!w-[1.2rem] lg:!h-[1.1rem] 2xl:!w-[1.465rem] 2xl:!h-[1.4rem] !ml-1.5 ${screen970 ? `!mt-0` : `!mt-0.5`}`}
                            />
                        </button>

                        <button
                            className={`!bg-[#EE4A65] !text-[0.7rem] ${screen970 ? `md:!text-[0.815rem] !leading-loose` : `md:!text-[0.785rem]`} lg:!text-base 2xl:!text-[1.125rem] 2xl:!leading-10 !text-white !font-semibold !w-24 !h-6 md:!w-28 md:!h-8 lg:!w-[7.5rem] lg:!h-[2.5rem] 2xl:!w-[7.8rem] 2xl:!h-[2.8rem] !pl-1 !pr-1 !rounded-lg lg:!rounded-xl !flex !items-center !justify-center !mt-1 md:!mt-0 md:!ml-2.5`}
                            onClick={() => router.push("/signup")}
                        >
                            Register
                        </button>
                    </div>
                </div>


                <div className={`sm:!hidden !flex !items-center ${!screen400 && `!flex-col !justify-center !w-full`}`}>
                    <div className={`${screen400 ? `!hidden` : `!mb-3`}`}>
                        <Image
                            src={logocolorful}
                            alt="logocolorful"
                            className="!w-16 !h-6"
                        />
                    </div>

                    <div className="!flex !items-center">
                        <button
                            className={`!text-[0.715rem] ${!screen400 && `!text-[0.72rem]`} ${!screen430 && screen400 && `!text-[0.615rem]`} !text-white !bg-[#18070A] ${screen400 && screen430 && `!w-[7rem] !h-7 !pl-2 !pr-1`} ${!screen400 && `!w-[7rem] !h-7 !pl-2 !pr-1 !text-[0.6rem]`} ${!screen430 && screen400 && `!w-[6rem] !h-5 !pt-0.5 !pb-0.5 !pl-1 !pr-0`} !leading-relaxed !rounded-full !flex !items-center !justify-center ${!screen400 && `!ml-0`} ${(!screen430 && screen400) ? `!ml-0` : `!ml-4`}`}
                            onClick={() => {
                                if (router.pathname === "/") {
                                    router.push("/creator");
                                }
                                else if (router.pathname === "/creator") {
                                    router.push("/");
                                }
                            }}
                        >
                            {router.pathname === "/" && <span> For Creator</span>}
                            {router.pathname === "/creator" && <span>For Brands</span>}
                            <Image
                                src={star}
                                alt="star"
                                className="!w-3.5 !h-3.5 lg:!w-4 lg:!h-4 2xl:!w-5 2xl:!h-5 !ml-1 xl:!ml-1 xl:mt-0.5 !mb-0.5"
                            />
                        </button>

                        <div className={!screen400 ? `!mt-0 !ml-2 !mr-2` : `!mr-3.5 !ml-2`}>
                            <button
                                className={`!bg-[#FCEFF6] !text-[0.7rem] ${!screen430 && screen400 && `!text-[0.615rem]`} ${!screen400 && `!text-[0.7rem]`} !text-[#EE4A65] !font-semibold ${!screen430 && screen400 && `!w-auto !h-[0.175rem] !leading-0 !pl-3.5 !pr-3 !pt-[0.625rem] !pb-[0.625rem]`} ${screen400 && screen430 && `!leading-[2rem] !w-auto !h-6 !pl-3 !pr-3 !pt-[0.9rem] !pb-[0.9rem]`} ${!screen400 && `!w-auto !h-6 !pl-3 !pr-3 !pt-[0.9rem] !pb-[0.9rem] !text-[0.6rem]`} !rounded-full !flex !items-center !justify-center`}
                                onClick={() => router.push("/login")}
                            >
                                <span className={`${!screen400 && `!mt-0.5`}`}> Login / Register </span>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="sm:!hidden">
                    <div className="!mb-0.5 !w-10">
                        <Image
                            src={list}
                            alt="list"
                            className={`!w-6 !h-6 !-ml-0.5 ${!screen400 && `!w-5 !h-5`}`}
                            onClick={() => { setAnchorElUser(true); setHideMenuBar(false); }}
                        />
                    </div>


                    <Menu
                        keepMounted
                        open={anchorElUser}
                        onClose={() => setAnchorElUser(false)}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        className={`${hideMenuBar && `!hidden`} !mt-[5.65rem] ${!screen500 ? (screen400 ? `!-ml-3.5` : `!-ml-2`) : `!-ml-7`}`}
                    >
                        {
                            [
                                { name: "Home", func: executeScroll_HOME },
                                { name: "Features", func: executeScroll_FEATURES },
                                { name: "Feedback", func: executeScroll_FEEDBACK },
                                { name: "FAQs", func: executeScroll_FAQS }
                            ]
                                .map((
                                    { name, func }: { name: string, func: () => void }
                                ) => (
                                    <MenuItem
                                        key={name}
                                        className={`${selectedMenu === name && `!bg-[#eee]`} !pt-3 !pb-3`}
                                        onClick={() => {
                                            setSelectedMenu(name);
                                            setHideMenuBar(true);
                                            setTimeout(() => { setAnchorElUser(false); }, 2000);
                                        }}
                                    >
                                        <button onClick={func} className="!text-sm"> {name} </button>
                                    </MenuItem>
                                ))
                        }
                    </Menu>
                </div>

            </div>

        </div>
    )
}

export default Header;