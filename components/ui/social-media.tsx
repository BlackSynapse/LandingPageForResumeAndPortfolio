import { Separator } from "@radix-ui/react-separator";
import { GoMention } from "react-icons/go";
import { GoMail } from "react-icons/go";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";  // Import the LinkedIn icon

export function SocialMedia() {
    return (
        <div className="flex h-5 items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
                <GrLinkedin />  {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/in/jsei/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    LinkedIn
                </a>
            </div>
            <Separator orientation="vertical" />
            <div className="flex items-center space-x-2">
                <GoMail />
                <span>johannes@seitalahti.fi</span>
            </div>
            <Separator orientation="vertical" />
            <div className="flex items-center space-x-2">
                <GrGithub />
                <a href="https://github.com/BlackSynapse" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    github
                </a>
            </div>
        </div>
    );
}
