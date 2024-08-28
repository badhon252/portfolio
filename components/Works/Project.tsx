import Image from 'next/image';
import Link from 'next/link';
import Icons from './Icons';

// Define the IconType (assuming it's the same structure as used in the Icons component)
type IconType = {
  src: string;
  height: number;
  width: number;
};

interface ProjectProps {
  img: object; // Typically a string representing the image URL, but can be adjusted if it's a different type
  title: string;
  desc: string;
  icon: IconType[]; // Array of IconType objects
}

export default function Project({ img, title, desc, icon }: ProjectProps) {
  return (
    <section className="flex flex-wrap my-8 product">
      <div className="product-img md:basis-3/5 ">
        <Image
          src={img}
          alt="Product Image"
          className="border shadow-md hover:shadow-lg cursor-pointer "
          layout="responsive" // Adjust layout as needed
          width={700} // Provide default width
          height={475} // Provide default height
        />
      </div>

      <div className="product-details md:basis-2/5 text-right flex flex-col justify-center items-end">
        <h1 className="h1 m-5 text-4xl font-bold">{title}</h1>
        <p className="description p-4 my-4">{desc}</p>
        <div className="tech-stack">
          <Icons icons={icon} />
        </div>

        <ul className="links flex ">
          <li className="product-link mx-4">
            <Link href="/case-study">Case Study</Link>
          </li>
          <li className="product-link mx-4">
            <Link href="#">Github</Link>
          </li>
          <li className="product-link mx-4">
            <Link href="#">Live</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
