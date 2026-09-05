export default function TechSatck(){
  const categories = [
    {
      title: "Frontend",
      description: "Modern interfaces built for performance and experience.",
      technologies: [
        { name: "React.js", image: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "JavaScript", image: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "HTML5", image: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS3", image: "https://cdn.simpleicons.org/css3/1572B6" },
        { name: "Tailwind CSS", image: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      ],
    },
    {
      title: "Backend",
      description: "Secure and scalable systems powering modern applications.",
      technologies: [
        { name: "Laravel", image: "https://cdn.simpleicons.org/laravel/FF2D20" },
        { name: "Node.js", image: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "PHP", image: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "Express.js", image: "https://cdn.simpleicons.org/express/FFFFFF" },
      ],
    },
    {
      title: "Database",
      description: "Reliable data architecture designed for scale.",
      technologies: [
        { name: "MySQL", image: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "Redis", image: "https://cdn.simpleicons.org/redis/DC382D" },
      ],
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud infrastructure focused on reliability and scalability.",
      technologies: [
        { name: "AWS", image: "https://cdn.simpleicons.org/amazonaws/FF9900" },
        { name: "Docker", image: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Git", image: "https://cdn.simpleicons.org/git/F05032" },
        { name: "GitHub", image: "https://cdn.simpleicons.org/github/FFFFFF" },
      ],
    },
    {
      title: "Web Technologies",
      description: "Technologies that power fast and connected experiences.",
      technologies: [
        { name: "REST API", image: "https://cdn.simpleicons.org/openapi/6BA539" },
        { name: "WebSockets", image: "https://cdn.simpleicons.org/socketdotio/FFFFFF" },
        { name: "Vite", image: "https://cdn.simpleicons.org/vite/646CFF" },
      ],
    },
    {
      title: "Tools & Platforms",
      description: "Development tools that improve productivity and delivery.",
      technologies: [
        { name: "VS Code", image: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
        { name: "Postman", image: "https://cdn.simpleicons.org/postman/FF6C37" },
        { name: "Figma", image: "https://cdn.simpleicons.org/figma/F24E1E" },
      ],
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-fixed py-24 lg:py-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85')",
      }}
    >
      {/* Professional Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Blue Light */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Our Technology Stack
            </span>
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Powered by
            <span className="block text-blue-400">
              Modern Technology
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            We leverage modern technologies and proven development practices
            to build secure, scalable, and high-performance digital solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="
                group rounded-3xl
                border border-white/15
                bg-white/10
                p-6
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-2
                hover:border-blue-400/40
                hover:bg-white/15
                hover:shadow-2xl
                hover:shadow-blue-950/40
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    bg-blue-500/20
                    text-blue-300
                    ring-1 ring-blue-400/20
                    transition-all duration-300
                    group-hover:bg-blue-500
                    group-hover:text-white
                  "
                >
                  <span className="text-lg font-bold">
                    {category.title.charAt(0)}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/40">
                    Technology ecosystem
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/60">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="
                      flex items-center gap-2
                      rounded-xl
                      border border-white/10
                      bg-black/20
                      px-3 py-2
                      transition-all duration-300
                      hover:border-blue-400/30
                      hover:bg-white/10
                    "
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-5 w-5 object-contain"
                    />

                    <span className="text-xs font-medium text-white/75">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            ["20+", "Technologies"],
            ["6", "Technology Areas"],
            ["Scalable", "Architecture"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="
                rounded-2xl
                border border-white/15
                bg-black/20
                px-6 py-5
                text-center
                backdrop-blur-xl
              "
            >
              <p className="text-3xl font-bold text-white">
                {number}
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};