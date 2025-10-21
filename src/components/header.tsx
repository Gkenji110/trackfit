interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <h1 className="font-bold text-gray-600 text-xl mb-3">{children}</h1>

    </>
  );
}