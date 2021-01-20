import { motion } from 'framer-motion'
import Link from 'next/link'

const TailwindPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src="/img/projects/shop-moc.png"
        layoutId="shop-moc-logo"
        transition={{ duration: 0.5 }}
      />

<motion.div
        className="items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >

        <motion.h2
          className="mt-10 mb-10 text-center text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Shopping Montes Claros é um redesenho do site do Shopping da cidade de Montes Claros/MG.
        </motion.h2>

        <motion.img
          src="/img/projects/shop-home.png"
        />

        <p className="text-justify mt-20 mb-20">
          Esse redesenho trás um layout mais moderno priorizando um layout Mobile First onde é  
          feito a construção do site primeiro na visão para dispositvos móveis.
        </p>
        <Link href="https://shop-project-rho.vercel.app/">Clique aqui e Confira!!!!</Link>
        <br></br>
        <br></br>
        <Link href="/">
          <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
            Voltar para a Home
          </a>
        </Link>
      </motion.div>
    </div>
  )
}

export default TailwindPage
