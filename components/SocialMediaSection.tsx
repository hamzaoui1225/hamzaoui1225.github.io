
import SocialButton from "@/components/SocialButtons";
import {FacebookSVG, GitHubSVG, GmailSVG, InstagramSVG, LinkedInSVG} from "@/ui/image";

export default function SocialMediaSection() {

    return (<div className="flex gap-[5px] justify-center pt-6">
        <SocialButton delay={0.25} link={"mailto:hamzaoui1225@gmail.com"} color={"red"}>
            <GmailSVG/>
        </SocialButton>
        <SocialButton delay={0.35} link={"https://www.linkedin.com/in/mohamed-nour-hamzaoui-781627194/"} color={"#0a66c2"}>
            <LinkedInSVG/>
        </SocialButton>
        <SocialButton delay={0.45} link={"https://github.com/hamzaoui1225"} color={"#666666"}>
            <GitHubSVG/>
        </SocialButton>
        <SocialButton delay={0.55} link={"https://www.facebook.com/Nour1225"} color={"#0048ff"}>
            <FacebookSVG/>
        </SocialButton>
        <SocialButton delay={0.65} link={"https://www.instagram.com/mohamednour1225"} color={"#fe107c"}>
            <InstagramSVG />
        </SocialButton>
    </div>);
}