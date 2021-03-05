import Link from 'next/link'
import Image from 'next/image'

import { motion, Variants, AnimatePresence } from 'framer-motion'

import Card from '../components/Card'
import Variantes from '../components/Variantes'

export default function Home() {
  return (
    <div>

      <motion.h3
        className="border-solid border-4 border-gray-400 p-4 mt-30 text-3xl mt-8 leading-none text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl md:mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Portfólio
      </motion.h3>

      <motion.div
        id="portfolio"
        className="w-full grid grid-cols-1 grid-rows-3 gap-4 mt-10 md:grid-cols-3 md:grid-rows-1 md:mt-24"
        transition={{
          delay: 2
        }}
        variants={Variantes}
        initial="hidden"
        animate="visible"
      >
        <Card
          href={'/futflix'}
          imgSrc={'/img/projects/futflix.png'}
          layoutId={'futflix-logo'}
        />
        <Card
          href={'/shop-moc'}
          imgSrc={'/img/projects/shop-moc.png'}
          layoutId={'shop-moc-logo'}
        />
        <Card
          href={'/gerencia-dds'}
          imgSrc={'/img/projects/gerencia-dds.png'}
          layoutId={'gerencia-dds-logo'}
        />
        <Card
          href={'/busca-repositorios'}
          imgSrc={'/img/projects/busca-repositorios.svg'}
          layoutId={'busca-repositorios-logo'}
        />
        <Card
          href={'https://members-org-git.vercel.app'}
          imgSrc={'/img/projects/github-mark.png'}
        />
        <Card
          href={'https://gobiblia.vercel.app/'}
          imgSrc={'/img/projects/gamebiblia.png'}
        />
      </motion.div>
      
      <motion.h3
        className="border-solid border-4 border-gray-400 p-4 text-3xl mt-8 leading-none text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl md:mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Cases
      </motion.h3>

      <motion.p
        className="text-center mt-16 text-xl"
      >
        Confira nosso trabalho...  
      </motion.p>
      <motion.p
        className="text-center mt-16 text-base"
      >
        Alguns dos sites que foram construídos usando as melhores 
        tecnologias existentes no mercado.
      </motion.p>

      <div 
        id="cases"
        className="mt-24 flex-1 items-center flex flex-col sm:flex-row"
      >
        <Link href="https://futel.com.br">
          <div className="flex-1 m-4">
              <motion.img 
                src="/img/jobs/futel.png" 
                className="rounded-2xl bg-blue-100 p-4" 
                />
          </div>
        </Link>
        <Link href="https://isoltelecom.com.br">
          <div className="flex-1 m-4">
              <motion.img 
                src="img/projects/isol.png" 
                className="rounded-2xl bg-gray-300 p-4" 
                />
          </div>
        </Link>
      </div>
      <div 
        id="cases"
        className="mt-4 flex-1 items-center flex flex-col sm:flex-row"
      >
        <Link href="https://botinvest.net/">
          <div className="flex-1 m-4">
              <motion.img 
                src="/img/projects/logo-botinvest.png" 
                className="rounded-2xl bg-gray-100 p-4" 
                />
          </div>
        </Link>
        <Link href="https://festquali.com.br/">
          <div className="flex-1 m-4">
              <motion.img 
                src="img/projects/festquali.png" 
                className="rounded-2xl bg-gray-100 p-4" 
                />
          </div>
        </Link>
        <Link href="https://sb.vix.br">
          <div className="flex-1 m-4">
              <motion.img 
                src="img/projects/sb-vix.png" 
                className="rounded-2xl bg-pink-200 p-4" 
                />
          </div>
        </Link>
      </div>
    </div>
  )
}
