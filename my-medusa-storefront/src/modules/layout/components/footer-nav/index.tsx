import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/" className="text-xl-semi uppercase">
            MK Denim
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-8">
      <a href="https://www.facebook.com/profile.php?id=100089658158417" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
      <a href="https://twitter.com/yourPage" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
      <a href="https://www.instagram.com/yourPage" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
    </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2024 MK Denim
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
