import GitHubIcon from "./Icons/GitHubIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import TwitterIcon from "./Icons/TwitterIcon";

import Link from "next/link";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/lorenzopalaia",
    icon: <GitHubIcon className="w-6 h-6" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lorenzopalaia/",
    icon: <LinkedInIcon className="w-6 h-6" />,
  },
  /* {
    name: "Instagram",
    href: "https://www.instagram.com/lorenzo_palaia/",
    icon: <InstagramIcon className="w-6 h-6" />,
  }, */
  {
    name: "Twitter",
    href: "https://twitter.com/lorenzo_palaia",
    icon: <TwitterIcon className="w-5 h-5" />,
  },
];

const Socials = () => {
  return (
    <ul className="flex items-center mt-8 ml-1" aria-label="Social media">
      {socials.map((social) => (
        <li key={social.name} className="mr-5 text-xs shrink-0">
          <Link
            className="block hover:text-slate-200"
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={social.name + " (opens in a new tab)"}
            title={social.name}
          >
            <span className="sr-only">{social.name}</span>
            {social.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
