import { motion } from 'framer-motion'
import Link from 'next/link'

const TailwindPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src="/img/projects/busca-repositorios.svg"
        layoutId="busca-repositorios-logo"
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
          Buscar Repositórios é um projeto realizado durante o Bootcamp da Rocketseat.
        </motion.h2>

        <motion.img
          src="/img/projects/buscar-repo-page.png"
        />

        <p className="text-justify mt-20 mb-20">
          Esse projeto foi realizado durante o bootcamp da Rocketseat. você digita 
          o nome_de_usuario_no_git/nome_do_repositorio e o sistema faz a busca e retorna o repositório específico.
        </p>
        <Link href="https://buscar-repositorios.vercel.app">Clique aqui e Confira!!!!</Link>
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
