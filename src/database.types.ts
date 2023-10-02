export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      album: {
        Row: {
          album_type: Database['public']['Enums']['album_type_enum'] | null;
          id: string;
          img_url: string | null;
          is_liked: boolean;
          name: string | null;
          year: string | null;
        };
        Insert: {
          album_type?: Database['public']['Enums']['album_type_enum'] | null;
          id: string;
          img_url?: string | null;
          is_liked?: boolean;
          name?: string | null;
          year?: string | null;
        };
        Update: {
          album_type?: Database['public']['Enums']['album_type_enum'] | null;
          id?: string;
          img_url?: string | null;
          is_liked?: boolean;
          name?: string | null;
          year?: string | null;
        };
        Relationships: [];
      };
      album_songs: {
        Row: {
          album_id: string;
          song_id: string;
        };
        Insert: {
          album_id: string;
          song_id: string;
        };
        Update: {
          album_id?: string;
          song_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'album_songs_album_id_fkey';
            columns: ['album_id'];
            referencedRelation: 'album';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'album_songs_song_id_fkey';
            columns: ['song_id'];
            referencedRelation: 'song';
            referencedColumns: ['id'];
          }
        ];
      };
      artist: {
        Row: {
          followers: number | null;
          id: string;
          img_url: string | null;
          is_following: boolean | null;
          name: string | null;
        };
        Insert: {
          followers?: number | null;
          id: string;
          img_url?: string | null;
          is_following?: boolean | null;
          name?: string | null;
        };
        Update: {
          followers?: number | null;
          id?: string;
          img_url?: string | null;
          is_following?: boolean | null;
          name?: string | null;
        };
        Relationships: [];
      };
      artist_discography: {
        Row: {
          album_id: string;
          artist_id: string;
        };
        Insert: {
          album_id: string;
          artist_id: string;
        };
        Update: {
          album_id?: string;
          artist_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'artist_discography_album_id_fkey';
            columns: ['album_id'];
            referencedRelation: 'album';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'artist_discography_artist_id_fkey';
            columns: ['artist_id'];
            referencedRelation: 'artist';
            referencedColumns: ['id'];
          }
        ];
      };
      episode: {
        Row: {
          date: string | null;
          description: string | null;
          duration: number | null;
          id: string;
          is_explicit: boolean;
          name: string | null;
          podcast_id: string | null;
        };
        Insert: {
          date?: string | null;
          description?: string | null;
          duration?: number | null;
          id: string;
          is_explicit?: boolean;
          name?: string | null;
          podcast_id?: string | null;
        };
        Update: {
          date?: string | null;
          description?: string | null;
          duration?: number | null;
          id?: string;
          is_explicit?: boolean;
          name?: string | null;
          podcast_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'episode_podcast_id_fkey';
            columns: ['podcast_id'];
            referencedRelation: 'podcast';
            referencedColumns: ['id'];
          }
        ];
      };
      genre: {
        Row: {
          id: string;
          name: string | null;
        };
        Insert: {
          id: string;
          name?: string | null;
        };
        Update: {
          id?: string;
          name?: string | null;
        };
        Relationships: [];
      };
      lyric: {
        Row: {
          content: string | null;
          id: number;
          song_id: string | null;
        };
        Insert: {
          content?: string | null;
          id?: number;
          song_id?: string | null;
        };
        Update: {
          content?: string | null;
          id?: number;
          song_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'lyric_song_id_fkey';
            columns: ['song_id'];
            referencedRelation: 'song';
            referencedColumns: ['id'];
          }
        ];
      };
      names: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      playlist: {
        Row: {
          description: string | null;
          id: string;
          img_url: string | null;
          name: string | null;
        };
        Insert: {
          description?: string | null;
          id: string;
          img_url?: string | null;
          name?: string | null;
        };
        Update: {
          description?: string | null;
          id?: string;
          img_url?: string | null;
          name?: string | null;
        };
        Relationships: [];
      };
      playlist_songs: {
        Row: {
          playlist_id: string;
          song_id: string;
        };
        Insert: {
          playlist_id: string;
          song_id: string;
        };
        Update: {
          playlist_id?: string;
          song_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'playlist_songs_playlist_id_fkey';
            columns: ['playlist_id'];
            referencedRelation: 'playlist';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'playlist_songs_song_id_fkey';
            columns: ['song_id'];
            referencedRelation: 'song';
            referencedColumns: ['id'];
          }
        ];
      };
      podcast: {
        Row: {
          id: string;
          img_url: string | null;
          name: string | null;
        };
        Insert: {
          id: string;
          img_url?: string | null;
          name?: string | null;
        };
        Update: {
          id?: string;
          img_url?: string | null;
          name?: string | null;
        };
        Relationships: [];
      };
      podcast_episodes: {
        Row: {
          episode_id: string;
          podcast_id: string;
        };
        Insert: {
          episode_id: string;
          podcast_id: string;
        };
        Update: {
          episode_id?: string;
          podcast_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'podcast_episodes_episode_id_fkey';
            columns: ['episode_id'];
            referencedRelation: 'episode';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'podcast_episodes_podcast_id_fkey';
            columns: ['podcast_id'];
            referencedRelation: 'podcast';
            referencedColumns: ['id'];
          }
        ];
      };
      podcast_genres: {
        Row: {
          genre_id: string;
          podcast_id: string;
        };
        Insert: {
          genre_id: string;
          podcast_id: string;
        };
        Update: {
          genre_id?: string;
          podcast_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'podcast_genres_genre_id_fkey';
            columns: ['genre_id'];
            referencedRelation: 'genre';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'podcast_genres_podcast_id_fkey';
            columns: ['podcast_id'];
            referencedRelation: 'podcast';
            referencedColumns: ['id'];
          }
        ];
      };
      song: {
        Row: {
          album_id: string | null;
          duration: number | null;
          id: string;
          is_explicit: boolean;
          is_liked: boolean;
          name: string | null;
          track_number: number | null;
        };
        Insert: {
          album_id?: string | null;
          duration?: number | null;
          id: string;
          is_explicit?: boolean;
          is_liked?: boolean;
          name?: string | null;
          track_number?: number | null;
        };
        Update: {
          album_id?: string | null;
          duration?: number | null;
          id?: string;
          is_explicit?: boolean;
          is_liked?: boolean;
          name?: string | null;
          track_number?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'song_album_id_fkey';
            columns: ['album_id'];
            referencedRelation: 'album';
            referencedColumns: ['id'];
          }
        ];
      };
      song_artist: {
        Row: {
          artist_id: string;
          song_id: string;
        };
        Insert: {
          artist_id: string;
          song_id: string;
        };
        Update: {
          artist_id?: string;
          song_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'song_artist_artist_id_fkey';
            columns: ['artist_id'];
            referencedRelation: 'artist';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'song_artist_song_id_fkey';
            columns: ['song_id'];
            referencedRelation: 'song';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      read_secret: {
        Args: {
          secret_name: string;
        };
        Returns: string;
      };
    };
    Enums: {
      album_type_enum: 'compilation' | 'album' | 'single';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row'];
