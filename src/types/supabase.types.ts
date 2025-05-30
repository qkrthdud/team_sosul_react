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
        campaign_features: {
          Row: {
            id: number;
            img_src: string;
            alt_text?: string;
            title: string;
            description?: string;
          };
          Insert: {
            id: number;
            img_src: string;
            alt_text?: string;
            title: string;
            description?: string;
          };
          Update: {
            id: number;
            img_src: string;
            alt_text?: string;
            title: string;
            description?: string;
          };
        };
        members : {
          Row:{
              userid: string;
              email: string;
              password: string;
              username : string;
              birth_year: string;
              birth_month: string;
              birth_day: string;
              phone1: string;
              phone2: string;
              phone3: string;
              gender: string;
              preferred_regions?: string[];
              marketing?: boolean;
          };
          Insert: {
            userid: string;
            email: string;
            password: string;
            username : string;
            birth_year: string;
            birth_month: string;
            birth_day: string;
            phone1: string;
            phone2: string;
            phone3: string;
            gender: string;
            preferred_regions?: string[];
            marketing?: boolean;
          };
          Update: {
            userid: string;
              email: string;
              password: string;
              username : string;
              birth_year: string;
              birth_month: string;
              birth_day: string;
              phone1: string;
              phone2: string;
              phone3: string;
              gender: string;
              preferred_regions?: string[];
              marketing?: boolean;
          };
        };
        
    };
  };
}