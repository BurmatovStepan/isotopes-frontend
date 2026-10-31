type ClassToken = string | false | null | undefined;

export const makeClassString = (...classes: ClassToken[]) => {
    return classes.filter(Boolean).join(' ');
}
