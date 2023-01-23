//REACTJS
import { useRef } from 'react';
//COMPONENTS
import {
    FirstSection,
    SecondASection,
    SecondBSection,
    ThirdSection,
    FourthSection,
    FifthSection,
    SixthSection,
    SeventhSection,
    EightSection,
    Footer
} from '../components';
//IMAGES
import { team4, team5, team6 } from '../images';
//MEDIA-QUERIES
import useMediaQueries from '../utils/useMediaQueries';


export default function Creator() {
    const {
        screen1710,
        screen1280,
        screen1112,
        screen1100,
        screen768,
        screen600,
        screen450,
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
                heading={<> Join the micro-{screen1112 && <br />}influencer community today! </>}
                text="Receive opportunities for fresh content, brand partnerships and free support to help differentiate and grow your profile."
                showInput={false}
                buttonText="Join Now"
            />

            <SecondASection
                showOptions={false}
                listOfData={[
                    { heading: "Brand Partnerships", text: "Connect with brands looking to market unique events, exclusive products and pretty much anything else under the sun!" },
                    { heading: "Hassle Free", text: "The mifu platform makes it easy to view, asses, and accept partnership offers with integrated content guidelines and payments." },
                    { heading: "Fresh content", text: "Gain access to exclusive events, products and opportunities that are relevant to your audience – providing you with fresh and exciting content possibilities!" }
                ]}
            />

            <SecondBSection
                heading={<> Some brands {screen768 && !screen1280 && <br />} we’ve {(!screen768 || screen1280) && <br />} worked {screen768 && !screen1100 && <br />} with </>}
            />

            <ThirdSection
                showOptions={false}
                listOfData={[
                    { heading: "Sign up", text: "Here you can view our support articles while you wait for your first offer" },
                    { heading: "Review offers", text: "Mifu will connect you with brands relevant to your profile and audience" },
                    { heading: "Do your thing!", text: "Create your unique content based on the brands brief" },
                    { heading: "Get paid!", text: "Receive free products, events, or cash payments" }
                ]}
            />

            <FourthSection
                ref_FEATURES={ref_FEATURES}
                heading={<> Making your life {!screen450 && <br />} {screen1710 && <br />} easy </>}
                text="Wasting time - we hate it! The mifu automated workflows unlock micro-influencer marketing at an unprecedented scale. Work with more influencers than ever before."
                showOptions={false}
                image={team4}
            />

            <FifthSection
                heading={<> Free Support </>}
                text="Access free guidance and support articles directed at emerging content creators looking to improve their follower count, engagement rate or general content!"
                showOptions={false}
                image={team5}
            />

            <SixthSection
                ref_FEEDBACK={ref_FEEDBACK}
                heading={<> Work with {!screen405 && <br />} brands {screen405 && <br />} relevant {!screen405 && <br />} to you! </>}
                text="Once you have signed up, mifu will connect you with brands that are specifically relevant to your profile, so that you will be provided with content opportunities that your audience will love."
                showOptions={false}
                image={team6}
            />

            <SeventhSection
                ref_FAQS={ref_FAQS}
                showOptions={false}
                listOfData={[
                    { heading: "Am I a micro-influencer?", text: "Anyone with a following ranging from 1,000 to 50,000 is welcome in the mifu community, and would be likely to receive brand partnership offers." },
                    { heading: "What does mifu do?", text: "At mifu, we're always looking for exciting, innovative brands who specialise in a variety of sectors so that we can offer you relevant partnerships." },
                    { heading: "Which brands will approach me?", text: "Mifu is always partnering with new exciting brands of all walks of life, meaning we’re likely to find you a brand which appeals to your profile’s unique niche." },
                    { heading: "Can I choose which brands I work with?", text: "Once signed up, you will be sent offers to partner with brands relevant to you and your audience, but if you’re not interested in certain brands, you can wait for a better offer to come along." },
                ]}
            />

            <EightSection
                heading="Start the"
                text="matchmaking today"
                buttonText="Join Now"
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