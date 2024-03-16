import { contactInfo, socialLinks } from "@/data/data";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  return (
    <footer id="contact" className="bg-footerColor text-white py-10">
      <div className="container flex justify-between items-end">
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-medium">Contacts</h3>
          <div className="flex flex-col gap-4">
            <Link href={`${contactInfo.email}`} className="text-xl">
              Email : {contactInfo.email}
            </Link>
            <Link href={`${contactInfo.phone}`} className="text-xl">
              Phone : {contactInfo.phone}
            </Link>
          </div>
        </div>
        <div className="text-lg flex items-center gap-8">
          <Link href={socialLinks.linkedIn} target="_blank">
            <FaLinkedin size={32} />
          </Link>
          <Link href={socialLinks.github} target="_blank">
            <FaGithub size={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
