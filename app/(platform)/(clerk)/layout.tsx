export default function ClerkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='grid place-content-center min-h-screen bg-slate-200'>
      {children}
    </div>
  )
}
