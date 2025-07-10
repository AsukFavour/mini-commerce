# Mini-Commerce

A modern, responsive e-commerce prototype built with Next.js 14, featuring a clean monochromatic design and full client-side state management.

## 🚀 Live Demo

**[View Live Demo](https://asuk-mini-ecommerce.netlify.app/)**

## 📋 Project Overview

Mini-Commerce is a client-side e-commerce prototype that demonstrates modern React patterns and state management. Users can browse a curated collection of clothing items, manage their shopping cart, and complete a streamlined checkout process. The application features persistent state management, ensuring cart contents survive page reloads and browser sessions.

### Key Features

- **Product Catalogue** (`/`) - Browse 10 carefully curated clothing items with high-quality images
- **Product Details** (`/product/[slug]`) - Detailed product information with seamless cart integration
- **Shopping Cart** (`/cart`) - Full cart management with quantity controls and real-time totals
- **Checkout Flow** (`/checkout` → `/success`) - Streamlined checkout with order confirmation
- **Persistent State** - Cart contents preserved across sessions using localStorage
- **Responsive Design** - Mobile-first approach with elegant desktop scaling

## 🎨 Design Approach

### Visual Philosophy
The design embraces a **minimalist monochromatic aesthetic** using a carefully balanced black and white color palette. This approach creates a sophisticated, timeless look that puts the focus on the products themselves while ensuring optimal readability and accessibility.

### Color Scheme
- **Primary**: Pure black (`#000000`) for text, buttons, and primary UI elements
- **Secondary**: Pure white (`#FFFFFF`) for backgrounds and negative space
- **Accent**: Subtle gray shades (`#F9FAFB`, `#E5E7EB`) for cards, borders, and subtle differentiation

### Layout Strategy
- **Mobile-First Responsive Grid**: Seamless scaling from single-column mobile to multi-column desktop layouts
- **Card-Based Design**: Clean product cards with consistent spacing and hover interactions
- **Generous Whitespace**: Breathing room that enhances readability and creates visual hierarchy
- **Smooth Transitions**: Subtle hover effects and state changes for enhanced user experience

### Typography & Spacing
- **Font Stack**: System fonts for optimal performance and native feel
- **Consistent Spacing**: Tailwind's spacing scale for visual harmony
- **Clear Hierarchy**: Strategic use of font weights and sizes to guide user attention

## 🛠️ Tools & Techniques

### Core Stack
- **Next.js 14** (App Router) - Modern React framework with file-based routing
- **TypeScript** (strict mode) - Type safety and enhanced developer experience
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **React Query** - Sophisticated data fetching, caching, and synchronization
- **Zustand** - Lightweight state management with persistence middleware

### State Management Pattern
```typescript
// Zustand store with persistence
const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product, quantity) => { /* implementation */ },
      updateQuantity: (id, quantity) => { /* implementation */ },
      removeFromCart: (id) => { /* implementation */ },
      clearCart: () => set({ items: [] }),
      // Derived state with selectors
      getTotalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
      getTotalPrice: () => get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    }),
    { name: 'cart-storage' }
  )
);
```

### Data Fetching Strategy
React Query manages the product catalogue with intelligent caching and background refetching:

```typescript
// Custom hook for product data
const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('/products.json');
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });
};
```

### Performance Optimizations
- **Image Optimization**: Next.js `next/image` with proper sizing and lazy loading
- **Code Splitting**: Automatic route-based code splitting via Next.js App Router
- **Selective Re-renders**: Zustand selectors prevent unnecessary component updates
- **Optimistic Updates**: Immediate UI feedback for cart operations

## 🔍 SEO Strategy

### Meta Tags & Open Graph
```typescript
// Dynamic metadata generation
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.slug);
  
  return {
    title: `${product.name} - Mini-Commerce`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
      type: 'website',
    },
  };
}
```

### Technical SEO Implementation
- **Semantic HTML**: Proper use of heading hierarchy, landmarks, and ARIA labels
- **Structured Data**: JSON-LD schema for products and organization
- **Image Optimization**: Png format with responsive sizing and alt text
- **Performance**: Optimized Core Web Vitals through efficient rendering and minimal JavaScript

### Accessibility Features
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic markup
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Management**: Visible focus indicators and logical tab order

## 🚨 Error Handling Technique

### Multi-Layer Error Strategy

**1. React Query Error Boundaries**
```typescript
// Global error state management
const { data: products, error, isLoading, isError } = useProducts();

if (isError) {
  return <ErrorFallback error={error} retry={() => refetch()} />;
}
```

**2. Graceful UI Degradation**
- **Loading States**: Skeleton screens and loading spinners maintain perceived performance
- **Error Boundaries**: Component-level error catching with fallback UI
- **Retry Mechanisms**: User-friendly retry options for failed network requests


**4. Development vs Production**
- **Development**: Detailed error messages and stack traces
- **Production**: User-friendly error messages with error logging
- **404 Handling**: Custom not-found pages with navigation options

### Error Recovery Patterns
```typescript
// Automatic retry with exponential backoff
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (failureCount < 3) return true;
        return false;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});
```



```
mini-commerce/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable UI components
│   ├── store/              # Zustand state management
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── public/                 # Static assets
├── tests/                  # Test files
└── docs/                   # Documentation
```

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/mini-commerce.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```


---

*Built with ❤️ using Next.js, React Query, Zustand, and Tailwind CSS*