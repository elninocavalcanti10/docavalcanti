import Link from 'next/link'
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

      <motion.div 
        id="cases"
        className="flex w-48 space-x-16 mt-24"
      >
        <Link href="https://futel.com.br">
          <motion.img
            className="bg-yellow-600 rounded-2xl p-4 cursor-pointer"
            key={'https://futel.com.br/wp-content/uploads/2019/07/futel-telecom-nova-logo.png'}
            src={'https://futel.com.br/wp-content/uploads/2019/07/futel-telecom-nova-logo.png'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </Link>
        <Link href="https://isoltelecom.com.br">
          <motion.img
            className="bg-blue-100 rounded-2xl p-4 cursor-pointer"
            key={'img/projects/isol.png'}
            src={'img/projects/isol.png'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            />
        </Link>
        <Link href="https://troyaadvogados.com.br">
          <motion.img
            className="bg-gray-200 rounded-2xl p-4 cursor-pointer"
            key={'img/projects/troya-logo.png'}
            src={'img/projects/troya-logo.png'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            />
        </Link>
        <Link href="https://sb.vix.br">
          <motion.img
            className="bg-pink-200 rounded-2xl p-4 cursor-pointer"
            key={'img/projects/sb-vix.png'}
            src={'img/projects/sb-vix.png'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            />
        </Link>
      </motion.div>
    </div>
  )
}
