export const handleScroll = (link: string) => {
    const element = document.getElementById(link);
    element?.scrollIntoView({ behavior: 'smooth' });
};