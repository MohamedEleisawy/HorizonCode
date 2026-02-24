import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/logo.png"
        alt="HorizonCode"
        width={40}
        height={40}
        className="h-9 w-9 object-contain"
      />
      <span className="text-xl font-bold tracking-tight text-foreground">
        Horizon<span className="gradient-text">Code</span>
      </span>
    </div>
  )
}
