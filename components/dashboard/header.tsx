export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-8">
      <h1 className="text-lg font-semibold text-foreground">Database Archiving System</h1>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium">Administrator</p>
          <p className="text-xs text-muted-foreground">admin@archiving.com</p>
        </div>
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
          AD
        </div>
      </div>
    </header>
  )
}
