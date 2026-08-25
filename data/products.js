// Mock/seed data for Phase 1. Replace with real API/database data in a later phase.
export const products = [
  {
    id: "1",
    title: "Refurbished Mountain Bike",
    price: 450,
    currency: "CHF",
    category: "Sports & Outdoor",
    location: "Zürich",
    type: "physical",
    image: "https://picsum.photos/seed/product1/600/400",
    description:
      "A well-maintained mountain bike, fully serviced and ready to ride. Great for commuting or weekend trails.",
  },
  {
    id: "2",
    title: "Handmade Oak Coffee Table",
    price: 220,
    currency: "CHF",
    category: "Furniture",
    location: "Bern",
    type: "physical",
    image: "https://picsum.photos/seed/product2/600/400",
    description:
      "Solid oak coffee table, handcrafted by a local carpenter. Minor surface wear consistent with careful use.",
  },
  {
    id: "3",
    title: "Vintage Wool Winter Coat",
    price: 85,
    currency: "CHF",
    category: "Clothing",
    location: "Lausanne",
    type: "physical",
    image: "https://picsum.photos/seed/product3/600/400",
    description:
      "Warm wool coat in excellent condition, size M. Perfect for Swiss winters.",
  },
  {
    id: "4",
    title: "Logo Design Service",
    price: 150,
    currency: "CHF",
    category: "Services",
    location: "Geneva",
    type: "service",
    image: "https://picsum.photos/seed/product4/600/400",
    description:
      "Professional logo design package: 3 concepts, 2 rounds of revisions, final files in all standard formats.",
  },
  {
    id: "5",
    title: "Introductory French E-Book Bundle",
    price: 19,
    currency: "CHF",
    category: "Books & Media",
    location: "Digital",
    type: "digital",
    image: "https://picsum.photos/seed/product5/600/400",
    description:
      "A bundle of 3 e-books for French language learners, from beginner to intermediate level.",
  },
  {
    id: "6",
    title: "Refurbished Laptop (14-inch)",
    price: 380,
    currency: "CHF",
    category: "Electronics",
    location: "Basel",
    type: "physical",
    image: "https://picsum.photos/seed/product6/600/400",
    description:
      "Refurbished 14-inch laptop, 8GB RAM, 256GB SSD. Battery tested and replaced if needed.",
  },
  {
    id: "7",
    title: "Ceramic Plant Pot Set (3-pack)",
    price: 35,
    currency: "CHF",
    category: "Home & Garden",
    location: "Zürich",
    type: "physical",
    image: "https://picsum.photos/seed/product7/600/400",
    description:
      "Set of 3 handmade ceramic plant pots in different sizes, with drainage holes and saucers included.",
  },
  {
    id: "8",
    title: "Bookkeeping for Small Nonprofits (Online Course)",
    price: 60,
    currency: "CHF",
    category: "Services",
    location: "Digital",
    type: "digital",
    image: "https://picsum.photos/seed/product8/600/400",
    description:
      "A self-paced online course covering the basics of bookkeeping for small nonprofit organizations.",
  },
  {
    id: "9",
    title: "Kids' Bicycle (16-inch wheels)",
    price: 90,
    currency: "CHF",
    category: "Sports & Outdoor",
    location: "Lucerne",
    type: "physical",
    image: "https://picsum.photos/seed/product9/600/400",
    description:
      "Lightly used kids' bicycle with training wheels included, suitable for ages 4-6.",
  },
  {
    id: "10",
    title: "Second-Hand Bookshelf (5-tier)",
    price: 60,
    currency: "CHF",
    category: "Furniture",
    location: "Bern",
    type: "physical",
    image: "https://picsum.photos/seed/product10/600/400",
    description:
      "Sturdy 5-tier wooden bookshelf, disassembled for easy transport, assembly instructions included.",
  },
  {
    id: "11",
    title: "Hand-Knit Wool Scarf",
    price: 28,
    currency: "CHF",
    category: "Clothing",
    location: "St. Gallen",
    type: "physical",
    image: "https://picsum.photos/seed/product11/600/400",
    description:
      "Hand-knit wool scarf made by a local artisan cooperative. One size fits all.",
  },
  {
    id: "12",
    title: "Website Basics Consultation (1 hour)",
    price: 75,
    currency: "CHF",
    category: "Services",
    location: "Digital",
    type: "service",
    image: "https://picsum.photos/seed/product12/600/400",
    description:
      "A one-hour video consultation to help you plan or improve a small business or nonprofit website.",
  },
];

export const categories = [
  ...new Set(products.map((product) => product.category)),
].sort();

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
