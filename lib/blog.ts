import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  author?: string
  tags?: string[]
  seoTitle?: string
  seoDescription?: string
}

export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data } = matter(fileContents)

        return {
          slug,
          title: data.title || "",
          date: data.date || "",
          excerpt: data.excerpt || "",
          content: "",
          author: data.author,
          tags: data.tags || [],
          seoTitle: data.seoTitle || data.title,
          seoDescription: data.seoDescription || data.excerpt,
        }
      })

    // Sort posts by date (newest first) using Date objects
    return allPostsData.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML with sanitization enabled
    const processedContent = await remark()
      .use(remarkHtml, { sanitize: true })
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      content: contentHtml,
      author: data.author,
      tags: data.tags || [],
      seoTitle: data.seoTitle || data.title,
      seoDescription: data.seoDescription || data.excerpt,
    }
  } catch (error) {
    console.error(`Error reading blog post "${slug}":`, error)
    return null
  }
}

export function getAllPostSlugs(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter((name) => name.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""))
  } catch (error) {
    console.error("Error reading blog post slugs:", error)
    return []
  }
}

