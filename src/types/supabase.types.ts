export type Database = {
    public: {
      Tables: {
        categories: {
          Row: {
            id: number;
            name: string;
            route: string;
            icon_url?: string;
            icon_svg?: string;
            is_active: boolean;
            decide: number;
            created_at: string; // ISO timestamp
            updated_at: string;
          };
          Insert: {
            id?: number;
            name: string;
            route: string;
            icon_url?: string;
            icon_svg?: string;
            is_active: boolean;
            decide: number;
            created_at: string; // ISO timestamp
            updated_at: string;
          };
          Update: {
            id: number;
            name: string;
            route: string;
            icon_url?: string;
            icon_svg?: string;
            is_active: boolean;
            decide: number;
            created_at: string; // ISO timestamp
            updated_at: string;
          };
        };
      };
    };
  };
  