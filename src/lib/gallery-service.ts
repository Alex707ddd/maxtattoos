import tagsData from '@/data/image_tags.json';

export type TattooStyle = 'minimalist' | 'realistic' | 'black and grey' | 'portrait' | 'japanese' | 'lettering' | 'traditional' | 'geometric' | 'sketch style' | 'color';

export interface TattooImage {
    id: string;
    src: string;
    primaryTag: TattooStyle;
    score: number; // Confidence score of the primary tag
    allTags: { label: string; score: number }[];
}

// Convert the raw JSON into a structured array
const rawData = tagsData as Record<string, {
    primary_tag: string;
    detailed_analysis: { label: string; score: number }[]
}>;

const images: TattooImage[] = Object.entries(rawData).map(([filename, data]) => {
    // Find the score of the primary tag
    const primaryTagInfo = data.detailed_analysis.find(t => t.label.startsWith(data.primary_tag) || t.label === data.primary_tag + ' tattoo');
    const score = primaryTagInfo ? primaryTagInfo.score : 0;

    return {
        id: filename,
        src: `/data/${filename}`,
        primaryTag: data.primary_tag as TattooStyle,
        score: score,
        allTags: data.detailed_analysis
    };
});

export const getGalleryImages = (filterStyle?: string): TattooImage[] => {
    let filtered = images;

    if (filterStyle && filterStyle !== 'all') {
        filtered = images.filter(img => img.primaryTag === filterStyle);
    }

    // AI CURATION: Sort by confidence score (descending)
    // This ensures the "best" examples of each style appear first
    return filtered.sort((a, b) => b.score - a.score);
};

export const getAllTags = (): string[] => {
    // Get unique tags
    const tags = new Set(images.map(img => img.primaryTag));
    return Array.from(tags).sort();
}
