import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src="/img/projects/gerencia-dds.png"
        layoutId="gerencia-dds-logo"
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
          Gerencia DDS é para sua equipe de desenvolvimento de softwares.
        </motion.h2>

        <motion.img
          src="/img/projects/gerencia-dds-home.png"
        />

        <p className="text-justify mt-20 mb-20">
          O Gerencia DDS aplica as melhores técnicas para o gerenciamento de projetos de Software, 
          usando metodologias ágeis e outras técnicas que auxliam a equipe na construção de 
          sistemas, sites, lojas virtuais e muito mais.
        </p>
        <Link href="http://dds-project.herokuapp.com">Clique aqui e Confira!!!!</Link>
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

export default MotionPage
