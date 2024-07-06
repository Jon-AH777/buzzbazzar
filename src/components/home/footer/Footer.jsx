import Image from "next/image";
import Link from "next/link";

const socialMediaIcons = [
  'facebook.png',
  "instagram.png",
  "youtube.png",
  "pinterest.png",
  "x.png",
]

const payIcons = [
  'discover.png',
  'skrill.png',
  'paypal.png',
  'mastercard.png',
  'visa.png',
]

const sections = [
  { title: "COMPANY", links: ["About Us", "Careers", "Affiliates", "Blog", "Contact Us"] },
  { title: "SHOP", links: ["New Arrivals", "Accessories", "Men", "Women", "All Products"] },
  { title: "HELP", links: ["Customer Service", "My Account", "Find a Store", "Legal & Privacy", "Gift Card"] },
];

const Footer = () => {

  return (
    <>
      <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-white text-sm mt-24">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-24">
          {/* LEFT */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <Link href="/">
              <div className="text-2xl tracking-wide">BUZZ</div>
            </Link>
            <p>
              3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
              States
            </p>
            <span className="font-semibold">hello@buzz.dev</span>
            <span className="font-semibold">+1 234 567 890</span>
            <div className="flex gap-6">
              {socialMediaIcons.map((icon) => (
                <Image key={icon} src={`/${icon}`} alt="snicons" width={16} height={16} />
              ))}
            </div>
          </div>
          {/* CENTER */}
          <div className="hidden lg:flex justify-between w-1/2">
            {sections.map((section) => (
              <div key={section.title} className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">{section.title}</h1>
                <div className="flex flex-col gap-6">
                  {section.links.map((link) => (
                    <Link key={link} href="">{link}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div >
          {/* RIGHT */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <h1 className="font-medium text-lg">SUBSCRIBE</h1>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Email address"
                className="p-4 w-3/4"
              />
              <button className="w-1/4 bg-buzz text-white">JOIN</button>
            </div>
            <span className="font-semibold">Secure Payments</span>
            <div className="flex justify-between">
              {payIcons.map((icon) => (
                <Image key={icon} src={`/${icon}`} alt="payicons" width={40} height={20} />
              ))}
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
          <div className="">© 2024 BUZZ Shop</div>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="">
              <span className="text-gray-500 mr-4">Language</span>
              <span className="font-medium">United States | English</span>
            </div>
            <div className="">
              <span className="text-gray-500 mr-4">Currency</span>
              <span className="font-medium">$ USD</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer