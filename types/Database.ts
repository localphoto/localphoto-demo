export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      imagenet: {
        Row: {
          class_id: number;
          class_name: string | null;
        };
        Insert: {
          class_id: number;
          class_name?: string | null;
        };
        Update: {
          class_id?: number;
          class_name?: string | null;
        };
        Relationships: [];
      };
      imagenet_predictions: {
        Row: {
          class_id: number;
          created_at: string | null;
          photo_id: number;
          probability: number;
          rank: number;
        };
        Insert: {
          class_id: number;
          created_at?: string | null;
          photo_id: number;
          probability: number;
          rank: number;
        };
        Update: {
          class_id?: number;
          created_at?: string | null;
          photo_id?: number;
          probability?: number;
          rank?: number;
        };
        Relationships: [
          {
            foreignKeyName: "imagenet_predictions_class_id_fkey";
            columns: ["class_id"];
            referencedRelation: "imagenet";
            referencedColumns: ["class_id"];
          },
          {
            foreignKeyName: "imagenet_predictions_photo_id_fkey";
            columns: ["photo_id"];
            referencedRelation: "photos";
            referencedColumns: ["id"];
          }
        ];
      };
      photos: {
        Row: {
          created_at: string | null;
          embedding: string | null;
          id: number;
          path: string | null;
        };
        Insert: {
          created_at?: string | null;
          embedding?: string | null;
          id: number;
          path?: string | null;
        };
        Update: {
          created_at?: string | null;
          embedding?: string | null;
          id?: number;
          path?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      image_search: {
        Args: {
          query_id: number;
          match_threshold: number;
          match_count: number;
        };
        Returns: {
          id: number;
          path: string;
          similarity: number;
        }[];
      };
      ivfflathandler: {
        Args: {
          "": unknown;
        };
        Returns: unknown;
      };
      vector_avg: {
        Args: {
          "": number[];
        };
        Returns: string;
      };
      vector_dims: {
        Args: {
          "": string;
        };
        Returns: number;
      };
      vector_norm: {
        Args: {
          "": string;
        };
        Returns: number;
      };
      vector_out: {
        Args: {
          "": string;
        };
        Returns: unknown;
      };
      vector_send: {
        Args: {
          "": string;
        };
        Returns: string;
      };
      vector_typmod_in: {
        Args: {
          "": unknown[];
        };
        Returns: number;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
