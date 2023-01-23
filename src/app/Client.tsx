//REACTJS
import { useRef } from 'react';
//COMPONENTS
import {
    FirstSection,
    SecondASection,
    ThirdSection,
    FourthSection,
    FifthSection,
    SixthSection,
    SeventhSection,
    EightSection,
    Footer
} from '../components';
//IMAGES
import { team1, team2, team3 } from '../images';
//MEDIA-QUERIES
import useMediaQueries from '../utils/useMediaQueries';


export default function Client() {
    const {
        screen1112,
        screen768,
        screen600,
        screen405
    } = useMediaQueries();


    const ref_HOME: any = useRef<HTMLInputElement>(null);
    const executeScroll_HOME = (): void => ref_HOME.current.scrollIntoView({ behavior: 'smooth' });

    const ref_FEATURES: any = useRef<HTMLInputElement>(null);
    const executeScroll_FEATURES = (): void => ref_FEATURES.current.scrollIntoView({ behavior: 'smooth' });

    const ref_FEEDBACK: any = useRef<HTMLInputElement>(null);
    const executeScroll_FEEDBACK = (): void => ref_FEEDBACK.current.scrollIntoView({ behavior: 'smooth' });

    const ref_FAQS: any = useRef<HTMLInputElement>(null);
    const executeScroll_FAQS = (): void => ref_FAQS.current.scrollIntoView({ behavior: 'smooth' });


    return (
        <div className={`
            !overflow-x-hidden !overflow-y-auto
            !h-[100%] !w-[100%] !absolute !top-0 !bottom-0
            ${!screen600 && `!flex !items-center !flex-col`}
        `}>

            <FirstSection
                executeScroll_HOME={executeScroll_HOME}
                executeScroll_FEATURES={executeScroll_FEATURES}
                executeScroll_FEEDBACK={executeScroll_FEEDBACK}
                executeScroll_FAQS={executeScroll_FAQS}
                ref_HOME={ref_HOME}
                heading={<> Micro-influencer {screen1112 && <br />} marketing, made easy. </>}
                text="AI-driven campaign creation, operation and analysis to help your business reach targeted customers for less. Mifu enables micro-influencer marketing at scale, with zero hassle."
                showInput={true}
                buttonText="Subscribe"
            />

            <SecondASection
                heading={
                    screen768
                        ? <> Go beyond {!screen768 && <br />} traditional marketing </>
                        : <> Go beyond <br /> traditional marketing </>
                }
                text="The age of the micro-influencer is nigh! Macro Influencer marketing offers better engagement rates than ever before. But why settle for better? Micro-influencers are proven to offer the highest engagement rates of any form of marketing, to date. Unlock it today!"
                showOptions={true}
                listOfData={[
                    { heading: "Brand-Influencer Management", text: "Fully managed influencer management and campaign operation. Save countless hours of work with mifu." },
                    { heading: "Precise Audience Targeting", text: "Micro-influencers have niche targeted audiences who trust them. Spendyour budget on reaching the people who care about your brand." },
                    { heading: "Cost Effective", text: "Unlock a greater Return On Investment (ROI) through the influencers with the highest engagement rates." }
                ]}
            />

            <ThirdSection
                showOptions={true}
                listOfData={[
                    { heading: "Discover & Analyse", text: "Assess the influencers found for your brand & review analytics to find those which are most effective, relevant, and cost-appropriate for your campaign." },
                    { heading: "Select & Invite", text: "View influencer statistics & select which influencers fit your campaign. Click 'invite all' and mifu will send automated invites to your selected influencers." },
                    { heading: "Track Campaign Progress", text: "Track your invited influencers' progress in joining the campaign, creating content, and submitting content." }
                ]}
            />

            <FourthSection
                ref_FEATURES={ref_FEATURES}
                heading={<> Save Time </>}
                text="Wasting time - we hate it! The mifu automated workflows unlock micro-influencer marketing at an unprecedented scale. Work with more influencers than ever before."
                showOptions={true}
                image={team1}
            />

            <FifthSection
                heading={<> Zero Hassle </>}
                text="At mifu, we’re at war with hassle! Our platform is intuitive by nature, allowing you to focus on what matters most - your brand. Scale influencer management without the burden of admin."
                showOptions={true}
                image={team2}
            />

            <SixthSection
                ref_FEEDBACK={ref_FEEDBACK}
                heading={<> Genuine {!screen405 && <br />} Audiences </>}
                text="Using micro-influencers, through mifu, enables you to reach the most authentic and targeted audiences - pinpointing your niche rather than the scatter-gun approach of macro-influencer marketing."
                showOptions={true}
                image={team3}
            />

            <SeventhSection
                ref_FAQS={ref_FAQS}
                showOptions={true}
                listOfData={[
                    { heading: "How does mifu work?", text: "Mifu searches through millions of micro-influencers and performs AI-driven analysis to find you a set of influencers that will represent your brand best. Take the list or use mifu to automatically manage a potentially infinite number of micro-influencers." },
                    { heading: "What is a micro-influencer?", text: "Any influencer ranging from having 1,000 to 15,000 followers." },
                    { heading: "Why are micro-influencers more effective?", text: "Micro-influencers’ posts and stories are shown to hold followers’ attention longer than macro-influencers’ posts, with an engagement rate of 7.5% compared with macro influencers’ 0.8%." },
                    { heading: "What is a mifu campaign?", text: "Mifu generates a campaign through finding relevant micro-influencers instantaneously, before showing your business a few of the influencers mifu has found for your business. If you choose to proceed, mifu will contact the influencers and provide them with a sample of your product to trial, review and use on their Instagram account." }
                ]}
            />

            <EightSection
                heading="Do you have any question?"
                text="Feel free to contact us"
                buttonText="Contact Us"
            />

            <Footer
                executeScroll_HOME={executeScroll_HOME}
                executeScroll_FEATURES={executeScroll_FEATURES}
                executeScroll_FEEDBACK={executeScroll_FEEDBACK}
                executeScroll_FAQS={executeScroll_FAQS}
            />

        </div>
    )
}