import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  featured: boolean;
  description?: string;
  amenities?: string[];
}

interface PropertiesState {
  properties: Property[];
  featuredProperties: Property[];
  selectedProperty: Property | null;
  loading: boolean;
  error: string | null;
}

const initialProperties: Property[] = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$2,850,000",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "For Sale",
    featured: true,
    description: "Stunning modern villa with panoramic city views",
    amenities: ["Pool", "Garage", "Garden", "Security"]
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    location: "Manhattan, NY",
    price: "$1,650,000",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: "For Sale",
    featured: false,
    description: "Luxury penthouse in the heart of Manhattan",
    amenities: ["Gym", "Concierge", "Rooftop", "Parking"]
  },
  {
    id: 3,
    title: "Waterfront Estate",
    location: "Malibu, CA",
    price: "$4,200,000",
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: "For Sale",
    featured: true,
    description: "Breathtaking oceanfront property with private beach",
    amenities: ["Beach Access", "Pool", "Wine Cellar", "Guest House"]
  },
  {
    id: 4,
    title: "Contemporary Apartment",
    location: "Miami, FL",
    price: "$850,000",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "For Sale",
    featured: false,
    description: "Modern apartment with stunning bay views",
    amenities: ["Balcony", "Gym", "Pool", "Valet"]
  },
  {
    id: 5,
    title: "Mountain View Cabin",
    location: "Aspen, CO",
    price: "$1,950,000",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 3,
    baths: 2,
    sqft: 2400,
    type: "For Sale",
    featured: false,
    description: "Cozy mountain retreat with spectacular views",
    amenities: ["Fireplace", "Deck", "Hot Tub", "Ski Access"]
  },
  {
    id: 6,
    title: "Historic Townhouse",
    location: "Boston, MA",
    price: "$1,450,000",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 3,
    baths: 3,
    sqft: 2800,
    type: "For Sale",
    featured: false,
    description: "Beautifully restored historic townhouse",
    amenities: ["Original Features", "Garden", "Parking", "Storage"]
  }
];

const initialState: PropertiesState = {
  properties: initialProperties,
  featuredProperties: initialProperties.filter(p => p.featured),
  selectedProperty: null,
  loading: false,
  error: null,
};

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setSelectedProperty: (state, action: PayloadAction<Property | null>) => {
      state.selectedProperty = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const property = state.properties.find(p => p.id === action.payload);
      if (property) {
        property.featured = !property.featured;
      }
      state.featuredProperties = state.properties.filter(p => p.featured);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setSelectedProperty, toggleFavorite, setLoading, setError } = propertiesSlice.actions;
export default propertiesSlice.reducer;