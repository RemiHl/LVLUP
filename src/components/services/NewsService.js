const RSS_FEEDS = {
  all: 'https://www.jeuxvideo.com/rss/rss.xml',
  ps5: 'https://www.jeuxvideo.com/rss/ps5.xml',
  xbox: 'https://www.jeuxvideo.com/rss/xbox-series.xml',
  switch: 'https://www.jeuxvideo.com/rss/switch.xml',
  pc: 'https://www.jeuxvideo.com/rss/pc.xml'
};

const extractImage = (item, content) => {
  const mediaContent =
    item.getElementsByTagName('media:content')[0] ||
    item.getElementsByTagName('media\:content')[0];
  if (mediaContent?.getAttribute('url')) return mediaContent.getAttribute('url');

  const enclosure = item.querySelector('enclosure');
  if (enclosure?.getAttribute('url')) return enclosure.getAttribute('url');

  const imgRegex = /<img[^>]+src="([^"]+)"/;
  const match = content.match(imgRegex);
  return match ? match[1] : null;
};

const cleanContent = (content) => {
  if (!content) return '';
  return content.replace(/<[^>]*>/g, ' ').trim();
};

const parseRSS = (xmlString, platform = 'all') => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlString, 'text/xml');
  const items = doc.querySelectorAll('item');

  return Array.from(items).map((item) => {
    const content = item.querySelector('description')?.textContent || '';
    const contentSnippet = cleanContent(content).substring(0, 150) + '...';
    const image = extractImage(item, content);

    return {
      id: item.querySelector('guid')?.textContent || item.querySelector('link')?.textContent,
      title: item.querySelector('title')?.textContent || '',
      link: item.querySelector('link')?.textContent || '',
      publishDate: new Date(item.querySelector('pubDate')?.textContent || new Date()),
      author: item.querySelector('creator')?.textContent || 'Unknown',
      content: cleanContent(content),
      contentSnippet,
      image,
      categories: Array.from(item.querySelectorAll('category')).map((cat) => cat.textContent),
      platform
    };
  });
};

let cache = {};

export const fetchNews = async (platform = 'all') => {
  const KEYWORDS_SOLUCES = ['soluce', 'guide', 'astuce', 'walkthrough', 'news astuce', 'solution'];
  const KEYWORDS_TESTS = ['test', 'tests', 'avis', 'critique', 'review'];

  try {
    const feedUrl = RSS_FEEDS['all'];
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;
    const response = await fetch(proxyUrl);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const json = await response.json();
    const xmlText = json.contents;
    const parsed = parseRSS(xmlText, platform);
    cache[platform] = parsed;

    if (platform === 'soluces') {
      return parsed.filter((item) =>
        KEYWORDS_SOLUCES.some((keyword) =>
          item.title.toLowerCase().includes(keyword) ||
          item.content.toLowerCase().includes(keyword)
        )
      );
    }

    return parsed;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const searchNews = async (term) => {
  const allNews = await fetchNews();
  const lowerTerm = term.toLowerCase();

  return allNews.filter((item) =>
    item.title.toLowerCase().includes(lowerTerm) ||
    item.content.toLowerCase().includes(lowerTerm) ||
    item.categories.some((cat) => cat.toLowerCase().includes(lowerTerm))
  );
};