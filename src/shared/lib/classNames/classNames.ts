export type Mods = Record<string, boolean>

export function classNames (cls: string, mods: Mods = {}, additional: any[] = []): string {
  const modsEntries = Object.entries(mods)
  const modsResult: string[] = []

  modsEntries.forEach(([className, bool]) => {
    if (bool) {
      modsResult.push(className)
    }
  })

  return [cls, ...modsResult, ...additional].join(' ')
}
