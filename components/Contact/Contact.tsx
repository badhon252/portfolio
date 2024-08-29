import Link from 'next/link';
export default function Contact() {
  return (
    <footer
      id="contact"
      className="min-h-screen mx-auto md:w-4/6 xl:w-3/6 sm:w-11/12 relative"
    >
      <h1 className="h1 text-bold font-black text-8xl my-16">Contact info</h1>
      <div className="text-center font-bold text-2xl my-4 ">
        <h3 className="primary inline-block px-8">Let&apos;s Connect </h3>
      </div>
      <article>
        {' '}
        I&apos;m always open to discussing new opportunities, collaborating on
        exciting projects, or simply exchanging ideas. Feel free to reach out
        via email or connect with me on LinkedIn. Let&apos;s create something
        extraordinary together!
      </article>
      <div className="contact-mail text-blue-700 my-8">
        <Link href="#">dev.khalidhossain@gmail.com </Link>
      </div>

      <p className="absolute bottom-10">All rights reserved by @badhon252</p>
    </footer>
  );
}
