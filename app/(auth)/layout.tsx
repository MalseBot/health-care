

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className={`h-screen flex items-center justify-center bg-background text-text antialiased`}
        >
            <div className="w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px]">
        {children}
        </div>
      </main>
  );
}
