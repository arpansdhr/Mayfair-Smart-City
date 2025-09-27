import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchFilters {
  location: string;
  propertyType: string;
  priceRange: string;
  bedrooms: string;
  bathrooms: string;
}

interface SearchResult {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  // Add other relevant fields as needed
}

interface SearchState {
  filters: SearchFilters;
  results: SearchResult[];
  isSearching: boolean;
  searchQuery: string;
}

const initialState: SearchState = {
  filters: {
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: '',
    bathrooms: '',
  },
  results: [],
  isSearching: false,
  searchQuery: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<{ key: keyof SearchFilters; value: string }>) => {
      state.filters[action.payload.key] = action.payload.value;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<SearchResult[]>) => {
      state.results = action.payload;
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.searchQuery = '';
      state.results = [];
    },
  },
});

export const {
  updateFilter,
  setSearchQuery,
  setSearchResults,
  setIsSearching,
  clearFilters,
} = searchSlice.actions;

export default searchSlice.reducer;