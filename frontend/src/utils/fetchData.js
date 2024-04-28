export const fetchProducts = async () => {
  try {
    const response = await fetch("/Products");
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch products", err);
    return {};
  }
};
export const fetchProduct = async ({ params }) => {
  try {
    const response = await fetch(
      `/Products/${params.CategoryId}/${params.ProductId}`,
    );
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch product", err);
    return {};
  }
};
export const fetchArticles = async () => {
  try {
    const response = await fetch("/Articles");
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch articles", err);
    return {};
  }
};
export const fetchArticle = async ({ params }) => {
  
  try {
    const response = await fetch(`/Articles/${params.ArticleId}`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch article", err);
    return {};
  }
};
export const fetchResearchs = async () => {
  try {
    const response = await fetch("/Researchs");
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch researchs", err);
    return {};
  }
};
export const fetchResearch = async ({ params }) => {
  try {
    const response = await fetch(`/Researchs/${params.ResearchId}`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch research", err);
    return {};
  }
};
export const fetchHome = async () => {
  try {
    const productResponse = await fetch("/Products");
    const researchResponse = await fetch("/Researchs");
    const articleResponse = await fetch("/Articles");

    return {
      product: await productResponse.json(),
      research: await researchResponse.json(),
      article: await articleResponse.json(),
    };
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};
