export const useUtils = () => {

    const convertCamelCase = (string) => {
        return string
            .replace(/([a-z])([A-Z][a-z])/g, "$1 $2")
            .charAt(0)
            .toUpperCase()+string
                .slice(1)
                .replace(/([a-z])([A-Z][a-z])/g, "$1 $2");
    };

    return { convertCamelCase }
};