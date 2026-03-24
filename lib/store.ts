import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Post, defaultPosts } from "./posts";

// Safe storage: returns a no-op storage during SSR/SSG, real localStorage on client
const safeLocalStorage = createJSONStorage(() => {
  if (typeof window === "undefined") {
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    };
  }
  return localStorage;
});

interface AdminState {
  isAdmin: boolean;
  posts: Post[];
  login: (password: string) => boolean;
  logout: () => void;
  addPost: (post: Omit<Post, "id" | "publishedAt" | "updatedAt">) => void;
  updatePost: (id: string, updates: Partial<Post>) => void;
  deletePost: (id: string) => void;
  togglePublish: (id: string) => void;
}

const ADMIN_PASSWORD = "voidarchitects2024";

export const useStore = create<AdminState>()(
  persist(
    (set, get) => ({
      isAdmin: false,
      posts: defaultPosts,

      login: (password: string) => {
        if (password === ADMIN_PASSWORD) {
          set({ isAdmin: true });
          return true;
        }
        return false;
      },

      logout: () => set({ isAdmin: false }),

      addPost: (postData) => {
        const now = new Date().toISOString().split("T")[0];
        const newPost: Post = {
          ...postData,
          id: Date.now().toString(),
          publishedAt: now,
          updatedAt: now,
        };
        set((state) => ({ posts: [newPost, ...state.posts] }));
      },

      updatePost: (id, updates) => {
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id
              ? { ...p, ...updates, updatedAt: new Date().toISOString().split("T")[0] }
              : p
          ),
        }));
      },

      deletePost: (id) => {
        set((state) => ({ posts: state.posts.filter((p) => p.id !== id) }));
      },

      togglePublish: (id) => {
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id ? { ...p, published: !p.published } : p
          ),
        }));
      },
    }),
    {
      name: "voidarchitects-store",
      storage: safeLocalStorage,
      partialize: (state) => ({ posts: state.posts, isAdmin: false }),
    }
  )
);
