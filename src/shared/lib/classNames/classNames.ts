type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    const additionalClasses = additional ? additional.filter(Boolean) : [];

    return [
        cls,
        ...additionalClasses,
        ...(mods
            ? Object.entries(mods)
                .filter(([classname, value]) => Boolean(value))
                .map(([className]) => className)
            : []),
    ].join(' ');
}
