import '../style.css';
export default function About() {
  return (
    <section className="min-h-screen " id="about">
      <div className="mx-auto md:w-4/6 xl:w-3/6 sm:w-12/12">
        <h1 className="h1 text-bold font-black text-8xl my-8">About Me</h1>
        Hi, I&apos;m Khalid Hossain, a dedicated Frontend Engineer and Python
        Instructor based in Barishal, Bangladesh. My passion lies in crafting
        seamless, user-centric web applications using the latest technologies,
        including Next.js, TypeScript, and TailwindCSS. I&apos;m committed to
        delivering innovative solutions that not only meet but exceed
        expectations.
        <h3 className="about__me-info">My Journey </h3>
        With a BSc in Computer Science and Engineering from the Global
        University of Bangladesh, I&apos;ve built a solid foundation in software
        development. Over the years, I&apos;ve honed my skills through various
        projects and roles, including my current position as a Python
        Programming Instructor at Sheikh Russel Digital Lab. This role allows me
        to share my knowledge and passion for programming with the next
        generation of developers, which is incredibly rewarding.
        <h3 className="about__me-info">What I Do</h3>
        As a self-employed Frontend Engineer, I specialize in creating fast,
        responsive, and visually appealing web applications. My expertise
        includes JavaScript, TypeScript, React, Next.js, and TailwindCSS, among
        others. I&apos;m particularly skilled in building environments that are
        not only technically robust but also conducive to collaboration and
        innovation, using tools like Husky, Commitizen, and Jest.
        <h3 className="about__me-info">Beyond the Code </h3>
        When I&apos;m not immersed in code, I&apos;m brainstorming ideas for an
        AI-powered SaaS product aimed at empowering both technical and
        non-technical users. I believe in the potential of technology to create
        meaningful impacts, and I&apos;m excited about the ossibilities that lie
        ahead as I explore this new venture as a solopreneur and indie hacker.
      </div>
    </section>
  );
}
