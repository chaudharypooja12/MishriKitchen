export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  projectType: string;
  rating: number;
  date?: string;
};

export const testimonialsHome: Testimonial[] = [
  {
    id: "1",
    quote:
      "Very professional team and excellent finishing quality. Our kitchen looks stunning!",
    name: "Priya Sharma",
    location: "Paschim Vihar",
    projectType: "Modular Kitchen",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Sandeep Sir guided us through every decision. The wardrobe exceeded all expectations.",
    name: "Rajesh Kumar",
    location: "Janakpuri",
    projectType: "Wardrobe Design",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Timely delivery and zero compromise on materials. Highly recommended!",
    name: "Neha Gupta",
    location: "Punjabi Bagh",
    projectType: "Full Home Interior",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Best kitchen designer in Paschim Vihar. Clean work, great team.",
    name: "Amit Verma",
    location: "Shalimar Bagh",
    projectType: "L-Shaped Kitchen",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "Transformed our small flat into a dream home. Value for money.",
    name: "Sunita & Vikram",
    location: "Rohini",
    projectType: "Living Room + Bedroom",
    rating: 5,
  },
  {
    id: "6",
    quote:
      "Installed chimney and cooktop — smooth service, quick installation.",
    name: "Mohit Arora",
    location: "Pitampura",
    projectType: "Kitchen Appliances",
    rating: 5,
  },
];

export const testimonialsPage: Testimonial[] = [
  ...testimonialsHome,
  {
    id: "7",
    quote:
      "Attention to detail is rare — Mishri Kitchen delivered exactly what was promised on renderings.",
    name: "Kavita Menon",
    location: "Dwarka",
    projectType: "U-Shaped Kitchen",
    rating: 5,
    date: "Jan 2025",
  },
  {
    id: "8",
    quote:
      "Our TV unit and crockery unit look premium. Guests always compliment the finish.",
    name: "Rohit Malhotra",
    location: "Rajouri Garden",
    projectType: "Living Room",
    rating: 5,
    date: "Nov 2024",
  },
  {
    id: "9",
    quote:
      "Walk-in wardrobe was a dream — executed flawlessly within our budget.",
    name: "Anjali Desai",
    location: "Vasant Kunj",
    projectType: "Walk-in Wardrobe",
    rating: 5,
    date: "Sep 2024",
  },
];
