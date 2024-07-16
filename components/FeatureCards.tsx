import Image from 'next/image'; // Import Image from Next.js or your preferred image component

type FeatureCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <Image src={imageSrc} alt={imageAlt} width={64} height={64} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;