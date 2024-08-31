import SocialButton from "@/components/SocialButtons";
import {FacebookSVG, GitHubSVG, GmailSVG, InstagramSVG, LinkedInSVG} from "@/ui/image";


export default function SocialMediaSection() {

    return (<div className="flex gap-[5px] justify-center">
        <SocialButton text={"Email"} link={"mailto:hamzaoui1225@gmail.com"} color={"red"}>
            <GmailSVG/>
        </SocialButton>
        <SocialButton text={"LinkedIn"} link={"https://www.linkedin.com/in/mohamed-nour-hamzaoui-781627194/"} color={"#0a66c2"}>
            <LinkedInSVG/>
        </SocialButton>
        <SocialButton text={"GitHub"} link={"https://github.com/hamzaoui1225"} color={"black"}>
            <GitHubSVG/>
        </SocialButton>
        <SocialButton text={"Facebook"} link={"https://www.facebook.com/Nour1225"} color={"#0048ff"}>
            <FacebookSVG/>
        </SocialButton>
        <SocialButton text={"Instagram"} link={"https://www.instagram.com/mohamednour1225"} color={"#fe107c"}>
            <InstagramSVG />
        </SocialButton>
    </div>);
}