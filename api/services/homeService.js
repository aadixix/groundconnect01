import { api } from "../constants";

export async function fetchHomeData() {
  const res = await fetch(`${api.homePage}?currentPage=1&recordsPerPage=50`, {
    next: { revalidate: 3600 },
    // cache: "force-cache",
  });
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

// Extract categories from home data for header navigation
export function extractCategoriesFromHomeData(homeData) {
  if (homeData.rs === 1 && homeData.res?.Categories) {
    return homeData.res.Categories
      .filter(category => category.ShowOnMenu && category.IsActive)
      .sort((a, b) => (a.MenuOrder || 999) - (b.MenuOrder || 999));
  }

  return [];
}

// slug-based category fetch
export async function getCategoryBySlug(slug) {
  try {
    const data = await fetchHomeData();

    if (data.rs === 1 && data.res?.Categories) {
      const category = data.res.Categories.find(cat => cat.Slug === slug);

      if (category) {
        return { rs: 1, res: { Categories: [category] } };
      }
    }

    return { rs: 2 };
  } catch (error) {
    throw error;
  }
}

// Data fetch by slug
export async function getDataBySlug({ slug }) {
  try {
    const res = await fetch(`${api.slugData}?slug=${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error in getDataBySlug:", error);
    throw error;
  }
}

//  fetching posts by author
export async function getPostsByAuthor(username) {
  try {
    const decodedUsername = decodeURIComponent(username);

    const res = await fetch(`${api.postsByAuthor}?username=${encodeURIComponent(decodedUsername)}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts by author");
    }

    return await res.json();
  } catch (error) {
    console.error("Error in getPostsByAuthor:", error);
    throw error;
  }
}

// Fetching posts by tag
export async function getPostsByTag(tag) {
  try {
    const encodedTag = encodeURIComponent(tag);

    const res = await fetch(`${api.postsByTag}?tag=${encodedTag}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts by tag");
    }

    return await res.json();
  } catch (error) {
    console.error("Error in getPostsByTag:", error);
    throw error;
  }
}

// Get all authors
export async function getAllAuthors() {
  try {
    const data = await fetchHomeData();

    if (data.rs === 1 && data.res?.Posts) {
      const authors = [...new Set(data.res.Posts.map(post => post.Author).filter(Boolean))];
      return authors.map(author => ({ username: author }));
    }

    return [];
  } catch (error) {
    console.error("Error in getAllAuthors:", error);
    return [];
  }
}

// Get all tags
export async function getAllTags() {
  try {
    const data = await fetchHomeData();

    if (data.rs === 1 && data.res?.Posts) {
      const allTags = new Set();

      data.res.Posts.forEach(post => {
        if (post.Tags && Array.isArray(post.Tags)) {
          post.Tags.forEach(tag => {
            if (tag && tag.trim()) {
              allTags.add(tag.trim());
            }
          });
        }
      });

      return Array.from(allTags).map(tag => ({ tag }));
    }

    return [];
  } catch (error) {
    console.error("Error in getAllTags:", error);
    return [];
  }
}

// Fetch home settings data
export async function fetchHomeSettings() {
  try {
    const res = await fetch(api.homeSettings, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch home settings");

    const data = await res.json();
    return data.rs === 1 && data.res?.length > 0 ? data.res[0] : null;
  } catch (error) {
    console.error("Error fetching home settings:", error);
    return null;
  }
}

// Newsletter subscription
export async function subscribeToNewsletter(email) {
  try {
    const response = await fetch(`${api.newsletter}`, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "Email": email
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw error;
  }
}

// RSS Categories API
export async function fetchRSSCategories() {
  try {
    const res = await fetch(api.rssCategories, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch RSS categories: ${res.status}`);
    }

    const contentType = res.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      const data = await res.json();
      return data;
    } else {
      const text = await res.text();
      try {
        const data = JSON.parse(text);
        return data;
      } catch (parseError) {
        console.error("Response is not valid JSON:", text.substring(0, 100));
        throw new Error("Invalid JSON response from RSS categories API");
      }
    }
  } catch (error) {
    console.error("Error fetching RSS categories:", error);
    throw error;
  }
}

export async function fetchRSSFeed(categorySlug) {
  try {
    const encodedSlug = encodeURIComponent(categorySlug);
    const res = await fetch(`${api.rssFeed}?CategorySlug=${encodedSlug}`, {
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch RSS feed: ${res.status}`);
    }

    const contentType = res.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      const data = await res.json();
      return data;
    } else {
      const text = await res.text();

      try {
        const data = JSON.parse(text);
        return data;
      } catch (parseError) {
        if (text.trim().startsWith('<')) {
          console.log("Received XML response, returning as text for XML parsing");
          return text;
        } else {
          console.error("Response is neither JSON nor XML:", text.substring(0, 100));
          throw new Error("Invalid response format from RSS feed API");
        }
      }
    }
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    throw error;
  }
}

// Get RSS URL by category slug
export async function getRSSUrlBySlug(categorySlug) {
  try {
    const rssData = await fetchRSSCategories();

    if (rssData && rssData.rs === 1 && rssData.rc) {
      const category = rssData.rc.find(cat => cat.Slug === categorySlug);
      return category ? category.RssUrl : null;
    }

    return null;
  } catch (error) {
    console.error("Error getting RSS URL by slug:", error);
    return null;
  }
}

// Get all RSS categories for navigation/selection
export function extractRSSCategories(rssData) {
  try {
    if (rssData && rssData.rs === 1 && rssData.rc) {
      return rssData.rc.map(category => ({
        name: category.CategoryName,
        slug: category.Slug,
        rssUrl: category.RssUrl
      }));
    }
    return [];
  } catch (error) {
    console.error("Error extracting RSS categories:", error);
    return [];
  }
}
