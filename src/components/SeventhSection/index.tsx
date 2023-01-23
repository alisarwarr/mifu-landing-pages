//REACTJS
import { useState } from 'react';
//NEXTJS
import Image from 'next/image';
//MATERIAL-UI
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
//IMAGES
import { pluslarge, minuslarge, plussmall, minussmall, ribbon } from '../../images';
//MEDIA-QUERIES
import useMediaQueries from '../../utils/useMediaQueries';


function SeventhSection({
    ref_FAQS,
    showOptions,
    listOfData
}: {
    ref_FAQS: any;
    showOptions: boolean;
    listOfData: { heading: string; text: string }[];
}) {
    const {
        screen1710,
        screen768,
        screen600,
        screen550,
        screen508,
        screen483,
        screen450,
        screen376
    } = useMediaQueries();


    const [expanded, setExpanded] = useState<number | false>(0);

    const handleChange = (
        (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        }
    );


    return (
        <div ref={ref_FAQS} className={`${!showOptions && `!-mt-7 md:!-mt-44 lg:!-mt-[10.05rem] ${screen1710 ? `xl:!-mt-[10.75rem]` : `xl:!-mt-[14.75rem]`}`} ${screen1710 ? `xl:!-mt-32` : `xl:!-mt-40`} ${screen508 ? ((expanded === false) ? ` !-mb-1` : `!-mb-28`) : (screen376 ? ((expanded === false) ? ` !-mb-24` : `!-mb-4`) : ((expanded === false) ? ` !-mb-[5.5rem]` : `!mb-8`))} ${!screen376 ? (!screen483 && `!pb-0`) : `!pb-7`} xl:!pb-16`}>

            <div className={`!w-[85%] md:!w-[89%] 2xl:!w-[93%] !m-auto ${screen508 ? `!mb-11` : `!mb-11`} ${!screen768 ? (!screen600 ? (screen450 ? `!mt-5` : `!mt-20`) : `!mt-12`) : `!-mt-[6.5rem] lg:!-mt-20 xl:!mt-8`}`}>

                <p className={`${!screen768 ? (!screen550 ? (screen450 ? `!text-[2.15rem]` : `!text-[2rem]`) : `!text-[2.3rem]`) : `!text-[1.6785rem] lg:!text-4xl lg:!leading-snug`} !text-center !font-[700] !leading-tight lg:!text-4xl 2xl:!text-[2.75rem]`}>
                    Frequently Asked Questions
                </p>

                <div className="!mt-8 lg:!mt-9">
                    {
                        listOfData
                            .map((item: any, index: number) => (
                                <Accordion
                                    key={index}
                                    disableGutters={true}
                                    expanded={expanded === index}
                                    onChange={handleChange(index)}
                                    sx={{ '&:before': { display: 'none' } }}
                                    className={`!shadow-sm !rounded-xl !pt-1.5 !pb-1 !pl-3 !pr-1 xl:!pt-3.5 xl:!pb-3 xl:!pl-3.5 xl:!pr-1.5 2xl:!pt-7 2xl:!pb-7 2xl:!pl-5 2xl:!pr-3.5 !mt-3 !border-[1px] !border-[#D4D4D4]`}
                                >

                                    <AccordionSummary
                                        expandIcon={
                                            <Image
                                                src={
                                                    (expanded === index) ? (
                                                        screen768 ? minuslarge : minussmall
                                                    ) : (
                                                        screen768 ? pluslarge : plussmall
                                                    )
                                                }
                                                alt="expanded"
                                                className="2xl:!w-[2.75rem] 2xl:!h-[2.75rem]"
                                            />
                                        }
                                    >
                                        <span className={`!-ml-3 !font-semibold !text-base lg:!text-xl ${screen1710 ? `2xl:!text-[1.985rem]` : `2xl:!text-[1.775rem]`}`}>
                                            {item.heading}
                                        </span>
                                    </AccordionSummary>

                                    <AccordionDetails>
                                        <p className={`!-ml-3 !text-black !text-xs !leading-[1.4375rem] !font-[400] ${screen550 && `!text-[0.8rem]`} lg:!text-[0.9rem] xl:!text-[0.935rem] !-mt-3 2xl:!mt-2 !w-[99%] ${screen1710 ? `2xl:!text-[1.17rem] !leading-[1.8375rem]` : `2xl:!text-base`}`}>
                                            {item.text}
                                        </p>
                                    </AccordionDetails>

                                </Accordion>
                            ))
                    }
                </div>

            </div>


            <div className={`!-ml-3 !w-full ${!screen508 ? (!screen483 ? (screen376 ? ((expanded === false) ? `!-mt-[24.65rem]` : `!-mt-[32.25rem]`) : ((expanded === false) ? `!-mt-[26.15rem] !-ml-8` : `!-mt-[33.5rem] !-ml-8`)) : ((expanded === false) ? `!-mt-[24.65rem]` : `!-mt-[30.15rem]`)) : ((expanded === false) ? `!-mt-[30.75rem]` : `!-mt-[24rem]`)}`}>
                <Image
                    src={ribbon}
                    alt="ribbon"
                />
            </div>

        </div>
    )
}

export default SeventhSection;