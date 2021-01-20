import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between items-center py-2 md:py-4">
      <Link href="/">
        <Image src="/img/logo.png" width={180} height={43} className="rounded-2xl" />
      </Link>

      <nav className="hidden md:flex space-x-8 ">
        <Link href="#portfolio">
          <a className="tracking-wide hover:text-gray-300">
            Portfólio
          </a>
        </Link>
        <Link href="#cases">
          <a className="tracking-wide hover:text-gray-300">
            Cases
          </a>
        </Link>
        <Link href="https://github.com/elninocavalcanti10">
          <a className="tracking-wide hover:text-gray-300">
            <img src="/img/sociais/github.png" width={34} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/adolpho-cavalcanti-nascimento">
          <a className="tracking-wide hover:text-gray-300">
            <img src="/img/sociais/linkedin.jpg" width={34} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/adolphocavalcanti">
          <a className="tracking-wide hover:text-gray-300">
            <img src="/img/sociais/insta.jpg" width={34} />
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
