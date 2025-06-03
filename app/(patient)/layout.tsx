export default function PatientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        {children}
        </div>
      </main>
  );
}