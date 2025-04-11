import React from "react";
import Link from "next/link";
import GoogleLogo from "../svg/GoogleLogo";
import InstagramLogo from "../svg/InstagramLogo";

interface MenuItems {
  [key: string]: { label: string, href: string }[];
}

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const menuItems: MenuItems = {
    Menu: [
      { label: "Home", href: "/" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Survey list", href: "/survey-list" },
      { label: "Point exchange", href: "/point-exchange" },
      { label: "Raku Earn AI", href: "/rakuearn-ai" },
    ],
    Resources: [
      { label: "Contact", href: "/contact" },
      { label: "Account", href: "/account" },
    ],
  };

  const policies: string[] = [
    "Terms of Use",
    "Private Policy",
    "Refund Policy",
  ];

  return (
    <footer className={`py-12 px-10 max-sm:px-5 bg-[#F6F5F9] max-sm:py-8 ${className}`}>
      <div className="flex max-[600px]:flex-col justify-between">
        <div className="flex max-sm:flex-row max-sm:items-center flex-col gap-5 items-start mb-8">
          <div className="flex flex-col gap-5 items-start mb-8">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b4a2606fc0d129ed5f9dc4774ede3ece5dba4f4" alt="Logo" className="h-[58px] w-[172px]" />
            <div className="flex gap-3 ml-6">
              <a href="#twitter" aria-label="Twitter">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="1:352" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5083 1.50684H17.179L11.3444 8.17543L18.2083 17.2499H12.8339L8.62444 11.7463L3.80787 17.2499H1.13559L7.3763 10.1171L0.791664 1.50684H6.30254L10.1075 6.53735L14.5083 1.50684ZM13.571 15.6514H15.0508L5.49844 3.0214H3.9104L13.571 15.6514Z" fill="#212121"></path></svg>',
                  }}
                />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <InstagramLogo />
              </a>
            </div>
          </div>
          <div className="ml-6 flex gap-2 max-sm:mt-0 mt-12 items-center p-3 bg-neutral-100 rounded-full">
            <GoogleLogo />
            <p className="text-base font-bold">Install Extension</p>
          </div>
        </div>

        <div className="flex justify-between w-1/3 max-[1100px]:w-2/3 mb-8 max-sm:gap-8">
          <div className="flex gap-4 items-start cursor-pointer">
            <h3 className="mb-2.5 text-base font-bold">English</h3>
            <button aria-label="Select language" className="flex items-center">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 9.1697C16.8126 8.98345 16.5592 8.87891 16.295 8.87891C16.0308 8.87891 15.7774 8.98345 15.59 9.1697L12 12.7097L8.46001 9.1697C8.27265 8.98345 8.0192 8.87891 7.75501 8.87891C7.49082 8.87891 7.23737 8.98345 7.05001 9.1697C6.95628 9.26266 6.88189 9.37326 6.83112 9.49512C6.78035 9.61698 6.75421 9.74769 6.75421 9.8797C6.75421 10.0117 6.78035 10.1424 6.83112 10.2643C6.88189 10.3861 6.95628 10.4967 7.05001 10.5897L11.29 14.8297C11.383 14.9234 11.4936 14.9978 11.6154 15.0486C11.7373 15.0994 11.868 15.1255 12 15.1255C12.132 15.1255 12.2627 15.0994 12.3846 15.0486C12.5064 14.9978 12.617 14.9234 12.71 14.8297L17 10.5897C17.0937 10.4967 17.1681 10.3861 17.2189 10.2643C17.2697 10.1424 17.2958 10.0117 17.2958 9.8797C17.2958 9.74769 17.2697 9.61698 17.2189 9.49512C17.1681 9.37326 17.0937 9.26266 17 9.1697Z" fill="black"></path></svg>',
                }}
              />
            </button>
          </div>
          {Object.entries(menuItems).map(([category, items]) => (
            <nav
              key={category}
              className="flex flex-col gap-4"
              aria-label={category}
            >
              <h3 className="mb-2.5 text-base font-bold">{category}</h3>
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-base font-medium text-black"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ))}

        </div>
      </div>

      <div className="flex max-sm:flex-col justify-between pt-5 border-solid border-t-[0.5px] border-t-zinc-300">
        <p className="text-sm">Copyright © 2024 Raku Earn Inc.</p>
        <nav className="flex gap-8 max-sm:flex-col max-sm:gap-2 max-sm:mt-4" aria-label="Legal">
          {policies.map((policy, index) => (
            <a
              key={index}
              href={`#${policy.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-base font-medium text-black"
            >
              {policy}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
