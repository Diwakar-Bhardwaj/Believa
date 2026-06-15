export default function Home() {

  
  return (
    <main className="relative min-h-screen">
      {/* Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{
          backgroundImage: "url('../smalldevice.png')",
          backgroundPosition: "center 20%",
        }}
      />

      {/* Tablet & Desktop */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{
          backgroundImage: "url('../mediumorlarge.png')",
          backgroundPosition: "center 10%",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="px-6 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            Welcome to My App
          </h1>

          <p className="mt-4 text-lg md:text-xl">
            Responsive Next.js Landing Page
          </p>
        </div>
      </div>
    </main>
  );
}