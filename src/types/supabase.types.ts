export type CampValue = 'CARAVAN' | 'GLAMPING' | 'TENT' | 'AUTO';
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
        campgrounds : {
          Row:{
            id: string;
            campground_name: string;
            location: string;
            price: number;
            discount_rate: number | null;
            site_numbers: string | null;
            description: string;
            tags: string | null;
            main_photo_url: string | null;
            sub_photo_urls: string | null;
            facility_photo_urls: string | null;
            layout_image_url: string | null;
            notify_vacancy: boolean;
            allow_transfer: boolean;
            use_points: boolean;
            admin_on_site: boolean;
            quiet_hour_start: string | null; // time type
            quiet_hour_end: string | null;   // time type
            check_in_time: string | null;    // time type
            check_out_time: string | null;   // time type
            has_baby_room: boolean;
            has_parking: boolean;
            has_smoking_area: boolean;
            has_store: boolean;
            has_pool: boolean;
            has_private_shower: boolean;
            has_shared_shower: boolean;
            has_water: boolean;
            has_cafe: boolean;
            has_fire_pit: boolean;
            has_private_toilet: boolean;
            has_shared_toilet: boolean;
            has_bbq: boolean;
            has_gear_rental: boolean;
            allow_pets: boolean;
            category: CampValue | null;
            created_at: string; // timestamp type
          }
          Insert:{
            id: string;
            campground_name: string;
            location: string;
            price: number;
            discount_rate: number | null;
            site_numbers: string | null;
            description: string;
            tags: string | null;
            main_photo_url: string | null;
            sub_photo_urls: string | null;
            facility_photo_urls: string | null;
            layout_image_url: string | null;
            notify_vacancy: boolean;
            allow_transfer: boolean;
            use_points: boolean;
            admin_on_site: boolean;
            quiet_hour_start: string | null; // time type
            quiet_hour_end: string | null;   // time type
            check_in_time: string | null;    // time type
            check_out_time: string | null;   // time type
            has_baby_room: boolean;
            has_parking: boolean;
            has_smoking_area: boolean;
            has_store: boolean;
            has_pool: boolean;
            has_private_shower: boolean;
            has_shared_shower: boolean;
            has_water: boolean;
            has_cafe: boolean;
            has_fire_pit: boolean;
            has_private_toilet: boolean;
            has_shared_toilet: boolean;
            has_bbq: boolean;
            has_gear_rental: boolean;
            allow_pets: boolean;
            category: CampValue | null;
            created_at: string; // timestamp type

          }
          Update:{
            id: string;
            campground_name: string;
            location: string;
            price: number;
            discount_rate: number | null;
            site_numbers: string | null;
            description: string;
            tags: string | null;
            main_photo_url: string | null;
            sub_photo_urls: string | null;
            facility_photo_urls: string | null;
            layout_image_url: string | null;
            notify_vacancy: boolean;
            allow_transfer: boolean;
            use_points: boolean;
            admin_on_site: boolean;
            quiet_hour_start: string | null; // time type
            quiet_hour_end: string | null;   // time type
            check_in_time: string | null;    // time type
            check_out_time: string | null;   // time type
            has_baby_room: boolean;
            has_parking: boolean;
            has_smoking_area: boolean;
            has_store: boolean;
            has_pool: boolean;
            has_private_shower: boolean;
            has_shared_shower: boolean;
            has_water: boolean;
            has_cafe: boolean;
            has_fire_pit: boolean;
            has_private_toilet: boolean;
            has_shared_toilet: boolean;
            has_bbq: boolean;
            has_gear_rental: boolean;
            allow_pets: boolean;
            category: CampValue | null;
            created_at: string; // timestamp type

          }
        }
        
    };
  };
}