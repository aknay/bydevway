import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

type FeatureCardProps = {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  titleLink: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  titleLink,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white px-6 py-4 shadow-lg">
      <div className="mb-4 flex items-center">
        <Image src={imageSrc} alt="Golang Logo" width={100} height={100} />
        <div className="ml-4">
          <h2 className="text-xl font-bold">
            {title}{' '}
            <span className="text-blue-500">
              {' '}
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between px-4">
        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faHeart} />
          <div className="ml-2">1234</div>
        </div>

        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faGithub} />
          <div className="ml-2">161k</div>
        </div>

        <a
          href={titleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-500"
        >
          More
        </a>
      </div>
    </div>
  )
}

export default FeatureCard
