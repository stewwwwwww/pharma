import axios from "axios";
export const fetchProducts = async () => {
  try {
    const response = await fetch("/products", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
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
      `/products/${params.CategoryId}/${params.ProductId}`,
      {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
      },
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
    const response = await fetch("/articles", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch articles", err);
    return {};
  }
};
export const fetchArticle = async ({ params }) => {
  try {
    const response = await fetch(`/articles/${params.ArticleId}`, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch article", err);
    return {};
  }
};
export const fetchResearchs = async () => {
  try {
    const response = await fetch("/researchs", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch researchs", err);
    return {};
  }
};
export const fetchResearch = async ({ params }) => {
  try {
    const response = await fetch(`/researchs/${params.ResearchId}`, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch research", err);
    return {};
  }
};

export const fetchHome = async () => {
  try {
    const productResponse = await fetch("/products", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    });
    if (!productResponse.ok) throw new Error("Failed to fetch products");

    const researchResponse = await fetch("/researchs", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    });
    if (!researchResponse.ok) throw new Error("Failed to fetch researchs");

    const articleResponse = await fetch("/articles", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    });
    if (!articleResponse.ok) throw new Error("Failed to fetch articles");

    return {
      product: await productResponse.json(),
      research: await researchResponse.json(),
      article: await articleResponse.json(),
    };
  } catch (err) {
    console.error("Failed to fetch data", err);
    console.log(`Bearer ${process.env.REACT_APP_API_TOKEN}`);
  }
};

export const fetchAboutUs = async () => {
  try {
    const productResponse = await fetch("/products", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!productResponse.ok) throw new Error("Failed to fetch products");
    const researchResponse = await fetch("/researchs", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!researchResponse.ok) throw new Error("Failed to fetch researchs");

    return {
      product: await productResponse.json(),
      research: await researchResponse.json(),
    };
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};

export const fetchOurTeam = async () => {
  try {
    const memberResponse = await fetch("/members", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!memberResponse) throw new Error("Failed to fetch members");
    const faqResponse = await fetch("/faqs", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!faqResponse) throw new Error("Failed to fetch faqs");
    return {
      member: await memberResponse.json(),
      faq: await faqResponse.json(),
    };
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};
export const fetchFaq = async () => {
  try {
    const response = await fetch("/faqs", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!response) throw new Error("Failed to fetch faqs");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};
export const fetchJoinUs = async () => {
  try {
    const response = await fetch("/joinUs", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!response) throw new Error("Failed to fetch join us");
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};
export const fetchRetailers = async () => {
  try {
    const retailerResponse = await fetch("/retailers", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!retailerResponse) throw new Error("Failed to fetch retailers");
    const faqResponse = await fetch("/faqs", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!faqResponse) throw new Error("Failed to fetch faqs");
    return {
      retailer: await retailerResponse.json(),
      faq: await faqResponse.json(),
    };
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};
export const fetchContactUs = async () => {
  try {
    const faqResponse = await fetch("/faqs", {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
    });
    if (!faqResponse) throw new Error("Failed to fetch faqs");
    return await faqResponse.json();
  } catch (err) {
    console.error("Failed to fetch data", err);
  }
};
