import Link from 'next/link'
import { motion } from 'framer-motion'
import Variantes from './Variantes'

interface CardProps {
  href: string
  imgSrc: string
  layoutId?: string
}
const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => {
    return (
      <Link href={href}>
        <motion.div
          className="relative p-4 h-20 w-30 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition"
          variants={Variantes}
        >
          <motion.img
            src={imgSrc}
            className="w-full h-full"
            layoutId={layoutId}
          />
        </motion.div>
      </Link>
    )
  }

  export default Card;