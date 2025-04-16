// src/utils/blogUtils.ts
export const calculateReadingTime = (content: string): string => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    
    return `${readingTime} min read`;
  };
  
  export const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  export const extractTableOfContents = (content: string): { id: string; text: string }[] => {
    const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h\1>/g;
    const toc = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1];
      const text = match[2].replace(/<[^>]*>/g, ''); // Remove any HTML tags inside heading
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      
      toc.push({
        level,
        id,
        text
      });
    }
    
    return toc;
  };
  
  export const addIdsToHeadings = (content: string): string => {
    return content.replace(
      /<h([2-3])>(.*?)<\/h\1>/g,
      (match, level, text) => {
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return `<h${level} id="${id}">${text}</h${level}>`;
      }
    );
  };